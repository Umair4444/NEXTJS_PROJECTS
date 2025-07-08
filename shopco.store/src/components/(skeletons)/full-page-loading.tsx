"use client"

import { useEffect, useState } from "react"

interface FullPageLoadingProps {
  message?: string
  showProgress?: boolean
}

export function FullPageLoading({ message = "Loading SHOP.CO", showProgress = false }: FullPageLoadingProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!showProgress) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(interval)
  }, [showProgress])

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">SHOP.CO</h1>
          <p className="text-gray-600">Fashion that matches your style</p>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          <p className="text-lg font-medium mb-2">{message}</p>

          {showProgress && (
            <div className="w-full max-w-xs mx-auto">
              <div className="bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-black h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">{Math.round(Math.min(progress, 100))}%</p>
            </div>
          )}
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  )
}
