"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Brain, Lock, Heart, Users, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { staggerContainer, fadeInUp, cardHover, iconHover } from "@/lib/animations"

const features = [
  {
    icon: Shield,
    title: "Verified Profiles",
    description:
      "Every profile is thoroughly verified with ID and background checks to ensure authenticity and safety.",
  },
  {
    icon: Brain,
    title: "AI Matchmaking",
    description:
      "Our advanced AI algorithm analyzes compatibility factors to suggest the most suitable matches for you.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your personal information is protected with bank-level security and complete privacy controls.",
  },
  {
    icon: Heart,
    title: "Meaningful Connections",
    description: "Focus on building deep, lasting relationships with people who share your values and life goals.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a supportive community of like-minded individuals on their journey to find love.",
  },
  {
    icon: MessageCircle,
    title: "Smart Conversations",
    description: "AI-powered conversation starters and relationship coaching to help you connect authentically.",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance"
          >
            Why Choose SoulMate?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            Experience the future of matchmaking with our innovative features designed to help you find your perfect
            partner safely and efficiently.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <motion.div variants={cardHover} whileHover="hover">
                <Card className="h-full bg-card hover:bg-accent/50 transition-colors duration-300 border-border/50 hover:border-primary/20 shadow-sm">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
                      variants={iconHover}
                      whileHover="hover"
                    >
                      <feature.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
