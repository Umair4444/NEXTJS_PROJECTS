"use client"

import { Suspense } from "react"
import { VideoPlayer } from "@/components/video-player"
import { VideoInfo } from "@/components/video-info"
import { CommentSection } from "@/components/comment-section"
import { RecommendedVideos } from "@/components/recommended-videos"

export default function WatchPage() {
  return (
    <div className="flex-1 px-2 sm:px-4 py-4 sm:py-6 pt-20 max-w-full overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-4 xl:gap-6 max-w-full">
        {/* Main Video Content (left column on large screens) */}
        <div className="space-y-4 min-w-0">
          <VideoPlayer />
          <VideoInfo />
          {/* Recommendations for small screens (below XL breakpoint) */}
          <div className="lg:hidden">
            <Suspense fallback={<div>Loading recommendations...</div>}>
              <RecommendedVideos />
            </Suspense>
          </div>
          {/* Comments section (always below video on large screens) */}
          <CommentSection />
        </div>

        {/* Recommended Videos (right column on large screens - XL breakpoint and up) */}
        <div className="hidden lg:block min-w-0">
          <Suspense fallback={<div>Loading recommendations...</div>}>
            <RecommendedVideos />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
