"use client"
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Image,
  Smile,
  MapPin,
  Flag,
  Video
} from 'lucide-react';

export default function CreatePost() {
  const [postText, setPostText] = useState('');
  const user = JSON.parse(localStorage.getItem('facebook_user') || '{}');

  const handlePost = () => {
    if (postText.trim()) {
      // In a real app, would send to API
      console.log('New post:', postText);
      setPostText('');
    }
  };

  return (
    <Card className="mb-4 border-0 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3 mb-3">
          <Avatar>
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name?.charAt(0) || 'U'}</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder={`What's on your mind, ${user.name?.split(' ')[0] || 'User'}?`}
            className="resize-none border-0 p-0 focus:ring-0 text-lg"
            rows={3}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        
        <Separator className="mb-3" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-gray-100">
              <Video className="w-5 h-5 mr-2 text-red-500" />
              Live video
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-gray-100">
              <Image className="w-5 h-5 mr-2 text-green-500" />
              Photo/video
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-gray-100">
              <Smile className="w-5 h-5 mr-2 text-yellow-500" />
              Feeling/activity
            </Button>
          </div>
          
          <Button
            onClick={handlePost}
            disabled={!postText.trim()}
            className="bg-facebook-blue hover:bg-facebook-blue-dark disabled:opacity-50"
          >
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
