import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, ThumbsDown } from "lucide-react"

const comments = [
  {
    id: "1",
    author: "John Developer",
    content:
      "Great tutorial! Really helped me understand Next.js better. The explanation of server components was particularly useful.",
    likes: 45,
    timestamp: "2 days ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    author: "Sarah Code",
    content: "Thanks for this! Could you make a follow-up video about adding authentication?",
    likes: 23,
    timestamp: "1 day ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "3",
    author: "Mike React",
    content: "The video quality is excellent and the pace is perfect for beginners. Subscribed!",
    likes: 67,
    timestamp: "3 hours ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export function CommentSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold">1,234 Comments</h2>
        <Button variant="ghost" size="sm">
          Sort by
        </Button>
      </div>

      <div className="flex gap-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-3">
          <Textarea placeholder="Add a comment..." className="min-h-[80px]" />
          <div className="flex gap-2">
            <Button size="sm">Comment</Button>
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src={comment.avatar || "/placeholder.svg"} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{comment.author}</span>
                <span className="text-xs text-gray-600">{comment.timestamp}</span>
              </div>
              <p className="text-sm">{comment.content}</p>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="gap-1 h-8">
                  <ThumbsUp className="w-4 h-4" />
                  {comment.likes}
                </Button>
                <Button variant="ghost" size="sm" className="gap-1 h-8">
                  <ThumbsDown className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8">
                  Reply
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
