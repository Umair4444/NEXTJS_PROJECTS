import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="border-b">
        <div className="bg-black py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-center">
            <Skeleton className="h-4 w-64 bg-gray-700" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            <Skeleton className="h-8 w-32" />

            <div className="hidden md:flex items-center gap-6">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-5 w-16" />
              ))}
            </div>

            <Skeleton className="flex-1 max-w-md h-10 rounded-full" />

            <div className="flex items-center gap-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="w-6 h-6 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-5/6" />
                <Skeleton className="h-12 w-4/6" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
                <Skeleton className="h-5 w-3/5" />
              </div>
              <Skeleton className="h-12 w-40 rounded-full" />
            </div>
            <Skeleton className="aspect-square rounded-lg" />
          </div>
        </div>

        {/* Stats Skeleton */}
        <div className="bg-black py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-10 w-20 mx-auto bg-gray-700" />
                  <Skeleton className="h-4 w-32 mx-auto bg-gray-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Skeleton */}
      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-8 md:gap-16">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-20 bg-gray-700" />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section Skeleton */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[3/4] w-full rounded-2xl" />
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Skeleton key={j} className="w-4 h-4 rounded-sm" />
                    ))}
                  </div>
                  <Skeleton className="w-8 h-4" />
                </div>
                <Skeleton className="h-6 w-3/4" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-6 w-12" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Skeleton className="h-12 w-32 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto">
        <Skeleton className="h-px w-full" />
      </div>

      {/* Top Selling Section Skeleton */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-48 mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[3/4] w-full rounded-2xl" />
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Skeleton key={j} className="w-4 h-4 rounded-sm" />
                    ))}
                  </div>
                  <Skeleton className="w-8 h-4" />
                </div>
                <Skeleton className="h-6 w-3/4" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-6 w-12" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Skeleton className="h-12 w-32 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Browse by Style Section Skeleton */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-100 rounded-3xl p-8 md:p-16">
            <div className="text-center mb-12">
              <Skeleton className="h-12 w-80 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Skeleton className="h-48 rounded-2xl" />
              <div className="md:col-span-2">
                <Skeleton className="h-48 rounded-2xl" />
              </div>
              <div className="md:col-span-2">
                <Skeleton className="h-48 rounded-2xl" />
              </div>
              <Skeleton className="h-48 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section Skeleton */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Skeleton className="h-12 w-72 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Skeleton key={j} className="w-5 h-5 rounded-sm" />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="w-6 h-6 rounded-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="bg-gray-100 mt-20">
        {/* Newsletter Section Skeleton */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-black rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <Skeleton className="h-16 w-80 bg-gray-700" />
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Skeleton className="h-12 w-full rounded-full bg-gray-700" />
              <Skeleton className="h-12 w-full rounded-full bg-gray-700" />
            </div>
          </div>
        </div>

        {/* Main Footer Skeleton */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1 space-y-4">
              <Skeleton className="h-8 w-24" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="flex gap-3">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="w-7 h-7 rounded" />
                ))}
              </div>
            </div>

            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-5 w-20" />
                <div className="space-y-3">
                  {[...Array(4)].map((_, j) => (
                    <Skeleton key={j} className="h-4 w-24" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Skeleton className="h-4 w-48" />
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="w-12 h-8 rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Loading Indicator */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-medium">Loading SHOP.CO...</span>
        </div>
      </div>
    </div>
  )
}
