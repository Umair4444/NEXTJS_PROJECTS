"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would authenticate
    localStorage.setItem(
      "facebook_user",
      JSON.stringify({
        id: 1,
        name: "John Doe",
        email: email || "john@example.com",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
      })
    );
    navigate.push("/");
  };

  return (
    <div className="min-h-screen bg-facebook-gray flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Facebook Logo */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-facebook-blue mb-2">
            facebook
          </h1>
          <p className="text-xl text-gray-600">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>

        {/* SignUp Form */}
        <Card className="shadow-xl border-0">
          <CardHeader className="pb-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="Username"
                placeholder="Username"
                value={email}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 text-lg"
                required
              />
              <Input
                type="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg"
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-lg"
                required
              />
              <Button
                type="submit"
                className="w-full h-12 text-lg font-semibold bg-facebook-blue hover:bg-facebook-blue-dark"
              >
                Sign Up
              </Button>
            </form>
          </CardHeader>

          <CardContent className="pt-0">
            <Separator className="mb-4" />
            <div className="text-center">
              <Button
                variant="outline"
                className="bg-green-500 hover:bg-green-600 text-white border-0 px-8 py-3 text-lg font-semibold"
                onClick={() => navigate.push("/login")}
              >
                Go to Login
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-sm text-gray-600">
          <p>
            <strong>Create a Page</strong> for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
}
