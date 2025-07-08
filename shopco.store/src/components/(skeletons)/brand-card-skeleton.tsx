import { Skeleton } from "@/components/ui/skeleton"

export function BrandCardSkeleton() {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Logo area skeleton */}
      <div className="bg-gray-50 p-6 flex items-center justify-center h-24">
        <Skeleton className="w-20 h-12" />
      </div>

      <div className="p-4 space-y-3">
        {/* Brand name and price range */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        {/* Country and product count */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-20" />
        </div>

        {/* Button */}
        <Skeleton className="h-8 w-full rounded-full" />
      </div>
    </div>
  )
}

export function BrandGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(count)].map((_, i) => (
        <BrandCardSkeleton key={i} />
      ))}
    </div>
  )
}
