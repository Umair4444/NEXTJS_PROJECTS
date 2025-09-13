"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export function GradientText({ children, className, animate = false }: GradientTextProps) {
  const textElement = (
    <span
      className={cn(
        "bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent",
        "bg-size-200 bg-pos-0",
        animate && "animate-gradient-x",
        className,
      )}
    >
      {children}
    </span>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {textElement}
      </motion.div>
    )
  }

  return textElement
}
