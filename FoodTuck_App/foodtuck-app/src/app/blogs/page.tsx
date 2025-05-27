"use client";
import Reviewer from "@/components/Blog/Reviewer";
import RecentPost from "@/components/Blog/RecentPost";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/Redux-toolkit/store";
import { fetchBlogs } from "@/app/Redux-toolkit/feature/BlogSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IBlog } from "../utils/Types";

const BlogList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs, status, error } = useSelector(
    (state: RootState) => state.blogs
  );
  const router = useRouter();

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2; // Define the number of blogs per page

  // Calculate the index range for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogs());
    }
  }, [dispatch, status]);

  if (status === "loading")
    return <p className="text-center h-screen">Loading blogs...</p>;
  if (status === "failed")
    return <p className="text-center text-red-500 h-screen">Error: {error}</p>;

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 mt-10">
      {/* Main Blog List */}
      <div className="flex-1">
        {currentBlogs.map((res: IBlog) => (
          <div key={res.id} className="bg-white shadow-lg rounded-lg mb-8">
            <div className="flex flex-col md:flex-row">
              {/* Blog Image */}
              <div className="md:w-1/3">
                {/* <Link href={`/blogs/${res.slug}`}> */}
                <Image
                  src={res.image}
                  alt={res.title || "Blog image"}
                  className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                {/* </Link> */}
              </div>
              {/* Blog Content */}
              <div className="p-4 md:w-2/3 flex flex-col justify-between">
                <div>
                  <h2 className="text-sm text-gray-500 mb-2">
                    {res.createdAt.slice(0, 10)} • {res.category}
                  </h2>
                  <h1 className="text-xl font-bold text-gray-800">
                    {res.title}
                  </h1>
                  <p className="text-gray-600 mt-2">{res.summary}</p>
                </div>
                <div className="mt-4 text-black bg-yellow-500 rounded-lg w-fit px-6 py-2">
                  <button onClick={() => router.push(`/blogs/${res.slug}`)}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500"
                : "bg-yellow-500 text-black"
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 mx-1 rounded ${
                  currentPage === page
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {page}
              </button>
            )
          )}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500"
                : "bg-yellow-500 text-black"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-1/4">
        <div className="my-3 py-4 bg-white text-black">
          <Reviewer />
        </div>
        <div className="bg-white text-black py-4">
          <RecentPost />
        </div>
      </div>
    </div>
  );
};

export default BlogList;
