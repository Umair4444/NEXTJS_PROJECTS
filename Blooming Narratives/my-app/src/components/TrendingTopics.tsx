"use client";

import React, { useRef, useState, useEffect } from "react";
import { Flame } from "lucide-react";

interface TrendingTopicsAutoScrollProps {
  topics: string[];
}

const TrendingTopics: React.FC<TrendingTopicsAutoScrollProps> = ({
  topics,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollAmount += 1;
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
          container.scrollLeft = 0;
        }
      }
      requestAnimationFrame(scroll);
    };

    scroll();
  }, [isPaused]);

  // Duplicate topics to simulate infinite scroll
  //   const scrollingTopics = [...topics, ...topics];
  const scrollingTopics = Array(5).fill(topics).flat();

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="text-red-500" />
        <h2 className="text-xl font-semibold">Trending Topics</h2>
      </div>

      {/* Scroll Container */}
      <div className="relative overflow-hidden group">
        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused] gap-4">
          {scrollingTopics.map((topic, index) => (
            <span
              key={index}
              className="shrink-0 bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-red-200 transition-colors cursor-pointer"
            >
              #{topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
