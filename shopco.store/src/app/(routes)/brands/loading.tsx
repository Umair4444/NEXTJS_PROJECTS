import { BrandGridSkeleton } from "@/components/(skeletons)/brand-card-skeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function BrandsLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Skeleton className="h-12 w-48 mx-auto mb-4" />
          <div className="space-y-2 max-w-3xl mx-auto">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4 mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <Skeleton className="h-8 w-16 mx-auto mb-2 bg-gray-700" />
                <Skeleton className="h-4 w-24 mx-auto bg-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands Skeleton */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-8 h-32">
                  <Skeleton className="w-24 h-16 mx-auto" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-5 w-16 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-5 w-20 rounded-full" />
                  </div>
                  <Skeleton className="h-10 w-full rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Brands Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <BrandGridSkeleton count={8} />
        </div>
      </section>
    </div>
  )
}
