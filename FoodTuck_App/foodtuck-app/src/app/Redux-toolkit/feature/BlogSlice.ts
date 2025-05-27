import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "@/sanity/lib/client";
import { IBlog } from "@/app/utils/Types";

// // Define an interface for the blog data
// interface Blog {
//   id: string;
//   title: string;
//   slug: string;
//   content: string;
//   summary: string;
//   author: string;
//   image: string;
//   tags: string[];
//   category: string;
//   createdAt: string;
//   isPublished: boolean;
// }

interface BlogState {
  blogs: IBlog[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: BlogState = {
  blogs: [],
  status: "idle",
  error: null,
};

// Async thunk to fetch blogs
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const query = `*[_type == "blog"] {
    _id,
    title,
    slug,
    content,
    summary,
    author,
    "image": image.asset->url,
    tags,s
    category,
    _createdAt,
    isPublished
  }`;

  const blogs = await client.fetch(query);
  return blogs.map((blog: any) => ({
    id: blog._id,
    title: blog.title,
    slug: blog.slug.current,
    content: blog.content,
    summary: blog.summary,
    author: blog.author,
    image: blog.image,
    tags: blog.tags,
    category: blog.category,
    createdAt: blog._createdAt,
    isPublished: blog.isPublished,
  }));
});

// Slice
const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch blogs";
      });
  },
});

export default blogSlice.reducer;
