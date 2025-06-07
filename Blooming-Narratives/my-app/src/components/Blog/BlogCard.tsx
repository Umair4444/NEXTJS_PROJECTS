import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export type Blog = {
  id: number;
  title: string;
  content: string;
  image: string;
  slug: string;
};

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="block w-full">
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-full"
      >
        <Card className="rounded-2xl shadow-md bg-background dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
          <Image
            width={500}
            height={500}
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-foreground dark:text-white mb-2">
              {blog.title}
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 text-sm line-clamp-3">
              {blog.content}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
