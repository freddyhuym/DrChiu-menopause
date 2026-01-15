import { MongoClient, Db } from "mongodb";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";
import dotenv from "dotenv";

dotenv.config();

let mongoClient: MongoClient | null = null;
let mongoDb: Db | null = null;
let pgPool: pg.Pool | null = null;
let postgresDb: any = null;

export type DbType = "mongodb" | "postgres" | "memory";
export let activeDbType: DbType = "memory";

export async function connectDB() {
  // 1. 嘗試 MongoDB
  const mongoUri = process.env.MONGODB_URI || (process.env.DATABASE_URL?.startsWith("mongodb") ? process.env.DATABASE_URL : null);
  
  if (mongoUri) {
    try {
      mongoClient = new MongoClient(mongoUri, {
        serverSelectionTimeoutMS: 2000, // 縮短超時時間以利快速切換
      });
      await mongoClient.connect();
      const dbName = mongoUri.split("/").pop()?.split("?")[0] || "clinic";
      mongoDb = mongoClient.db(dbName);
      activeDbType = "mongodb";
      console.log("✅ Connected to MongoDB");
      return { type: "mongodb", db: mongoDb };
    } catch (error) {
      console.warn("⚠️ MongoDB connection failed, trying PostgreSQL...");
    }
  }

  // 2. 嘗試 PostgreSQL
  const pgUri = process.env.DATABASE_URL?.startsWith("postgres") ? process.env.DATABASE_URL : null;
  if (pgUri) {
    try {
      pgPool = new pg.Pool({ connectionString: pgUri });
      postgresDb = drizzle(pgPool, { schema });
      activeDbType = "postgres";
      console.log("✅ Connected to PostgreSQL (Drizzle)");
      return { type: "postgres", db: postgresDb };
    } catch (error) {
      console.warn("⚠️ PostgreSQL connection failed, falling back to MemStorage...");
    }
  }

  // 3. 最終備援：Memory
  activeDbType = "memory";
  console.log("ℹ️ Using MemStorage (No database connected)");
  return { type: "memory", db: null };
}

export function getMongoDB() {
  if (!mongoDb) throw new Error("MongoDB not connected");
  return mongoDb;
}

export function getPostgresDB() {
  if (!postgresDb) throw new Error("PostgreSQL not connected");
  return postgresDb;
}
