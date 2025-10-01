"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart } from "lucide-react"

interface FloatingHeart {
  id: number
  x: number
  y: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: FloatingHeart = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
      }

      setHearts((prev) => [...prev, newHeart])

      // Remove heart after animation
      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id))
      }, 4000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              x: heart.x,
              y: heart.y,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: heart.y - window.innerHeight - 100,
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              rotate: [0, 360],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 4,
              ease: "easeOut",
            }}
            className="absolute"
          >
            <Heart className="h-6 w-6 text-primary/30 fill-current" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
