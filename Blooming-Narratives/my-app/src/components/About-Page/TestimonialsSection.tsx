"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  return (
    <motion.section
      className="max-w-3xl mx-auto text-center mt-12"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="dark:bg-slate-900 border dark:border-slate-700 shadow-sm">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">What Readers Say</h2>
          <blockquote className="italic text-muted-foreground">
            “This blog consistently inspires me to think deeper, live better,
            and learn more.”
          </blockquote>
          <p className="font-semibold">— Jamie L., Blogger</p>
        </CardContent>
      </Card>
    </motion.section>
  );
}
