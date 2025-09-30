"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Start your journey</h2>
        <p className="text-xl md:text-2xl mb-8">
          From <span className="text-primary font-semibold">Startup Dream to Reality</span>
        </p>
        <Button size="lg" className="text-lg px-8">
          Get Started
        </Button>
      </motion.div>
    </section>
  )
}
