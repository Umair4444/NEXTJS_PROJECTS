"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search, ShoppingBag, Home, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductNotFound() {
  const suggestedProducts = [
    {
      id: "1",
      name: "T-SHIRT WITH TAPE DETAILS",
      price: 120,
      image: "/placeholder.svg?height=200&width=150",
      rating: 4.5,
    },
    {
      id: "2",
      name: "SKINNY FIT JEANS",
      price: 240,
      originalPrice: 260,
      image: "/placeholder.svg?height=200&width=150",
      rating: 3.5,
    },
    {
      id: "3",
      name: "CHECKERED SHIRT",
      price: 180,
      image: "/placeholder.svg?height=200&width=150",
      rating: 4.5,
    },
    {
      id: "4",
      name: "SLEEVE STRIPED T-SHIRT",
      price: 130,
      originalPrice: 160,
      image: "/placeholder.svg?height=200&width=150",
      rating: 4.5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Main Error Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Product Not Found Illustration */}
          <div className="mb-12">
            <div className="relative w-64 h-64 mx-auto mb-8">
              {/* Empty product placeholder */}
              <div className="absolute inset-0 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl font-bold">!</span>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Not Found!</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Sorry, the product you&apos;re looking for is no longer available, out of stock, or may have been moved to a
              different location.
            </p>
            <p className="text-gray-500">This could happen if the product was discontinued or the link is outdated.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/products">
                <Search className="w-5 h-5 mr-2" />
                Browse All Products
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
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
          <h2 className="text-2xl font-bold text-center mb-8">What would you like to do?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/products?new=true"
              className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold mb-2">New Arrivals</h3>
              <p className="text-gray-600 text-sm">Check out our latest products</p>
            </Link>

            <Link
              href="/products?sale=true"
              className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <span className="text-2xl">🏷️</span>
              </div>
              <h3 className="font-semibold mb-2">Sale Items</h3>
              <p className="text-gray-600 text-sm">Great deals and discounts</p>
            </Link>

            <Link
              href="/wishlist"
              className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Your Wishlist</h3>
              <p className="text-gray-600 text-sm">View your saved items</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Suggested Products */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 border-none shadow-sm"
              >
                <div className="relative bg-gray-100 rounded-t-lg overflow-hidden aspect-[3/4]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <CardContent className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-bold text-sm mb-2 hover:text-gray-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-sm ${
                          i < Math.floor(product.rating) ? "bg-yellow-400" : "bg-gray-200"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-600 ml-1">{product.rating}/5</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>

                  <Button asChild size="sm" className="w-full rounded-full">
                    <Link href={`/products/${product.id}`}>View Product</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Finding Something?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our customer support team is here to help you find the perfect product.
          </p>

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
              <Link href="/brands">Browse Brands</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
