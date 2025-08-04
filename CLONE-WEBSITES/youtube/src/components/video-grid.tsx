"use client";

import { useState, useEffect, useCallback } from "react";
import { VideoCard } from "@/components/video-card";
import { useSidebar } from "@/components/sidebar-provider";
import { cn } from "@/lib/utils";
import { generateVideos } from "@/lib/generate";

export function VideoGrid() {
  const [videos, setVideos] = useState(() => generateVideos(0, 20));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { isCollapsed } = useSidebar();

  const loadMoreVideos = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newVideos = generateVideos(videos.length, 12);
    setVideos((prev) => [...prev, ...newVideos]);

    // Stop loading more after 80 videos
    if (videos.length >= 68) {
      setHasMore(false);
    }

    setLoading(false);
  }, [videos.length, loading, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000
      ) {
        loadMoreVideos();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreVideos]);

  return (
    <div className="space-y-6 max-w-full">
      <div
        className={cn(
          "grid gap-4 max-w-full",
          // Responsive grid that adjusts based on sidebar state
          isCollapsed
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        )}
      >
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {loading && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        </div>
      )}

      {!hasMore && videos.length > 0 && (
        <div className="text-center py-8 text-gray-500">
          You&apos;ve reached the end of the feed
        </div>
      )}
    </div>
  );
}
