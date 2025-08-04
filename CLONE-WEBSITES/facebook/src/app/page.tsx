"use client";

import { useEffect, useState } from "react";
import FacebookNav from "@/components/FacebookNav";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";
import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { posts, storyList } from "@/lib/mockData";
import { useRouter } from "next/navigation";

export default function FacebookHome() {
  const [stories, setStories] = useState(storyList);
  const [user, setUser] = useState<{ name?: string; avatar?: string } | null>(
    null
  );

  const navigate = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("facebook_user");
    if (!storedUser) {
      navigate.push("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="bg-facebook-gray min-h-screen">
      <FacebookNav />

      <div className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto">
        {/* Left Sidebar */}
        <aside className="hidden lg:block lg:w-64 xl:w-72">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-2 sm:px-4 py-4 sm:py-6 max-w-full lg:max-w-2xl lg:mx-auto">
          {/* Stories */}
          <Card className="mb-4 border-0 shadow-sm">
            <CardContent className="p-3 sm:p-4">
              <div className="flex space-x-3 sm:space-x-4 overflow-x-auto hide-scrollbar">
                {stories.map((story, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 text-center w-20 sm:w-24"
                  >
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-1 sm:mb-2">
                      <Avatar className="w-full h-full border-4 border-facebook-blue">
                        <AvatarImage src={story.avatar} />
                        <AvatarFallback>{story.name?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {story.isOwn && (
                        <div className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 bg-facebook-blue rounded-full flex items-center justify-center border-2 border-white">
                          <span className="text-white text-sm sm:text-lg font-bold">
                            +
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs font-medium text-center max-w-[80px] truncate">
                      {story.name}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Create Post */}
          <CreatePost />

          {/* Posts Feed */}
          <div className="space-y-4 mt-4">
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden lg:block lg:w-64 xl:w-72">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}
