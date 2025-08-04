"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "Music",
  "Gaming",
  "Mixes",
  "Live",
  "News",
  "JavaScript",
  "Computer programming",
  "Comedy",
  "Recently uploaded",
  "Watched",
  "New to you",
]

export function CategoryTabs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [showScrollButtons, setShowScrollButtons] = useState(false)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
      setShowScrollButtons(scrollWidth > clientWidth)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    window.addEventListener("resize", checkScrollButtons)
    return () => window.removeEventListener("resize", checkScrollButtons)
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="fixed top-14 left-0 md:left-20 right-0 px-4 border-b  border-gray-200 bg-white z-30">
      <div className="relative flex items-center">
        {/* Left scroll button */}
        {showScrollButtons && canScrollLeft && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 z-20 h-10 w-10 rounded-full bg-white shadow-md hover:shadow-lg"
            onClick={scrollLeft}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        )}

        {/* Scrollable tabs container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-3 px-2 py-3 overflow-x-auto scrollbar-hide scroll-smooth"
          onScroll={checkScrollButtons}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "secondary"}
              size="sm"
              className={cn(
                "whitespace-nowrap px-3 py-1.5 rounded-lg transition-all duration-200 flex-shrink-0 text-sm font-medium",
                activeCategory === category
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Right scroll button */}
        {showScrollButtons && canScrollRight && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 z-20 h-10 w-10 rounded-full bg-white shadow-md hover:shadow-lg"
            onClick={scrollRight}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        )}

        {/* Gradient overlays */}
        {showScrollButtons && canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        )}
        {showScrollButtons && canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        )}
      </div>
    </div>
  )
}
