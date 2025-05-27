"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa"; // For loading spinner
import mrx from "@/assets/fullstar.png";

interface Comment {
  id: number;
  username: string;
  profession: string;
  comment: string;
  rating: number;
  avatar?: string;
}

export function CommentList() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch comments from API
  const fetchComments = async () => {
    try {
      const response = await fetch("/api/comments", {
        cache: "no-store",
      });
      const data = await response.json();
      if (!response.ok) throw new Error("Failed to fetch comments");
      setComments(data.usercomments || []);
      localStorage.setItem("comments", JSON.stringify(data.usercomments || [])); // ✅ Save to localStorage
    } catch (error) {
      console.error("Error fetching comments:", error);
      setError("Unable to load comments. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Polling: Fetch comments every 5 seconds
  useEffect(() => {
    // ✅ Load comments from localStorage on mount
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
      setIsLoading(false);
    } else {
      fetchComments(); // Fetch from API if nothing in localStorage
    }
    const interval = setInterval(fetchComments, 5000); // Fetch every  10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="space-y-4">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <FaSpinner className="animate-spin text-2xl text-blue-500" />
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : comments.length === 0 ? (
        <p className="text-center text-gray-500">
          No comments yet. Be the first to add one!
        </p>
      ) : (
        comments.map((comment: Comment) => (
          <div
            key={comment.id}
            className="p-4 mx-4 my-5  border rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-4">
              {comment.avatar ? (
                <Image
                  src={comment.avatar}
                  alt="Avatar"
                  width={200}
                  height={200}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-white">
                    <Image src={mrx} alt="mrx" width={200} height={200} />
                  </span>
                </div>
              )}
              <div>
                <h4 className="text-lg font-semibold">{comment.username}</h4>
                <p className="text-sm text-gray-500">{comment.profession}</p>
              </div>
            </div>
            <p className="mt-2">{comment.comment}</p>
            <div className="flex space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < comment.rating ? "text-yellow-500" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
