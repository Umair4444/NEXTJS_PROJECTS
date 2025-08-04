"use client"

import { VideoGrid } from "@/components/video-grid"
import { CategoryTabs } from "@/components/category-tabs"

export default function HomePage() {
  return (
    <div className="flex-1 bg-white">
      <CategoryTabs />
      <div className="pt-[104px] px-6 py-4">
        <VideoGrid />
      </div>
    </div>
  )
}
