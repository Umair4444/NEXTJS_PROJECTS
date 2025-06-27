import { db, QueryResult } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const client = await db.connect();

  try {
    await client.sql`CREATE TABLE IF NOT EXISTS Todos (
                    id SERIAL PRIMARY KEY,
                    task VARCHAR(255) NOT NULL);`;

    const res = await client.sql`select * from Todos`;
    console.log(res.rows.find((item) => item.id === 3));

    return NextResponse.json({ result: res.rows });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Somethong is wrong" });
  }
}

export async function POST(request: NextRequest) {
  const client = await db.connect();
  const req = await request.json();

  try {
    if (req.task) {
      const res =
        await client.sql`insert into Todos(task) values(${req.task});`;
      console.log(res);
      return NextResponse.json({ message: "Data added successfully" });
    } else {
      throw new Error("Task field is required");
    }
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}
