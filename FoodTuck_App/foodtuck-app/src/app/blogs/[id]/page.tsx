"use client";
import { fetchBlogs } from "@/app/Redux-toolkit/feature/BlogSlice";
import { AppDispatch, RootState } from "@/app/Redux-toolkit/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IBlog } from "@/app/utils/Types";
import { CommentForm } from "@/components/Blog/CommentsForm";
import { CommentList } from "@/components/Blog/CommentList";

const BlogPage = ({ params }: { params: { id: string } }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs, status, error } = useSelector(
    (state: RootState) => state.blogs
  );
  const router = useRouter();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogs());
    }
  }, [dispatch, status]);

  if (status === "loading")
    return <p className="text-lg h-screen text-gray-400">Loading blogs...</p>;
  if (status === "failed")
    return <p className="text-lg text-red-500 h-screen">Error loading blog: {error}</p>;

  const foundblog = blogs.find((blog: IBlog) => params.id === blog.slug);

  if (!foundblog) {
    return (
      <div className="h-screen">
        <h1 className="text-3xl text-white ">Blog Not Found</h1>
        <p className="text-gray-400">
          The blog you are looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="p-4 flex flex-col md:flex-row gap-6 items-start mt-10">
        {/* Blog Image Section */}
        {foundblog.image && (
          <div className="w-full md:w-1/3">
            <Image
              src={foundblog.image}
              alt={foundblog.title}
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        )}

        {/* Blog Text Section */}
        <div className="flex-1">
          <h1 className="text-5xl text-white mb-4">{foundblog.title}</h1>
          <p className="text-lg text-gray-400 mb-4">By {foundblog.author}</p>
          <p className="text-white leading-7">{foundblog.content}</p>
          <button
            className="mt-5 px-7 py-3 rounded-lg bg-yellow-500 font-bold text-white"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
      <div className="mt-4 px-5">
        <CommentForm />
      </div>
      <CommentList />
    </>
  );
};

export default BlogPage;
