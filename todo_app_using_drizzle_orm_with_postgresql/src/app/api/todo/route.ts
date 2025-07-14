// import { db, QueryResult } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { NewTodo, Todo, db, todoTable } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";

// function capitalizeWords(str: string): string {
//   return str
//     .split(" ")
//     .map((word) => word[0]?.toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
// }

function capitalizeWords(str: string): string {
  return str.length > 0
    ? str[0].toUpperCase() + str.slice(1).toLowerCase()
    : "";
}

//GET REQUEST
export async function GET(request: NextRequest) {
  // const client = await db.connect();

  try {
    // await client.sql`CREATE TABLE IF NOT EXISTS Todos (
    //                 id SERIAL PRIMARY KEY,
    //                 task VARCHAR(255) NOT NULL);`;
    // const res = await client.sql`select * from Todos`;

    // console.log(res.rows.find((item) => item.id === 3));
    // return NextResponse.json({ result: res.rows });

    await sql`CREATE TABLE IF NOT EXISTS Todos (
      id SERIAL PRIMARY KEY,
      task VARCHAR(255) NOT NULL);`;
    const res = await db.select().from(todoTable);
    return NextResponse.json({ result: res });
  } catch (error) {
    // console.log((error as { message: string }).message);
    // throw new Error();
    return NextResponse.json(
      {
        message:
          (error as { message: string }).message || "Failed to fetch tasks",
      },
      { status: 500 }
    );
  }
}

// POST REQUEST
export async function POST(request: NextRequest) {
  try {
    const req = await request.json();

    if (!req.task || req.task.trim() === "") {
      throw new Error("Task is required");
    }

    const capitalizeTask = capitalizeWords(req.task);
    console.log(req.task);

    const res = await db
      .insert(todoTable)
      .values({
        task: capitalizeTask,
      })
      .returning();

    console.log("Insert result:", res);

    return NextResponse.json({
      message: "Data added successfully",
      result: res,
    });
  } catch (error) {
    console.error("Error adding task:", error);
    return NextResponse.json(
      { error: (error as { message: string }).message || "Unknown error" },
      { status: 500 }
    );
  }
}

// PUT: Update a todo by ID
export async function PUT(request: NextRequest) {
  const req = await request.json();

  try {
    if (!req.id || !req.task) {
      throw new Error("Both 'id' and 'task' fields are required");
    }

    const capitalizeTask = capitalizeWords(req.task);
    console.log("updated by put result:", capitalizeTask);

    const res = await db
      .update(todoTable)
      .set({ task: capitalizeTask })
      .where(eq(todoTable.id, req.id))
      .returning();

    return NextResponse.json({
      message: "Todo updated successfully",
      "updated Task": capitalizeTask,
    });
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}

// DELETE: Delete a todo by ID
export async function DELETE(request: NextRequest) {
  const req = await request.json();

  try {
    if (!req.id) {
      throw new Error("'id' field is required");
    }

    const res = await db
      .delete(todoTable)
      .where(eq(todoTable.id, req.id))
      .returning();

    return NextResponse.json({
      message: "Todo deleted successfully",
      data: res,
    });
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}
