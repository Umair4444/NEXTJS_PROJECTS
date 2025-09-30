"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

export function AuthorsSection() {
  const authors = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      bio: "Former Product Lead at Google. Built 3 successful startups from scratch. Passionate about helping founders automate their way to success.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Marcus Hartwell",
      role: "Co-Founder & CTO",
      bio: "Ex-Engineering Director at Stripe. 15+ years building automation systems. Believes every startup should have enterprise-level automation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Lisa Steinborn",
      role: "Head of Community",
      bio: "Built and scaled communities for Y Combinator startups. Dedicated to creating the most supportive founder community in the world.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the Authors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve been in your shoes. Now we&apos;re here to help you succeed faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <motion.div
              key={author.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                  <Image src={author.image || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{author.name}</h3>
                <p className="text-sm text-primary mb-3">{author.role}</p>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{author.bio}</p>
                <div className="flex gap-3">
                  <a
                    href={author.linkedin}
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={author.twitter}
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
