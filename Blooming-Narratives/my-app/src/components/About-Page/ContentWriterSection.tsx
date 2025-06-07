"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ContentWriterSection() {
  return (
    <motion.section
      className="max-w-5xl mx-auto mt-10"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="flex flex-col md:flex-row items-center p-6 dark:bg-slate-900 border dark:border-slate-700 gap-6 shadow-sm">
        <Image
          src="/heroimage.jpg"
          alt="Writer"
          width={100}
          height={100}
          className="rounded-full object-cover border"
        />
        <CardContent className="space-y-2 p-0">
          <h3 className="text-xl font-bold">Avery Reynolds</h3>
          <p className="text-muted-foreground">
            Our lead content creator who blends deep insight with storytelling magic to craft inspiring blog pieces.
          </p>
        </CardContent>
      </Card>
    </motion.section>
  );
}
