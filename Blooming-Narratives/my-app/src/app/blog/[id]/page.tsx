"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useRef, useState } from "react";

const commentsDummy = [
  {
    id: 1,
    user: "John Doe",
    rating: 4,
    text: "Great insights, thanks for sharing!",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    user: "Anonymous",
    rating: 5,
    text: "Loved this article!",
    timestamp: "1 day ago",
  },
];

export default function SingleBlogPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto space-y-8 dark:text-white">
      {/* Hero Image */}
      <motion.img
        src="/heroimage2.jpg"
        alt="Blog Hero"
        className="rounded-2xl w-full h-64 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Blog Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-bold">The Future of AI in Web Development</h1>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/heroimage.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Jane Smith</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Published on June 6, 2025</p>
          </div>
        </div>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            AI is changing the landscape of front-end development. Tools like GitHub Copilot,
            ChatGPT, and generative design systems are speeding up workflows...
          </p>
        </div>
      </motion.div>

      {/* Comment Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Leave a Comment</h2>
        <Textarea
          placeholder="Write your thoughts here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px] border border-black dark:border-white"
        />
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 cursor-pointer ${
                rating >= star ? "text-yellow-500" : "text-gray-400"
              }`}
              onClick={() => setRating(star)}
              fill={rating >= star ? "#facc15" : "none"}
            />
          ))}
        </div>
        <Button>Submit Comment</Button>
      </div>

      {/* Latest Comments */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Latest Comments</h2>
        {commentsDummy.map((c) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{c.user}</p>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          c.rating >= i ? "text-yellow-500" : "text-gray-400"
                        }`}
                        fill={c.rating >= i ? "#facc15" : "none"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{c.text}</p>
                <p className="text-xs text-muted-foreground">{c.timestamp}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
