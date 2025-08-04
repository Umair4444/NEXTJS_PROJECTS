import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal } from "lucide-react"

export function VideoInfo() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold mb-2">Building a YouTube Clone with Next.js - Complete Tutorial</h1>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="text-sm text-gray-600">1,234,567 views • Mar 15, 2024</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <ThumbsUp className="w-4 h-4" />
              12K
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <ThumbsDown className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Share className="w-4 h-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Download className="w-4 h-4" />
              Download
            </Button>
            <Button variant="outline" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" />
          <AvatarFallback>TC</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold">Tech Channel</h3>
            <span className="text-sm text-gray-600">1.2M subscribers</span>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            In this comprehensive tutorial, we&apos;l build a complete YouTube clone using Next.js, React, and modern web
            technologies. You&apos;ll learn about video streaming, user authentication, and responsive design patterns.
          </p>
          <Button size="sm">Subscribe</Button>
        </div>
      </div>
    </div>
  )
}
