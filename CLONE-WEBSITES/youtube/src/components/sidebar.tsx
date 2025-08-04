"use client"

import Link from "next/link"
import {
  Home,
  PlaySquare,
  Clock,
  TrendingUp,
  ShoppingBag,
  Music,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  GraduationCap,
  Shirt,
  Mic,
  Play,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/sidebar-provider"
import { cn } from "@/lib/utils"

const mainItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: PlaySquare, label: "Shorts", href: "#" },
  { icon: PlaySquare, label: "Subscriptions", href: "#" },
]

const youItems = [{ icon: Clock, label: "History", href: "#" }]

const exploreItems = [
  { icon: TrendingUp, label: "Trending", href: "#" },
  { icon: ShoppingBag, label: "Shopping", href: "#" },
  { icon: Music, label: "Music", href: "#" },
  { icon: Film, label: "Movies & TV", href: "#" },
  { icon: Radio, label: "Live", href: "#" },
  { icon: Gamepad2, label: "Gaming", href: "#" },
  { icon: Newspaper, label: "News", href: "#" },
  { icon: Trophy, label: "Sports", href: "#" },
  { icon: GraduationCap, label: "Courses", href: "#" },
  { icon: Shirt, label: "Fashion & Beauty", href: "#" },
  { icon: Mic, label: "Podcasts", href: "#" },
  { icon: Play, label: "Playables", href: "#" },
]

const moreItems = [
  { label: "YouTube Premium", href: "#" },
  { label: "YouTube TV", href: "#" },
]

export function Sidebar() {
  const { isCollapsed } = useSidebar()

  return (
    <>
      {/* Overlay for mobile */}
      {!isCollapsed && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" />}

      <aside
        className={cn(
          "bg-white fixed left-0 top-14 h-[calc(100vh-56px)] overflow-y-auto scrollbar-hide z-40 transition-all duration-300 ease-in-out border-r border-gray-200",
          isCollapsed ? "w-0 md:w-16" : "w-60",
          isCollapsed ? "-translate-x-full md:translate-x-0" : "translate-x-0",
        )}
      >
        <div className={cn("py-2", isCollapsed && "md:px-1")}>
          {/* Main Navigation */}
          <div className="px-3 space-y-1">
            {mainItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full h-10 transition-all duration-200 hover:bg-gray-100 rounded-lg",
                    isCollapsed ? "justify-center px-0" : "justify-start gap-6 px-3",
                    item.label === "Home" && "bg-gray-100 font-medium",
                  )}
                >
                  <item.icon className="w-6 h-6 flex-shrink-0" />
                  {!isCollapsed && <span className="truncate text-sm">{item.label}</span>}
                </Button>
              </Link>
            ))}
          </div>

          {!isCollapsed && (
            <>
              <Separator className="my-3" />

              {/* You Section */}
              <div className="px-3 space-y-1">
                <div className="px-3 py-2">
                  <h3 className="text-sm font-medium text-gray-900">You</h3>
                </div>
                {youItems.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-6 h-10 px-3 hover:bg-gray-100 rounded-lg"
                    >
                      <item.icon className="w-6 h-6" />
                      <span className="truncate text-sm">{item.label}</span>
                    </Button>
                  </Link>
                ))}
              </div>

              {/* Sign in prompt */}
              <div className="px-6 py-4">
                <p className="text-sm text-gray-600 mb-3">Sign in to like videos, comment, and subscribe.</p>
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50 rounded-full px-4 h-9 bg-transparent"
                  >
                    Sign in
                  </Button>
                </Link>
              </div>

              <Separator className="my-3" />

              {/* Explore Section */}
              <div className="px-3 space-y-1">
                <div className="px-3 py-2">
                  <h3 className="text-sm font-medium text-gray-900">Explore</h3>
                </div>
                {exploreItems.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-6 h-10 px-3 hover:bg-gray-100 rounded-lg"
                    >
                      <item.icon className="w-6 h-6" />
                      <span className="truncate text-sm">{item.label}</span>
                    </Button>
                  </Link>
                ))}
              </div>

              <Separator className="my-3" />

              {/* More from YouTube */}
              <div className="px-3 space-y-1">
                <div className="px-3 py-2">
                  <h3 className="text-sm font-medium text-gray-900">More from YouTube</h3>
                </div>
                {moreItems.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-6 h-10 px-3 hover:bg-gray-100 rounded-lg"
                    >
                      <Youtube className="w-6 h-6 text-red-600" />
                      <span className="truncate text-sm">{item.label}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </aside>

      {/* Spacer for main content */}
      <div className={cn("transition-all duration-300 ease-in-out hidden md:block", isCollapsed ? "w-16" : "w-60")} />
    </>
  )
}
