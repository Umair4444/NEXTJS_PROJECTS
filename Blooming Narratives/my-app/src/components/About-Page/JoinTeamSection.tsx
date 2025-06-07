"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JoinTeamSection() {
  return (
    <motion.section
      className="text-center max-w-xl mx-auto mt-16 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold">Join Our Creative Circle</h2>
      <p className="text-muted-foreground pb-3">
        Passionate about words, stories, and visuals? Join our team of bloggers
        and editors!
      </p>
      <Link href="/contact">
        <Button variant="default" size="lg">
          Contact Us
        </Button>
      </Link>
    </motion.section>
  );
}
