"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  Search,
  MessageCircle,
  Bell,
  Menu,
  Plus,
  FacebookIcon,
} from "lucide-react";

export default function FacebookNav() {
  const router = useRouter();
  const [user, setUser] = useState<{ name?: string; avatar?: string }>({});
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const storedUser = localStorage.getItem("facebook_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("facebook_user");
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 py-4">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <div
              className="text-facebook-blue text-3xl font-bold cursor-pointer"
              onClick={() => router.push("/")}
            >
              <svg viewBox="0 0 36 36" className="rounded-full w-12 h-12">
                <path
                  className="fill-facebook-blue"
                  d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"
                ></path>
                <path
                  className="fill-white"
                  d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"
                ></path>
              </svg>
            </div>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search Facebook"
                className="pl-10 w-60 bg-gray-100 border-0 rounded-full focus:bg-white"
              />
            </div>
          </div>

          {/* Center Section */}
          <div className="hidden lg:flex items-center space-x-5 lg:mr-14 ">
            <button
              className="h-12 px-6 rounded-lg hover:bg-gray-100"
              onClick={() => {
                setActiveTab("home");
                router.push("/");
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className={`w-10 h-10
                 ${
                   activeTab === "home"
                     ? "text-blue-600 fill-facebook-blue"
                     : "text-gray-600"
                 }`}
              >
                {activeTab == "home" ? (
                  <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path>
                ) : (
                  <path d="M8.99 23H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H8.99zM7.8 4.9l-2 1.5C4.15 7.638 3.61 8.074 3.317 8.658 3.025 9.242 3 9.937 3 12v4c0 1.442.002 2.424.101 3.159.095.706.262 1.033.485 1.255.223.223.55.39 1.256.485.734.099 1.716.1 3.158.1V14.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5V21c1.443 0 2.424-.002 3.159-.101.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.256.099-.734.101-1.716.101-3.158v-4c0-2.063-.025-2.758-.317-3.342-.291-.584-.832-1.02-2.483-2.258l-2-1.5c-1.174-.881-1.987-1.489-2.67-1.886C12.87 2.63 12.425 2.5 12 2.5c-.425 0-.87.13-1.53.514-.682.397-1.495 1.005-2.67 1.886zM14 21v-6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21h4z"></path>
                )}
              </svg>
            </button>
            <button
              className="h-12 px-6 rounded-lg hover:bg-gray-100"
              onClick={() => {
                setActiveTab("user");
                router.push("/");
              }}
            >
              <Users
                className={`w-10 h-10
                 ${
                   activeTab === "user"
                     ? "text-blue-600 fill-facebook-blue"
                     : "text-gray-600"
                 }`}
              />
            </button>
            <button
              className="h-12 px-6 rounded-lg hover:bg-gray-100"
              onClick={() => {
                setActiveTab("monitor");
                router.push("/");
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className={`w-10 h-10
                 ${
                   activeTab === "monitor"
                     ? "text-blue-600 fill-facebook-blue "
                     : "text-gray-600"
                 }`}
              >
                {activeTab == "monitor" ? (
                  <>
                    <path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zm-3.577 6.132 3.5 2a1 1 0 0 1 0 1.736l-3.5 2A1 1 0 0 1 9.5 13V9a1 1 0 0 1 1.496-.868zM7 22.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z"></path>
                  </>
                ) : (
                  <>
                    <path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path>
                    <path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path>
                  </>
                )}
              </svg>
            </button>
            <button
              className="h-12 px-6 rounded-lg hover:bg-gray-100"
              onClick={() => {
                setActiveTab("group");
                router.push("/");
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className={`w-10 h-10
                 ${
                   activeTab === "group"
                     ? "text-blue-600 fill-facebook-blue "
                     : "text-gray-600"
                 }`}
              >
                {activeTab == "group" ? (
                  <>
                    <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5zM3.34 8.088A9.502 9.502 0 0 1 12 2.5a9.502 9.502 0 0 1 8.66 5.588 4.001 4.001 0 0 0 0 7.824 9.514 9.514 0 0 1-1.755 2.613A5.002 5.002 0 0 0 14 14.5h-4a5.002 5.002 0 0 0-4.905 4.025 9.515 9.515 0 0 1-1.755-2.613 4.001 4.001 0 0 0 0-7.824z"></path>
                    <path d="M12 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  </>
                ) : (
                  <>
                    <path d="M12 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                    <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5zM2.5 12c0-.682.072-1.348.209-1.99a2 2 0 0 1 0 3.98A9.539 9.539 0 0 1 2.5 12zm4 0a4.001 4.001 0 0 0-3.16-3.912A9.502 9.502 0 0 1 12 2.5a9.502 9.502 0 0 1 8.66 5.588 4.001 4.001 0 0 0 0 7.824 9.514 9.514 0 0 1-1.755 2.613A5.002 5.002 0 0 0 14 14.5h-4a5.002 5.002 0 0 0-4.905 4.025 9.515 9.515 0 0 1-1.755-2.613A4.001 4.001 0 0 0 6.5 12zm13 0a2 2 0 0 1 1.791-1.99 9.538 9.538 0 0 1 0 3.98A2 2 0 0 1 19.5 12zm-2.51 8.086A9.455 9.455 0 0 1 12 21.5c-1.83 0-3.54-.517-4.99-1.414a1.004 1.004 0 0 1-.01-.148V19.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v.438a1 1 0 0 1-.01.148z"></path>
                  </>
                )}
              </svg>
            </button>
            <button
              className="h-12 px-6 rounded-lg hover:bg-gray-100"
              onClick={() => {
                setActiveTab("gamepad");
                router.push("/");
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className={`w-10 h-10
                 ${
                   activeTab === "gamepad"
                     ? "text-blue-600 fill-facebook-blue"
                     : "text-gray-600"
                 }`}
              >
                {activeTab == "gamepad" ? (
                  <path d="M7.5 4a7 7 0 0 0-7 7v2a7 7 0 0 0 7 7h9a7 7 0 0 0 7-7v-2a7 7 0 0 0-7-7h-9zM8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm-.5 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                ) : (
                  <>
                    <path d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"></path>
                    <path d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z"></path>
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <Plus className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <Bell className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Avatar
              onClick={() => router.push("/profile")}
              className="cursor-pointer"
            >
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
}
