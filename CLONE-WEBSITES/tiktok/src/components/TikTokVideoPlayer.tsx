"use client"
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import TikTokVideoActions from "./TikTokVideoActions";
import TikTokUserInfo from "./TikTokUserInfo";

interface Video {
  id: string;
  videoUrl: string;
  user: {
    id: string;
    username: string;
    displayName: string;
    avatar: string;
    verified: boolean;
  };
  description: string;
  music: {
    title: string;
    id: string;
  };
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
  hashtags: string[];
}

interface TikTokVideoPlayerProps {
  video: Video;
  isActive: boolean;
  onVideoChange: (direction: 'up' | 'down') => void;
}

export default function TikTokVideoPlayer({ video, isActive, onVideoChange }: TikTokVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  // Handle video play/pause based on whether it's active
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => {
        setIsPlaying(true);
      });
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    togglePlayPause();
  };

  // Handle touch gestures for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startY = touch.clientY;
    
    const handleTouchEnd = (e: TouchEvent) => {
      const endTouch = e.changedTouches[0];
      const endY = endTouch.clientY;
      const diff = startY - endY;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          onVideoChange('down');
        } else {
          onVideoChange('up');
        }
      }
      
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchend', handleTouchEnd);
  };

  // Handle wheel scroll for desktop
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      onVideoChange('down');
    } else if (e.deltaY < 0) {
      onVideoChange('up');
    }
  };

  return (
    <div 
      className="relative w-full mx-auto h-full bg-black overflow-hidden"
      onTouchStart={handleTouchStart}
      onWheel={handleWheel}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={video.videoUrl}
        className="w-full h-full object-cover cursor-pointer"
        loop
        muted={isMuted}
        playsInline
        onClick={handleVideoClick}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Play/Pause Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <button
            onClick={togglePlayPause}
            className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <Play className="w-8 h-8 text-white ml-1" />
          </button>
        </div>
      )}

      {/* Top Controls */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={toggleMute}
          className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* Bottom Overlay with User Info and Actions */}
      <div className="absolute bottom-14 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
        <div className="flex items-end justify-between">
          {/* User Info and Description */}
          <div className="flex-1 mr-4">
            <TikTokUserInfo 
              user={video.user}
              description={video.description}
              music={video.music}
              hashtags={video.hashtags}
              isFollowing={isFollowing}
              onFollowToggle={() => setIsFollowing(!isFollowing)}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex-shrink-0">
            <TikTokVideoActions
              stats={video.stats}
              isLiked={isLiked}
              onLikeToggle={() => setIsLiked(!isLiked)}
              user={video.user}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
