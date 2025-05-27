import { NextRequest, NextResponse } from "next/server";

interface Comment {
  id: number; // ✅ Add an ID for easier handling in frontend
  username: string;
  profession: string;
  comment: string;
  rating: number;
  avatar?: string;
}

// Temporary in-memory storage
const usercomments: Comment[] = [];
let nextId = 1; // ✅ Unique ID counter

export async function GET() {
  console.log("usercomments", usercomments);
  return NextResponse.json({
    message: "Fetched comments successfully",
    usercomments,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, profession, comment, rating, avatar } = body;

    // ✅ Validate required fields
    if (!comment || !rating) {
      return NextResponse.json(
        { error: "Comment and rating are required." },
        { status: 400 }
      );
    }

    const newComment: Comment = {
      id: nextId++, // ✅ Assign unique ID
      username: username,
      profession: profession ,
      comment,
      rating,
      avatar: avatar || "", // Optional avatar URL
    };

    usercomments.push(newComment);
    // console.log("New Comment Added:", newComment);
    // console.log("All Comment Added:", usercomments);

    return NextResponse.json(
      {
        message: "Comment added successfully",
        comment: newComment,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    );
  }
}
