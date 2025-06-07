"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <motion.section
      className="mx-auto max-w-4xl text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="dark:bg-slate-900 shadow-md border dark:border-slate-700">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-3xl font-bold">About Our Blog</h1>
          <p className="text-muted-foreground text-lg">
            Welcome to our digital storytelling hub — where ideas, culture,
            tech, and creativity merge. We bring valuable, fresh, and bold
            content that resonates.
          </p>
        </CardContent>
      </Card>
    </motion.section>
  );
}
