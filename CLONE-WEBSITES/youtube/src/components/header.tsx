"use client"

import Link from "next/link"
import { Search, Menu, Video, Bell, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Youtube } from "lucide-react"
import { useSidebar } from "@/components/sidebar-provider"

export function Header() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 z-50 h-14">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="hover:bg-gray-100 rounded-full">
          <Menu className="w-6 h-6" />
        </Button>
        <Link href="/" className="flex items-center gap-1">
          <Youtube className="w-7 h-7 text-red-600" />
          <span className="text-xl font-medium text-black tracking-tight">YouTube</span>
        </Link>
      </div>

      <div className="flex-1 max-w-2xl mx-8">
        <div className="flex items-center">
          <div className="flex flex-1 max-w-xl">
            <Input
              type="search"
              placeholder="Search"
              className="rounded-l-full border-gray-300 border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-500 h-10 px-4 bg-white"
            />
            <Button
              variant="outline"
              className="rounded-r-full border-gray-300 border-l-0 px-6 bg-gray-50 hover:bg-gray-100 h-10"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="ml-2 hover:bg-gray-100 rounded-full">
            <Mic className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
          <Video className="w-6 h-6 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
          <Bell className="w-6 h-6 text-gray-600" />
        </Button>
        <Link href="/login">
          <Button
            variant="outline"
            className="text-blue-600 border-blue-600 hover:bg-blue-50 rounded-full px-4 h-9 bg-transparent"
          >
            Sign in
          </Button>
        </Link>
      </div>
    </header>
  )
}
