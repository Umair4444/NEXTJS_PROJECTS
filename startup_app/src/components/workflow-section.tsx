"use client"

import { WorkflowCard } from "./workflow-card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

interface WorkflowSectionProps {
  title: string
  icon: string
  count: string
  workflows: Array<{
    title: string
    description: string
    image: string
    rating: number
    reviews: number
    creator: {
      name: string
      avatar: string
    }
    stats: {
      views: number
      likes: number
    }
    badge?: string
  }>
}

export function WorkflowSection({ title, icon, count, workflows }: WorkflowSectionProps) {
  return (
    <section id="videos"  className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{icon}</span>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <span className="text-sm text-muted-foreground">{count}</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {workflows.map((workflow, index) => (
          <WorkflowCard key={index} {...workflow} index={index} />
        ))}
      </div>

      <div className="text-center">
        <Link href="/workflows">
          <Button variant="outline">Load more (2 more workflows)</Button>
        </Link>
      </div>
    </section>
  )
}
