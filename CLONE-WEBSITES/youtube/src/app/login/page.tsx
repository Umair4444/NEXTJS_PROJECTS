import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Youtube } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="max-h-screen flex items-center justify-center py-12 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Youtube className="w-12 h-12 text-red-500" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Sign in to YouTube
          </CardTitle>
          <CardDescription>
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <Button className="w-full bg-red-600 hover:bg-red-700">
            Sign In
          </Button>
          <div className="text-center text-sm">
            <Link href="#" className="text-blue-600 hover:underline">
              Forgot your password?
            </Link>
          </div>
          <div className="text-center text-sm text-gray-600">
            {"Don't have an account? "}
            <Link href="#" className="text-blue-600 hover:underline">
              Create account
            </Link>
          </div>
          <div className="text-center">
            <Link href="/" className="text-sm text-gray-600 hover:underline">
              Back to YouTube
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
