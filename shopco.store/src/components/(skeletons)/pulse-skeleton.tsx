"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface PulseSkeletonProps {
  className?: string
  children?: React.ReactNode
  intensity?: "light" | "medium" | "strong"
}

export function PulseSkeleton({ className, children, intensity = "medium" }: PulseSkeletonProps) {
  const intensityClasses = {
    light: "animate-pulse",
    medium: "animate-pulse",
    strong: "animate-bounce",
  }

  const bgClasses = {
    light: "bg-gray-100",
    medium: "bg-gray-200",
    strong: "bg-gray-300",
  }

  return (
    <div className={cn("rounded-md", intensityClasses[intensity], bgClasses[intensity], className)}>{children}</div>
  )
}

export function ShimmerSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-gray-200 rounded-md", className)}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  )
}
