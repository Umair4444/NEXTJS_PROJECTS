"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Zap, TrendingUp, Award } from "lucide-react"

export function JoinSection() {
  const stats = [
    {
      icon: Users,
      value: "2,500+",
      label: "Active Founders",
    },
    {
      icon: Zap,
      value: "10,000+",
      label: "Automations Built",
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Success Rate",
    },
    {
      icon: Award,
      value: "$50M+",
      label: "Revenue Generated",
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-12 bg-gradient-to-br from-primary/10 via-background to-background border-primary/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Ready to Join 2,500+ Early-Stage Founders?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Join a thriving community of founders who are building, scaling, and succeeding with automation. Get
                access to proven workflows, expert guidance, and a supportive network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  Schedule a Demo
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
