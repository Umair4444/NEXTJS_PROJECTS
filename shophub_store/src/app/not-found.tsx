"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-12 text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-gray-300 mb-4">404</div>
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
              <Search className="h-12 w-12 text-blue-600" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Shop Now
              </Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                All Products
              </Link>
              <Link
                href="/categories"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Contact
              </Link>
              <Link
                href="/help"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Help Center
              </Link>
              <Link
                href="/shipping"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Shipping Info
              </Link>
              <Link
                href="/returns"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Returns
              </Link>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Still need help?{" "}
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Contact our support team
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
