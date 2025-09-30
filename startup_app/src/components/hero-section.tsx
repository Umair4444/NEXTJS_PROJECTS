"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Rocket, Users } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Turn Your Startup Dream Into <span className="text-chart-2">Startup Reality</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto text-pretty">
          Get instant access to curated, continuously battle-tested automation workflows that early-stage startups use
          to validate their ideas, and scale from zero to revenue.
        </p>

        <p className="text-base md:text-lg font-semibold mb-8">No theory - just proven systems that work.</p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-chart-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-chart-3" />
            <span>30+ Curated Workflows</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-chart-3" />
            <span>Early-Stage Focused</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-chart-3" />
            <span>Community Driven</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto bg-chart-2 hover:bg-chart-2/80 hover:scale-105">
            Join Community
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent hover:bg-chart-2 hover:text-secondary dark:bg-primary dark:text-secondary dark:hover:bg-chart-2 dark:hover:text-primary">
            See How It Works
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
