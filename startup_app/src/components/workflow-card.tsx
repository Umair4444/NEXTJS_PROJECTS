"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Eye, Heart } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

interface WorkflowCardProps {
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
  index: number
}

export function WorkflowCard({
  title,
  description,
  image,
  rating,
  reviews,
  creator,
  stats,
  badge,
  index,
}: WorkflowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
        <div className="relative aspect-video overflow-hidden bg-muted">
          {badge && <Badge className="absolute top-3 right-3 z-10 bg-background/90 text-foreground">{badge}</Badge>}
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>

        <CardHeader className="pb-3">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardHeader>

        <CardContent className="pb-3 flex-1">
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">{reviews} reviews</span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Avatar className="w-6 h-6">
              <AvatarImage src={creator.avatar || "/placeholder.svg"} alt={creator.name} />
              <AvatarFallback>{creator.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">{creator.name}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{stats.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{stats.likes}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0 flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            Watch
          </Button>
          <Button size="sm" className="flex-1">
            Get Workflow
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
