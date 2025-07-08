"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Search,
  ArrowLeft,
  ShoppingBag,
  Heart,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  const popularCategories = [
    { name: "New Arrivals", href: "/products?new=true" },
    { name: "Men&apos;s Clothing", href: "/products?category=men" },
    { name: "Women&apos;s Clothing", href: "/products?category=women" },
    { name: "Sale Items", href: "/products?sale=true" },
    { name: "Accessories", href: "/products?category=accessories" },
    { name: "Top Brands", href: "/brands" },
  ];

  const quickLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    {
      name: "Shop",
      href: "/products",
      icon: <ShoppingBag className="w-4 h-4" />,
    },
    {
      name: "Wishlist",
      href: "/wishlist",
      icon: <Heart className="w-4 h-4" />,
    },
    { name: "Account", href: "/user", icon: <User className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main 404 Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-12">
            <div className="relative mx-auto w-80 h-80 mb-8">
              {/* Large 404 Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl font-bold text-gray-100 select-none">
                  404
                </span>
              </div>

              {/* Fashion Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-black rounded-full flex items-center justify-center transform rotate-12">
                <div className="w-8 h-8 border-2 border-white rounded-full"></div>
              </div>

              <div className="absolute top-12 right-12 w-12 h-12 bg-gray-200 rounded-lg transform -rotate-12"></div>

              <div className="absolute bottom-16 left-16 w-8 h-8 bg-black transform rotate-45"></div>

              <div className="absolute bottom-12 right-8 w-6 h-12 bg-gray-300 rounded-full"></div>

              {/* Shopping bag icon in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              The page you&apos;re looking for seems to have wandered off like a
              fashion trend from last season. Don&apos;t worry, we&apos;ll help you find
              what you&apos;re looking for!
            </p>
            <p className="text-gray-500">
              Error Code: 404 | The requested page could not be found
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 bg-transparent"
            >
              <Link href="/products">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Continue Shopping
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="rounded-full px-8"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Search Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Looking for something specific?
            </h2>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for products, brands, or categories..."
                className="pl-12 h-12 rounded-full border-2 border-gray-200 focus:border-black"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full h-8 px-4">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                  {link.icon}
                </div>
                <h3 className="font-semibold group-hover:text-black transition-colors">
                  {link.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium group-hover:text-black transition-colors">
                    {category.name}
                  </span>
                  <ArrowLeft className="w-4 h-4 rotate-180 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our customer support team is here to assist you with any questions
            or concerns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">?</span>
              </div>
              <h3 className="font-semibold mb-2">FAQ</h3>
              <p className="text-gray-400 text-sm mb-4">
                Find answers to common questions
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                <Link href="/contact#faq">View FAQ</Link>
              </Button>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">💬</span>
              </div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm mb-4">
                Chat with our support team
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                <Link href="/contact">Start Chat</Link>
              </Button>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">📧</span>
              </div>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-gray-400 text-sm mb-4">Get help via email</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                <Link href="/contact">Send Email</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8"
            >
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 bg-transparent"
            >
              <Link href="/about">About SHOP.CO</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Suggested Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            You Might Like These
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[3/4] bg-gray-100 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=225"
                    alt="Suggested product"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">
                    Featured Product {index + 1}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-yellow-400 rounded-sm"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.5/5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">$99</span>
                    <span className="text-gray-400 line-through text-sm">
                      $129
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
