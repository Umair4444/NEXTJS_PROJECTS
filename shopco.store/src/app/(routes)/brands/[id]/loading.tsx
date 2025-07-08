import { Skeleton } from "@/components/ui/skeleton"

export default function BrandDetailLoading() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Skeleton */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-12" />
            <span>/</span>
            <Skeleton className="h-4 w-16" />
            <span>/</span>
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>

      {/* Brand Header Skeleton */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Brand Info */}
            <div className="text-center lg:text-left">
              <Skeleton className="w-48 h-32 mx-auto lg:mx-0 mb-8 rounded-2xl" />
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <Skeleton className="h-12 w-48" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-6 mb-6">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-6 w-24 mb-6 rounded-full" />
              <div className="space-y-2 mb-8">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />
              </div>
              <div>
                <Skeleton className="h-5 w-20 mb-2" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-18 rounded-full" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center p-6 border border-gray-200 rounded-lg">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Skeleton className="h-8 w-32 mx-auto mb-12" />
          <div className="space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4 mx-auto" />
          </div>
        </div>
      </section>

      {/* Products Section Skeleton */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Skeleton */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="border border-gray-200 rounded-lg p-6">
                <Skeleton className="h-6 w-20 mb-6" />
                <div className="space-y-4">
                  <Skeleton className="h-5 w-24" />
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Skeleton className="w-4 h-4" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid Skeleton */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <Skeleton className="h-8 w-48 mb-2" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-10 w-48" />
              </div>

              <Skeleton className="h-10 w-64 mb-8" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-[3/4] w-full rounded-2xl" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
