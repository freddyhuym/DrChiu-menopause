import { type User, type InsertUser, users } from "@shared/schema";
import { activeDbType, getMongoDB, getPostgresDB } from "./db";
import { ObjectId } from "mongodb";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // 擴充方法 (供 ClinicImageNode 共享使用)
  getPosts(): Promise<any[]>;
  getPublishedPosts(): Promise<any[]>;
  getPostsByCategory(category: string): Promise<any[]>;
  getPostBySlug(slug: string): Promise<any | null>;
}

// ---------------------------------------------------------
// 1. MongoDB 實作
// ---------------------------------------------------------
class MongoStorage implements IStorage {
  private async coll(name: string) { return getMongoDB().collection(name); }

  async getUser(id: string) {
    if (!ObjectId.isValid(id)) return undefined;
    const user = await (await this.coll("users")).findOne({ _id: new ObjectId(id) });
    return user ? { ...user, id: user._id.toString() } as User : undefined;
  }

  async getUserByUsername(username: string) {
    const user = await (await this.coll("users")).findOne({ username });
    return user ? { ...user, id: user._id.toString() } as User : undefined;
  }

  async createUser(insertUser: InsertUser) {
    const result = await (await this.coll("users")).insertOne({ ...insertUser, createdAt: new Date() });
    return { ...insertUser, id: result.insertedId.toString() } as User;
  }

  async getPosts() {
    return (await this.coll("posts")).find().sort({ updatedAt: -1 }).toArray();
  }

  async getPublishedPosts() {
    return (await this.coll("posts")).find({ status: "published" }).sort({ publishedAt: -1 }).toArray();
  }

  async getPostsByCategory(category: string) {
    return (await this.coll("posts"))
      .find({ articleCategory: category, status: "published" })
      .sort({ publishedAt: -1 })
      .toArray();
  }

  async getPostBySlug(slug: string) {
    return (await this.coll("posts")).findOne({ slug });
  }
}

// ---------------------------------------------------------
// 2. PostgreSQL (Drizzle) 實作
// ---------------------------------------------------------
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

  async getPosts() { return []; } // 視需求實作 Postgres 的文章查詢
  async getPublishedPosts() { return []; }
  async getPostsByCategory(category: string) { return []; }
  async getPostBySlug(slug: string) { return null; }
}

// ---------------------------------------------------------
// 3. MemStorage (備援模式)
// ---------------------------------------------------------
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

// ---------------------------------------------------------
// 代理導向器 (根據連線狀態選擇實作)
// ---------------------------------------------------------
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
