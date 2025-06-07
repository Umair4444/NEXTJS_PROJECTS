"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const editors = [
  { name: "Jordan Silva", role: "Senior Editor" },
  { name: "Maya Chen", role: "Content Strategist" },
  { name: "Leo Carter", role: "Fact Checker" },
];

export default function EditorsSection() {
  return (
    <motion.section
      className="max-w-6xl mx-auto mt-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Our Editorial Team</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {editors.map((editor, i) => (
          <Card key={i} className="dark:bg-slate-900 border dark:border-slate-700 shadow-md text-center">
            <CardContent className="p-4 space-y-2">
              <Image
                src="/heroimage.jpg"
                alt={editor.name}
                width={80}
                height={80}
                className="mx-auto rounded-full border"
              />
              <h4 className="font-bold">{editor.name}</h4>
              <p className="text-sm text-muted-foreground">{editor.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
