import { Skeleton } from "@/components/ui/skeleton"

export function ProductDetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <Skeleton className="aspect-square rounded-2xl" />
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="w-20 h-20 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <Skeleton className="h-8 w-3/4 mb-4" />
            <div className="flex items-center gap-4 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="w-5 h-5" />
                ))}
              </div>
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-12 rounded-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <Skeleton className="h-5 w-24 mb-3" />
            <div className="flex gap-3">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="w-16 h-12 rounded-full" />
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <Skeleton className="h-5 w-24 mb-3" />
            <div className="flex gap-3">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="w-20 h-12 rounded-full" />
              ))}
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="space-y-4">
            <Skeleton className="h-12 w-32 rounded-full" />
            <div className="flex gap-4">
              <Skeleton className="h-12 flex-1 rounded-full" />
              <Skeleton className="h-12 w-12 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
