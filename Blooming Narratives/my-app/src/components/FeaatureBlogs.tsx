import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Post {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  date: string;
}

interface FeatureBlogssProps {
  posts: Post[];
}

const FeatureBlogs: FC<FeatureBlogssProps> = ({ posts }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Featured Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
          {posts.slice(0, 3).map((post, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:border-2 dark:hover:border-0 dark:hover:border-y-2 hover:border-slate-500 dark:hover:border-slate-600"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow  bg-gray-100 dark:bg-gray-800 border-2">
                <span className="text-sm text-gray-600 dark:text-slate-300">
                  {post.date}
                </span>
                <h3 className="text-xl font-bold text-slate-500 mt-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 mt-2 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlogs;
