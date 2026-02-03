import { type User, type InsertUser, users } from "@shared/schema";
import { activeDbType, getMongoDB, getPostgresDB } from "./db";
import { ObjectId } from "mongodb";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

const DEFAULT_PAYLOAD_PUBLIC_URL = process.env.PAYLOAD_PUBLIC_URL || "https://cms.carebeautyclinic.com.tw";

// 🚀 核心：解析媒體 ID 為完整 URL
async function resolveMediaUrl(mediaField: any): Promise<string | undefined> {
  if (!mediaField) return undefined;

  // 1. 如果已經是網址
  if (typeof mediaField === 'string' && (mediaField.startsWith("http") || mediaField.startsWith("/"))) {
    return normalizeMediaUrl(mediaField);
  }

  // 2. 如果是物件，嘗試提取 url 或 filename
  if (typeof mediaField === 'object') {
    const path = mediaField.url || (mediaField.filename ? `/media/${mediaField.filename}` : undefined);
    if (path) return normalizeMediaUrl(path);
  }

  // 3. 如果是 ID，去 MongoDB 查詢
  if (activeDbType === "mongodb") {
    try {
      const db = getMongoDB();
      let query: any = { _id: mediaField };
      if (typeof mediaField === 'string' && ObjectId.isValid(mediaField)) {
        query = { $or: [{ _id: new ObjectId(mediaField) }, { _id: mediaField }] };
      }
      
      const mediaDoc = await db.collection("media").findOne(query);
      if (mediaDoc) {
        const path = mediaDoc.url || (mediaDoc.filename ? `/media/${mediaDoc.filename}` : undefined);
        return path ? normalizeMediaUrl(path) : undefined;
      }
    } catch (e) {
      console.warn(`⚠️ 無法解析媒體 ID: ${mediaField}`);
    }
  }

  return undefined;
}

function normalizeMediaUrl(url?: string): string | undefined {
  if (!url) return undefined;
  let normalized = url;
  if (normalized.includes("localhost")) {
    normalized = normalized.replace(/https?:\/\/localhost(?::\d+)?/gi, DEFAULT_PAYLOAD_PUBLIC_URL);
    normalized = normalized.replace(/localhost(?::\d+)?/gi, new URL(DEFAULT_PAYLOAD_PUBLIC_URL).hostname);
  }
  if (normalized.startsWith("/media/")) {
    normalized = `${DEFAULT_PAYLOAD_PUBLIC_URL}${normalized}`;
  }
  return normalized;
}

async function processContentMedia(content: any): Promise<any> {
  if (!content || !content.root) return content;
  
  const processNodes = async (nodes: any[]): Promise<any[]> => {
    if (!nodes || !Array.isArray(nodes)) return nodes;
    return Promise.all(nodes.map(async (node) => {
      if (node.type === "block" && node.fields?.blockType === "mediaBlock") {
        const mediaUrl = await resolveMediaUrl(node.fields.media);
        return { ...node, fields: { ...node.fields, mediaUrl: normalizeMediaUrl(mediaUrl) } };
      }
      if (node.children) {
        node.children = await processNodes(node.children);
      }
      return node;
    }));
  };

  try {
    const newContent = JSON.parse(JSON.stringify(content));
    newContent.root.children = await processNodes(newContent.root.children);
    return newContent;
  } catch (e) {
    return content;
  }
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getPosts(): Promise<any[]>;
  getPublishedPosts(): Promise<any[]>;
  getPostsByCategory(category: string): Promise<any[]>;
  getPostBySlug(slug: string): Promise<any | null>;
}

class MongoStorage implements IStorage {
  private async coll(name: string) { return getMongoDB().collection(name); }

  async getUser(id: string) {
    try {
      if (!ObjectId.isValid(id)) return undefined;
      const user = await (await this.coll("users")).findOne({ _id: new ObjectId(id) });
      return user ? { ...user, id: user._id.toString() } as User : undefined;
    } catch { return undefined; }
  }

  async getUserByUsername(username: string) {
    const user = await (await this.coll("users")).findOne({ username });
    return user ? { ...user, id: user._id.toString() } as User : undefined;
  }

  async createUser(insertUser: InsertUser) {
    const result = await (await this.coll("users")).insertOne({ ...insertUser, createdAt: new Date() });
    return { ...insertUser, id: result.insertedId.toString() } as User;
  }

  private async transformPost(post: any) {
    if (!post) return null;
    try {
      const heroImageUrl = await resolveMediaUrl(post.heroImage);
      return {
        ...post,
        id: post._id.toString(),
        featuredImageUrl: heroImageUrl,
        content: await processContentMedia(post.content)
      };
    } catch (e) {
      console.error(`❌ 轉換文章 ${post.title} 失敗:`, e);
      return { ...post, id: post._id.toString() };
    }
  }

  async getPosts() {
    const posts = await (await this.coll("posts")).find().sort({ updatedAt: -1 }).toArray();
    return Promise.all(posts.map(post => this.transformPost(post)));
  }

  async getPublishedPosts() {
    const posts = await (await this.coll("posts"))
      .find({ $or: [{ _status: "published" }, { status: "published" }] })
      .sort({ publishedAt: -1 })
      .toArray();
    return Promise.all(posts.map(post => this.transformPost(post)));
  }

  async getPostsByCategory(category: string) {
    const posts = await (await this.coll("posts"))
      .find({ 
        articleCategory: category,
        $or: [{ _status: "published" }, { status: "published" }]
      })
      .sort({ publishedAt: -1 })
      .toArray();
    return Promise.all(posts.map(post => this.transformPost(post)));
  }

  async getPostBySlug(slug: string) {
    const post = await (await this.coll("posts")).findOne({ slug });
    if (!post) return null;
    return await this.transformPost(post);
  }
}

class PostgresStorage implements IStorage {
  async getUser(id: string) {
    const [user] = await getPostgresDB().select().from(users).where(eq(users.id, id));
    return user;
  }
  async getUserByUsername(username: string) {
    const [user] = await getPostgresDB().select().from(users).where(eq(users.username, username));
    return user;
  }
  async createUser(insertUser: InsertUser) {
    const [user] = await getPostgresDB().insert(users).values(insertUser).returning();
    return user;
  }
  async getPosts() { return []; }
  async getPublishedPosts() { return []; }
  async getPostsByCategory(category: string) { return []; }
  async getPostBySlug(slug: string) { return null; }
}

class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  async getUser(id: string) { return this.users.get(id); }
  async getUserByUsername(username: string) {
    return Array.from(this.users.values()).find(u => u.username === username);
  }
  async createUser(insertUser: InsertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getPosts() { return []; }
  async getPublishedPosts() { return []; }
  async getPostsByCategory(category: string) { return []; }
  async getPostBySlug(slug: string) { return null; }
}

class StorageProxy implements IStorage {
  private instances: Record<string, IStorage> = {
    mongodb: new MongoStorage(),
    postgres: new PostgresStorage(),
    memory: new MemStorage()
  };
  private get current() {
    return this.instances[activeDbType] || this.instances.memory;
  }
  getUser(id: string) { return this.current.getUser(id); }
  getUserByUsername(username: string) { return this.current.getUserByUsername(username); }
  createUser(user: InsertUser) { return this.current.createUser(user); }
  getPosts() { return this.current.getPosts(); }
  getPublishedPosts() { return this.current.getPublishedPosts(); }
  getPostsByCategory(category: string) { return this.current.getPostsByCategory(category); }
  getPostBySlug(slug: string) { return this.current.getPostBySlug(slug); }
}

export const storage = new StorageProxy();
