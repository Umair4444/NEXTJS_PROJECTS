import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Users,
  Clock,
  Bookmark,
  Flag,
  Monitor,
  Store,
  Calendar,
  ChevronDown,
} from "lucide-react";

export default function Sidebar() {
  const user = JSON.parse(localStorage.getItem("facebook_user") || "{}");

  const menuItems = [
    { icon: Users, label: "Friends", color: "text-blue-500" },
    { icon: Clock, label: "Memories", color: "text-blue-500" },
    { icon: Bookmark, label: "Saved", color: "text-purple-500" },
    { icon: Flag, label: "Pages", color: "text-orange-500" },
    { icon: Monitor, label: "Watch", color: "text-blue-500" },
    { icon: Store, label: "Marketplace", color: "text-blue-500" },
    { icon: Calendar, label: "Events", color: "text-red-500" },
  ];

  return (
    <div className="w-full bg-white h-screen overflow-y-auto hide-scrollbar pb-4 sticky top-14">
      <div className="p-4 space-y-2">
        {/* User Profile */}
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <Avatar>
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{user.name || "User"}</span>
        </div>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <item.icon
              className={`w-9 h-9 p-2 ${item.color} bg-gray-100 rounded-full`}
            />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}

        <Button variant="ghost" className="w-full justify-start p-2 h-auto">
          <ChevronDown className="w-9 h-9 p-2 text-gray-500 bg-gray-100 rounded-full mr-3" />
          See more
        </Button>
      </div>

      {/* Shortcuts */}
      <div className="px-4 mt-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-600 font-semibold">Your shortcuts</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg"></div>
            <span className="font-medium">React Developers</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg"></div>
            <span className="font-medium">JavaScript News</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg"></div>
            <span className="font-medium">Tech Enthusiasts</span>
          </div>
        </div>
      </div>
    </div>
  );
}
