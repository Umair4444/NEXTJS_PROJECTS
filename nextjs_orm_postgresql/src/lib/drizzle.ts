import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'
// import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const todoTable = pgTable("todos", {
  id: serial("id").primaryKey(),
  task: varchar("task", { length: 255 }).notNull(),
});

// ✅ New, modern way to infer types:
export type Todo = InferSelectModel<typeof todoTable>; // For SELECT queries
export type NewTodo = InferInsertModel<typeof todoTable>; // For INSERT queries

// ✅ Deprecated, modern way to infer types:
// export type Todo = InferModel<typeof todoTable>;
// export type newTodo = InferModel<typeof todoTable, "insert">;

export const db = drizzle(sql)

