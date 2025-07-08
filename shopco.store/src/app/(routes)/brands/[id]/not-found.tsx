"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search, Building, Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BrandNotFound() {
  const suggestedBrands = [
    {
      id: "versace",
      name: "Versace",
      logo: "/placeholder.svg?height=60&width=90",
      category: "Luxury",
      country: "Italy",
      priceRange: "Luxury",
      productCount: 156,
    },
    {
      id: "zara",
      name: "Zara",
      logo: "/placeholder.svg?height=60&width=90",
      category: "Fast Fashion",
      country: "Spain",
      priceRange: "Mid-Range",
      productCount: 324,
    },
    {
      id: "gucci",
      name: "Gucci",
      logo: "/placeholder.svg?height=60&width=90",
      category: "Luxury",
      country: "Italy",
      priceRange: "Luxury",
      productCount: 198,
    },
    {
      id: "calvin-klein",
      name: "Calvin Klein",
      logo: "/placeholder.svg?height=60&width=90",
      category: "Contemporary",
      country: "USA",
      priceRange: "Mid-Range",
      productCount: 267,
    },
  ]

  const getPriceRangeColor = (priceRange: string) => {
    switch (priceRange) {
      case "Budget":
        return "bg-green-100 text-green-800"
      case "Mid-Range":
        return "bg-blue-100 text-blue-800"
      case "Premium":
        return "bg-purple-100 text-purple-800"
      case "Luxury":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Error Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Not Found Illustration */}
          <div className="mb-12">
            <div className="relative w-64 h-64 mx-auto mb-8">
              {/* Empty brand placeholder */}
              <div className="absolute inset-0 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl font-bold">?</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-black rounded-full opacity-20"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-gray-400 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-gray-300 rounded-lg opacity-25 transform rotate-12"></div>
              <div className="absolute -bottom-2 -left-6 w-4 h-8 bg-gray-400 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Brand Not Found</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              We couldn&apos;t find the brand you&apos;re looking for. It may have been removed, renamed, or the link might be
              incorrect.
            </p>
            <p className="text-gray-500">Don&apos;t worry! We have over 200+ amazing brands for you to explore.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/brands">
                <Search className="w-5 h-5 mr-2" />
                Browse All Brands
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
              <Link href="/products">
                <Building className="w-5 h-5 mr-2" />
                Shop Products
              </Link>
            </Button>

            <Button variant="ghost" size="lg" className="rounded-full px-8" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">What are you looking for?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/brands?category=luxury"
              className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Luxury Brands</h3>
              <p className="text-gray-600 text-sm">Premium designer brands</p>
            </Link>

            <Link
              href="/brands?priceRange=mid-range"
              className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="font-semibold mb-2">Popular Brands</h3>
              <p className="text-gray-600 text-sm">Trending fashion brands</p>
            </Link>

            <Link
              href="/brands?priceRange=budget"
              className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold mb-2">Affordable Brands</h3>
              <p className="text-gray-600 text-sm">Budget-friendly options</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Suggested Brands */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Brands You Might Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedBrands.map((brand) => (
              <Card
                key={brand.id}
                className="group hover:shadow-lg transition-all duration-300 border-none shadow-sm overflow-hidden"
              >
                <div className="relative bg-gray-50 p-6 flex items-center justify-center h-24">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    width={90}
                    height={60}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">{brand.name}</h3>
                    <Badge className={getPriceRangeColor(brand.priceRange)} variant="secondary">
                      {brand.priceRange}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{brand.category}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{brand.country}</span>
                    </div>
                    <span>{brand.productCount} items</span>
                  </div>
                  <Button asChild size="sm" className="w-full rounded-full">
                    <Link href={`/brands/${brand.id}`}>Explore Brand</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/brands">View All Brands</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Luxury", "Fast Fashion", "Sportswear", "Contemporary", "Denim", "Casual"].map((category) => (
              <Button
                key={category}
                asChild
                variant="outline"
                className="h-16 bg-transparent hover:bg-black hover:text-white transition-colors"
              >
                <Link href={`/brands?category=${category.toLowerCase().replace(" ", "-")}`}>{category}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help you discover the perfect brand for your style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">💬</span>
              </div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm mb-4">Chat with our brand experts</p>
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
              <p className="text-gray-400 text-sm mb-4">Get personalized recommendations</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                <Link href="/contact">Send Email</Link>
              </Button>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">📱</span>
              </div>
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-400 text-sm mb-4">Speak with our team directly</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                <Link href="/contact">Call Now</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
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
    </div>
  )
}
