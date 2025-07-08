"use client"

import { LoadingSpinner } from "@/components/(spinners)/spinner"
import { Skeleton } from "@/components/ui/skeleton"

interface LoadingStateProps {
  type?: "spinner" | "skeleton" | "hybrid"
  message?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function LoadingState({ type = "hybrid", message = "Loading...", size = "md" }: LoadingStateProps) {
  if (type === "spinner") {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <LoadingSpinner size={size} className="mb-4" />
        <p className="text-gray-600">{message}</p>
      </div>
    )
  }

  if (type === "skeleton") {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    )
  }

  // Hybrid approach - spinner with skeleton elements
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center py-8">
        <LoadingSpinner size={size} className="mr-3" />
        <span className="text-gray-600">{message}</span>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
}

export function ButtonLoading({ children, isLoading, ...props }: any) {
  return (
    <button {...props} disabled={isLoading}>
      {isLoading ? (
        <div className="flex items-center">
          <LoadingSpinner size="sm" className="mr-2" />
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export function SearchLoading() {
  return (
    <div className="flex items-center justify-center py-8">
      <LoadingSpinner size="md" className="mr-3" />
      <span className="text-gray-600">Searching products...</span>
    </div>
  )
}

export function CartLoading() {
  return (
    <div className="flex items-center justify-center py-4">
      <LoadingSpinner size="sm" className="mr-2" />
      <span className="text-sm text-gray-600">Updating cart...</span>
    </div>
  )
}
