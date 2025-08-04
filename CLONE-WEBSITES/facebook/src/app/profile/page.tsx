"use client";
import FacebookNav from "@/components/FacebookNav";
import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import {
  Camera,
  Edit,
  Plus,
  MapPin,
  Heart,
  GraduationCap,
  Briefcase,
  Calendar,
} from "lucide-react";

export default function Profile() {
  const [user, setUser] = useState({ name: "", avatar: "" });

  useEffect(() => {
    const data = localStorage.getItem("facebook_user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  // Mock user posts
  const userPosts = [
    {
      id: "1",
      author: {
        name: user.name || "John Doe",
        avatar:
          user.avatar ||
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
      },
      timestamp: "1 day ago",
      content:
        "Grateful for all the wonderful people in my life. Looking forward to new adventures and opportunities ahead! 🌟",
      likes: 35,
      comments: 12,
      shares: 5,
    },
    {
      id: "2",
      author: {
        name: user.name || "John Doe",
        avatar:
          user.avatar ||
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
      },
      timestamp: "3 days ago",
      content:
        "Amazing sunset at the beach today! Sometimes you just need to take a moment to appreciate the beauty around us.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop&auto=format",
      likes: 67,
      comments: 23,
      shares: 8,
    },
  ];

  const photos = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=200&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=200&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=200&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=200&h=200&fit=crop&auto=format",
  ];

  const friends = [
    {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b999?w=150&h=150&fit=crop&auto=format",
    },
    {
      name: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format",
    },
    {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format",
    },
    {
      name: "Alex Thompson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
    },
    {
      name: "Lisa Garcia",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&auto=format",
    },
    {
      name: "David Park",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&auto=format",
    },
  ];

  return (
    <div className="bg-facebook-gray min-h-screen">
      <FacebookNav />

      <div className="max-w-6xl mx-auto">
        {/* Cover Photo & Profile Section */}
        <Card className="mb-4 border-0 shadow-sm overflow-hidden">
          {/* Cover Photo */}
          <div className="relative h-80 bg-gradient-to-r from-blue-400 to-purple-500">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=320&fit=crop&auto=format"
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <Button variant="secondary" className="absolute bottom-4 right-4">
              <Camera className="w-4 h-4 mr-2" />
              Edit Cover Photo
            </Button>
          </div>

          {/* Profile Info */}
          <CardContent className="p-0">
            <div className="relative px-6 pb-4">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col md:flex-row md:items-end">
                  <Avatar className="w-40 h-40 border-4 border-white -mt-20 mb-4 md:mb-0">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="text-4xl">
                      {user.name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="md:ml-6 md:mb-4 pt-2">
                    <h1 className="text-3xl font-bold">
                      {user.name || "John Doe"}
                    </h1>
                    <p className="text-gray-600 text-lg">856 friends</p>
                    <div className="flex -space-x-2 mt-2">
                      {friends.slice(0, 6).map((friend, index) => (
                        <Avatar
                          key={index}
                          className="w-8 h-8 border-2 border-white"
                        >
                          <AvatarImage src={friend.avatar} />
                          <AvatarFallback>
                            {friend.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0 md:mb-4">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add to story
                  </Button>
                  <Button variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit profile
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column - About */}
          <div className="space-y-4">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-4">Intro</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-gray-500" />
                    <span>
                      Software Engineer at <strong>Tech Corp</strong>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-gray-500" />
                    <span>
                      Studied at <strong>University of Technology</strong>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span>
                      Lives in <strong>San Francisco, CA</strong>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-gray-500" />
                    <span>Single</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span>Joined March 2020</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 hover:facebook-blue"
                >
                  Edit details
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Photos</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-facebook-blue"
                  >
                    See all photos
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {photos.slice(0, 6).map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Friends</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-facebook-blue"
                  >
                    See all friends
                  </Button>
                </div>
                <p className="text-gray-600 mb-4">856 friends</p>
                <div className="grid grid-cols-3 gap-3">
                  {friends.slice(0, 6).map((friend, index) => (
                    <div key={index} className="text-center">
                      <Avatar className="w-full h-24 mb-2">
                        <AvatarImage src={friend.avatar} />
                        <AvatarFallback className="text-6xl font-medium">{friend.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="text-sm font-medium">{friend.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Posts */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="posts" className="w-full">
              <Card className="border-0 shadow-sm mb-4">
                <CardContent className="p-0">
                  <TabsList className="w-full bg-transparent border-b rounded-none h-12">
                    <TabsTrigger
                      value="posts"
                      className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-facebook-blue"
                    >
                      Posts
                    </TabsTrigger>
                    <TabsTrigger
                      value="about"
                      className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-facebook-blue"
                    >
                      About
                    </TabsTrigger>
                    <TabsTrigger
                      value="friends"
                      className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-facebook-blue"
                    >
                      Friends
                    </TabsTrigger>
                    <TabsTrigger
                      value="photos"
                      className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-facebook-blue"
                    >
                      Photos
                    </TabsTrigger>
                  </TabsList>
                </CardContent>
              </Card>

              <TabsContent value="posts">
                <div className="space-y-4">
                  {userPosts.map((post) => (
                    <Post key={post.id} {...post} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="about">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4">About</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Passionate software engineer with a love for creating
                      innovative solutions. Enjoys hiking, photography, and
                      exploring new technologies. Always eager to learn and
                      connect with like-minded individuals.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="friends">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4">Friends (856)</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {friends.map((friend, index) => (
                        <div key={index} className="text-center">
                          <Avatar className="w-20 h-20 mx-auto mb-2">
                            <AvatarImage src={friend.avatar} />
                            <AvatarFallback>
                              {friend.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <p className="font-medium">{friend.name}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="photos">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4">Photos</h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {photos.map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt={`Photo ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
