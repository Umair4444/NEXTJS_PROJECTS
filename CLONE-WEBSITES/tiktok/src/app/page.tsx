"use client";
import { useState, useEffect } from "react";
import TikTokVideoPlayer from "@/components/TikTokVideoPlayer";
import TikTokNavigation from "@/components/TikTokNavigation";

// Mock TikTok videos data
const mockVideos = [
  {
    id: "1",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    user: {
      id: "user1",
      username: "coolguy123",
      displayName: "Cool Guy",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&auto=format&q=80&crop=face",
      verified: true,
    },
    description: "Check out this amazing dance move! 💃🔥 #dance #viral #fyp",
    music: {
      title: "Original Sound - coolguy123",
      id: "music1",
    },
    stats: {
      likes: 245000,
      comments: 1200,
      shares: 8500,
    },
    hashtags: ["#dance", "#viral", "#fyp"],
  },
  {
    id: "2",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    user: {
      id: "user2",
      username: "techguru",
      displayName: "Tech Guru",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=50&h=50&fit=crop&auto=format&q=80&crop=face",
      verified: false,
    },
    description:
      "Mind-blowing tech facts that will change your perspective! 🤯💻",
    music: {
      title: "Tech Beats - DJ Code",
      id: "music2",
    },
    stats: {
      likes: 156000,
      comments: 890,
      shares: 3200,
    },
    hashtags: ["#tech", "#facts", "#mind"],
  },
  {
    id: "3",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    user: {
      id: "user3",
      username: "foodie_life",
      displayName: "Foodie Life",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&auto=format&q=80&crop=face",
      verified: true,
    },
    description:
      "Quick and easy recipe that tastes incredible! Try it now 👨‍🍳✨",
    music: {
      title: "Cooking Vibes - Kitchen Beats",
      id: "music3",
    },
    stats: {
      likes: 89000,
      comments: 2100,
      shares: 5600,
    },
    hashtags: ["#cooking", "#recipe", "#food"],
  },
  {
    id: "4",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    user: {
      id: "user4",
      username: "adventure_seeker",
      displayName: "Adventure Seeker",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&auto=format&q=80&crop=face",
      verified: false,
    },
    description: "Epic adventure in the mountains! Nature is amazing 🏔️🌲",
    music: {
      title: "Mountain Vibes - Nature Sounds",
      id: "music4",
    },
    stats: {
      likes: 312000,
      comments: 1800,
      shares: 12000,
    },
    hashtags: ["#adventure", "#nature", "#mountains"],
  },
  {
    id: "5",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    user: {
      id: "user5",
      username: "comedy_king",
      displayName: "Comedy King",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&auto=format&q=80&crop=face",
      verified: true,
    },
    description: "When you realize it's Monday morning 😂☕ #relatable",
    music: {
      title: "Funny Moments - Comedy Central",
      id: "music5",
    },
    stats: {
      likes: 890000,
      comments: 5200,
      shares: 23000,
    },
    hashtags: ["#comedy", "#funny", "#relatable"],
  },
];

export default function TikTokHome() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videos] = useState(mockVideos);

  const handleVideoChange = (direction: "up" | "down") => {
    if (direction === "up" && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    } else if (direction === "down" && currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        handleVideoChange("up");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        handleVideoChange("down");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentVideoIndex, videos.length]);

  return (
    <div className="h-screen bg-tiktok-black text-white overflow-hidden relative">
      {/* Video Container */}
      <div
        className="max-h-full transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(-${currentVideoIndex * 100}vh)`,
        }}
      >
        {videos.map((video, index) => (
          <div key={video.id} className="h-screen w-full relative">
            <TikTokVideoPlayer
              video={video}
              isActive={index === currentVideoIndex}
              onVideoChange={handleVideoChange}
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <TikTokNavigation />

      {/* Video Navigation Indicators */}
      <div className="hidden md:block fixed right-1/2 bottom-16 space-x-2 transform -translate-y-1/2 z-30 space-y-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentVideoIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
