"use client";
import React, { useState } from "react";
import { BlogCard, Blog } from "@/components/Blog/BlogCard";
import { Button } from "@/components/ui/button";
import { RecentPosts, Reviews, Comments } from "@/components/Blog/Sidebar";

const dummyBlogs: Blog[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: `Blog Post Title ${i + 1}`,
  content: `This is a preview for blog post ${i + 1}. It gives a quick snippet of the article to entice readers.`,
  image: `/heroimage2.jpg`,
  slug: `blog-post-${i + 1}`,
}));

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const totalPages = Math.ceil(dummyBlogs.length / blogsPerPage);

  const paginatedBlogs = dummyBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Main Blog Posts */}
      <div className="md:col-span-3 space-y-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={i}
              variant={i + 1 === currentPage ? "default" : "outline"}
              onClick={() => setCurrentPage(i + 1)}
              className="text-sm"
            >
              {i + 1}
            </Button>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        <RecentPosts blogs={dummyBlogs} />
        <Reviews />
        <Comments />
      </aside>
    </div>
  );
}
