import { Check, Music } from "lucide-react";

interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  verified: boolean;
}

interface Music {
  title: string;
  id: string;
}

interface TikTokUserInfoProps {
  user: User;
  description: string;
  music: Music;
  hashtags: string[];
  isFollowing: boolean;
  onFollowToggle: () => void;
}

export default function TikTokUserInfo({ 
  user, 
  description, 
  music, 
  hashtags, 
  isFollowing, 
  onFollowToggle 
}: TikTokUserInfoProps) {
  return (
    <div className="space-y-3">
      {/* User Info */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <span className="text-white font-semibold text-lg">@{user.username}</span>
          {user.verified && (
            <div className="w-4 h-4 bg-tiktok-blue rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        
        <button
          onClick={onFollowToggle}
          className={`px-4 py-1 rounded-md text-sm font-semibold transition-colors ${
            isFollowing
              ? 'bg-gray-600 text-white border border-gray-500'
              : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>

      {/* Description with Hashtags */}
      <div className="text-white text-sm leading-relaxed">
        {description.split(' ').map((word, index) => {
          if (word.startsWith('#')) {
            return (
              <span key={index} className="text-white font-semibold">
                {word}{' '}
              </span>
            );
          }
          return <span key={index}>{word} </span>;
        })}
      </div>

      {/* Music Info */}
      <div className="flex items-center space-x-2 text-white text-sm">
        <Music className="w-4 h-4" />
        <span className="truncate max-w-xs">{music.title}</span>
      </div>
    </div>
  );
}
