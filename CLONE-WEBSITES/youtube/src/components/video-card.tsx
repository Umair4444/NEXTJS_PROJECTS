import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Video {
  id: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  duration: string;
  thumbnail: string;
}

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <Link href={`/watch?v=${video.id}`}>
        <div className="space-y-3">
          {/* Thumbnail */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={"/placeholder.svg"}
              alt={video.title}
              fill
              className="object-cover group-hover:scale-105 p-5 transition-transform duration-200"
            />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
              {video.duration}
            </div>
          </div>

          {/* Video Info */}
          <div className="flex gap-3">
            <Avatar className="w-9 h-9 flex-shrink-0">
              <AvatarImage
                src={`/placeholder.svg?height=36&width=36&text=${video.channel[0]}`}
              />
              <AvatarFallback className="text-sm">
                {video.channel[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm text-pretty leading-5 line-clamp-2 text-gray-900 group-hover:text-gray-700 mb-1">
                {video.title}
              </h3>
              <div className="space-y-0.5">
                <p className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer text-nowrap">
                  {video.channel}
                </p>
                <div className="flex items-center text-sm text-gray-600 space-x-1">
                  <span className="text-[12px] text-left w-full text-nowrap">
                    {video.views}
                  </span>
                  <span>•</span>
                  <span className="text-[12px] text-nowrap  text-right">
                    {video.timestamp}
                  </span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 flex-shrink-0"
            >
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
