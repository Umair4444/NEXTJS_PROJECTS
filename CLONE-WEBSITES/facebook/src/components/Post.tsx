"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Heart, 
  MessageCircle, 
  Share, 
  ThumbsUp,
  MoreHorizontal 
} from 'lucide-react';

interface PostProps {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

export default function Post({ 
  author, 
  timestamp, 
  content, 
  image, 
  likes, 
  comments, 
  shares 
}: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <Card className="mb-4 border-0 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={author.avatar} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm">{author.name}</h3>
              <p className="text-xs text-gray-500">{timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm mb-3">{content}</p>
        
        {image && (
          <img 
            src={image} 
            alt="Post content" 
            className="w-full rounded-lg mb-3"
          />
        )}
        
        {/* Likes and comments count */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-facebook-blue rounded-full flex items-center justify-center mr-1">
                <ThumbsUp className="w-2.5 h-2.5 text-white" />
              </div>
              <span>{likesCount}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>{comments} comments</span>
            <span>{shares} shares</span>
          </div>
        </div>
        
        <Separator className="mb-3" />
        
        {/* Action buttons */}
        <div className="flex items-center justify-around">
          <Button
            variant="ghost"
            size="sm"
            className={`flex-1 h-9 ${isLiked ? 'text-facebook-blue' : 'text-gray-600'}`}
            onClick={handleLike}
          >
            <ThumbsUp className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
            Like
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 h-9 text-gray-600">
            <MessageCircle className="w-4 h-4 mr-2" />
            Comment
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 h-9 text-gray-600">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
