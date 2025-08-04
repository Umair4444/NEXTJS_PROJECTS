import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal, Search } from "lucide-react";

export default function RightSidebar() {
  const onlineContacts = [
    {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b999?w=150&h=150&fit=crop&auto=format",
      online: true,
    },
    {
      name: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format",
      online: true,
    },
    {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format",
      online: false,
    },
    {
      name: "Alex Thompson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
      online: true,
    },
    {
      name: "Lisa Garcia",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&auto=format",
      online: false,
    },
  ];

  const suggestions = [
    {
      name: "David Park",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&auto=format",
      mutualFriends: 12,
    },
    {
      name: "Rachel Green",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&auto=format",
      mutualFriends: 8,
    },
  ];

  return (
    <div className="w-full bg-white h-screen hide-scrollbar overflow-y-auto pb-4 sticky top-14">
      <div className="p-4">
        {/* Sponsored */}
        <div className="mb-6">
          <h3 className="text-gray-600 font-semibold mb-3">Sponsored</h3>
          <Card className="border-0 shadow-none bg-gray-50">
            <CardContent className="p-3">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&auto=format"
                  alt="Ad"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-medium text-sm">Learn Web Development</h4>
                  <p className="text-xs text-gray-600">
                    Start your coding journey today with our comprehensive
                    courses.
                  </p>
                  <p className="text-xs text-blue-600">codecademy.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contacts */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-600 font-semibold">Contacts</h3>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            {onlineContacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <div className="relative">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={contact.avatar} />
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {contact.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <span className="text-sm font-medium">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Friend Suggestions */}
        <div>
          <h3 className="text-gray-600 font-semibold mb-3">
            People you may know
          </h3>
          <div className="space-y-3 mb-3">
            {suggestions.map((person, index) => (
              <Card key={index} className="border-0 shadow-none bg-gray-50">
                <CardContent className="p-3">
                  <div className="flex items-start space-x-3">
                    <Avatar>
                      <AvatarImage src={person.avatar} />
                      <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{person.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">
                        {person.mutualFriends} mutual friends
                      </p>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="bg-facebook-blue hover:bg-facebook-blue-dark text-xs px-3 py-1 h-auto"
                        >
                          Add Friend
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs px-3 py-1 h-auto"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
