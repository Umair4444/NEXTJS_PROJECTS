import { Heart, MessageCircle, Share, Bookmark } from "lucide-react";

interface Stats {
  likes: number;
  comments: number;
  shares: number;
}

interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  verified: boolean;
}

interface TikTokVideoActionsProps {
  stats: Stats;
  isLiked: boolean;
  onLikeToggle: () => void;
  user: User;
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export default function TikTokVideoActions({ stats, isLiked, onLikeToggle, user }: TikTokVideoActionsProps) {
  const handleComment = () => {
    // TODO: Implement comment functionality
    console.log('Open comments');
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    console.log('Share video');
  };

  const handleBookmark = () => {
    // TODO: Implement bookmark functionality
    console.log('Bookmark video');
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* User Avatar */}
      <div className="relative">
        <img
          src={user.avatar}
          alt={user.displayName}
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        {/* Follow Button */}
        <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-tiktok-red rounded-full flex items-center justify-center text-white text-lg font-bold">
          +
        </button>
      </div>

      {/* Like Button */}
      <div className="flex flex-col items-center space-y-1">
        <button
          onClick={onLikeToggle}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
            isLiked ? 'bg-tiktok-red/20' : 'bg-black/20 hover:bg-black/40'
          }`}
        >
          <Heart
            className={`w-7 h-7 ${
              isLiked ? 'text-tiktok-red fill-current' : 'text-white'
            } transition-colors duration-200`}
          />
        </button>
        <span className="text-xs text-white font-semibold">
          {formatNumber(stats.likes + (isLiked ? 1 : 0))}
        </span>
      </div>

      {/* Comment Button */}
      <div className="flex flex-col items-center space-y-1">
        <button
          onClick={handleComment}
          className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors duration-200"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </button>
        <span className="text-xs text-white font-semibold">
          {formatNumber(stats.comments)}
        </span>
      </div>

      {/* Share Button */}
      <div className="flex flex-col items-center space-y-1">
        <button
          onClick={handleShare}
          className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors duration-200"
        >
          <Share className="w-7 h-7 text-white" />
        </button>
        <span className="text-xs text-white font-semibold">
          {formatNumber(stats.shares)}
        </span>
      </div>

      {/* Bookmark Button */}
      <div className="flex flex-col items-center space-y-1">
        <button
          onClick={handleBookmark}
          className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors duration-200"
        >
          <Bookmark className="w-7 h-7 text-white" />
        </button>
      </div>

      {/* Spinning Music Disc */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center animate-spin">
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
}
