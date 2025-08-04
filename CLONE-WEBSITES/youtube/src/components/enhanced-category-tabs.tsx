"use client"

import type React from "react"

import { useRef, useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "Music",
  "Gaming",
  "News",
  "Sports",
  "Technology",
  "Entertainment",
  "Education",
  "Comedy",
  "Travel",
  "Cooking",
  "Fashion",
  "Science",
  "Movies",
  "Art",
  "Health",
  "Business",
  "Politics",
  "History",
  "Nature",
  "Photography",
  "Fitness",
  "DIY",
  "Automotive",
]

export function EnhancedCategoryTabs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [showScrollButtons, setShowScrollButtons] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const checkScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
      setShowScrollButtons(scrollWidth > clientWidth)
    }
  }, [])

  useEffect(() => {
    checkScrollButtons()
    const handleResize = () => checkScrollButtons()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [checkScrollButtons])

  const scrollLeftButton = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      })
    }
  }

  const scrollRightButton = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    checkScrollButtons()
  }

  // Mouse drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Touch drag functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div className="border-b bg-white sticky top-0 z-10">
      <div className="relative flex items-center">
        {/* Left scroll button */}
        {showScrollButtons && (
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute left-2 z-20 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 border",
              !canScrollLeft && "opacity-0 pointer-events-none",
            )}
            onClick={scrollLeftButton}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
        )}

        {/* Scrollable tabs container */}
        <div
          ref={scrollContainerRef}
          className={cn(
            "flex items-center gap-3 px-4 py-3 overflow-x-auto scrollbar-hide scroll-smooth select-none",
            isDragging && "cursor-grabbing",
            !isDragging && "cursor-grab",
          )}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "secondary"}
              size="sm"
              className={cn(
                "whitespace-nowrap px-4 py-2 rounded-full transition-all duration-200 flex-shrink-0 pointer-events-auto",
                activeCategory === category
                  ? "bg-black text-white hover:bg-gray-800 shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm",
              )}
              onClick={(e) => {
                e.stopPropagation()
                setActiveCategory(category)
              }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Right scroll button */}
        {showScrollButtons && (
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute right-2 z-20 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 border",
              !canScrollRight && "opacity-0 pointer-events-none",
            )}
            onClick={scrollRightButton}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        )}

        {/* Gradient overlays for visual effect */}
        {showScrollButtons && canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
        )}
        {showScrollButtons && canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
        )}
      </div>
    </div>
  )
}
