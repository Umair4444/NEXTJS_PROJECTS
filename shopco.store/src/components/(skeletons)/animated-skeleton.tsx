"use client"

import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface AnimatedSkeletonProps {
  className?: string
  delay?: number
}

export function AnimatedSkeleton({ className, delay = 0 }: AnimatedSkeletonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  if (!isVisible) {
    return <div className={className} />
  }

  return <Skeleton className={className} />
}

export function StaggeredSkeletonGrid({
  count = 8,
  className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
}: {
  count?: number
  className?: string
}) {
  return (
    <div className={className}>
      {[...Array(count)].map((_, index) => (
        <div key={index} className="space-y-4">
          <AnimatedSkeleton className="aspect-[3/4] w-full rounded-2xl" delay={index * 100} />
          <AnimatedSkeleton className="h-6 w-3/4" delay={index * 100 + 50} />
          <AnimatedSkeleton className="h-8 w-16" delay={index * 100 + 100} />
        </div>
      ))}
    </div>
  )
}
