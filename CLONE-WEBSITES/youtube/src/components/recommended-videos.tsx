import Link from "next/link"
import Image from "next/image"

const recommendedVideos = [
  {
    id: "rec1",
    title: "React Hooks Deep Dive - Understanding useEffect and useState",
    channel: "React Masters",
    views: "890K views",
    timestamp: "1 week ago",
    duration: "16:42",
    thumbnail: "/placeholder.svg?height=68&width=120&text=React+Hooks",
  },
  {
    id: "rec2",
    title: "CSS Animation Techniques for Modern Web Development",
    channel: "Design Pro",
    views: "1.1M views",
    timestamp: "3 days ago",
    duration: "20:15",
    thumbnail: "/placeholder.svg?height=68&width=120&text=CSS+Animation",
  },
  {
    id: "rec3",
    title: "JavaScript Performance Optimization Tips and Tricks",
    channel: "JS Experts",
    views: "750K views",
    timestamp: "5 days ago",
    duration: "14:30",
    thumbnail: "/placeholder.svg?height=68&width=120&text=JS+Performance",
  },
  {
    id: "rec4",
    title: "Web Accessibility Guide - Making Sites for Everyone",
    channel: "A11y Channel",
    views: "420K views",
    timestamp: "1 week ago",
    duration: "18:20",
    thumbnail: "/placeholder.svg?height=68&width=120&text=Accessibility",
  },
  {
    id: "rec5",
    title: "Node.js Best Practices for Production Applications",
    channel: "Backend Dev",
    views: "680K views",
    timestamp: "4 days ago",
    duration: "22:10",
    thumbnail: "/placeholder.svg?height=68&width=120&text=Node.js+Tips",
  },
  {
    id: "rec6",
    title: "Database Design Patterns and Optimization Strategies",
    channel: "DB Masters",
    views: "520K views",
    timestamp: "6 days ago",
    duration: "25:30",
    thumbnail: "/placeholder.svg?height=68&width=120&text=Database+Design",
  },
  {
    id: "rec7",
    title: "Modern CSS Layout Techniques - Grid and Flexbox",
    channel: "CSS Guru",
    views: "1.3M views",
    timestamp: "2 weeks ago",
    duration: "19:45",
    thumbnail: "/placeholder.svg?height=68&width=120&text=CSS+Layout",
  },
  {
    id: "rec8",
    title: "API Development with Express.js and MongoDB",
    channel: "Full Stack Dev",
    views: "890K views",
    timestamp: "1 week ago",
    duration: "28:15",
    thumbnail: "/placeholder.svg?height=68&width=120&text=API+Development",
  },
  {
    id: "rec9",
    title: "Advanced TypeScript Patterns",
    channel: "TypeScript Pro",
    views: "300K views",
    timestamp: "2 days ago",
    duration: "10:05",
    thumbnail: "/placeholder.svg?height=68&width=120&text=TypeScript+Patterns",
  },
  {
    id: "rec10",
    title: "Next.js Server Components Explained",
    channel: "Vercel",
    views: "1.5M views",
    timestamp: "4 days ago",
    duration: "15:00",
    thumbnail: "/placeholder.svg?height=68&width=120&text=Server+Components",
  },
]

export function RecommendedVideos() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg px-1">Recommended</h2>
      <div className="space-y-2">
        {recommendedVideos.map((video) => (
          <Link
            key={video.id}
            href={`/watch?v=${video.id}`}
            className="flex gap-2 p-1 rounded-lg hover:bg-gray-50 group"
          >
            <div className="relative flex-shrink-0">
              <Image
                src={"/placeholder.svg"}
                alt={video.title}
                width={120}
                height={68}
                className="rounded-md object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded text-[10px]">
                {video.duration}
              </div>
            </div>
            <div className="flex-1 min-w-0 py-1">
              <h3 className="font-medium text-sm leading-5 line-clamp-2 group-hover:text-blue-600 mb-1">
                {video.title}
              </h3>
              <div className="space-y-0.5">
                <p className="text-xs text-gray-600 hover:text-gray-800 cursor-pointer">{video.channel}</p>
                <div className="flex items-center text-xs text-gray-500 space-x-1">
                  <span>{video.views}</span>
                  <span>•</span>
                  <span>{video.timestamp}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
