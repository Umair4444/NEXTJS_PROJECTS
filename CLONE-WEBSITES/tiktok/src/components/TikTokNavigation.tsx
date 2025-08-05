"use client"
import { Home, Search, Plus, MessageCircle, User } from "lucide-react";
import { useState } from "react";

export default function TikTokNavigation() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'discover', icon: Search, label: 'Discover' },
    { id: 'create', icon: Plus, label: 'Create', isSpecial: true },
    { id: 'inbox', icon: MessageCircle, label: 'Inbox' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-tiktok-black border-t border-gray-800">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          if (item.isSpecial) {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="flex flex-col items-center justify-center relative"
              >
                <div className="w-12 h-8 bg-gradient-to-r from-tiktok-blue to-tiktok-red rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-white mt-1">{item.label}</span>
              </button>
            );
          }
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center justify-center flex-1 py-2"
            >
              <Icon 
                className={`w-6 h-6 ${
                  isActive ? 'text-white' : 'text-gray-500'
                }`} 
              />
              <span 
                className={`text-xs mt-1 ${
                  isActive ? 'text-white' : 'text-gray-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
