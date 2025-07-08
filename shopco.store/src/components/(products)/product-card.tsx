"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LoadingSpinner } from "@/components/(spinners)/spinner"
import { useWishlist } from "@/hooks/use-wishlist"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/lib/products"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isTogglingWishlist, setIsTogglingWishlist] = useState(false)

  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()
  const { addItem: addToCart } = useCart()

  const handleWishlistToggle = async () => {
    setIsTogglingWishlist(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        rating: product.rating,
      })
    }
    setIsTogglingWishlist(false)
  }

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
    })
    setIsAddingToCart(false)
  }

  return (
    <div className="group relative">
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-[3/4]">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white"
          onClick={handleWishlistToggle}
          disabled={isTogglingWishlist}
        >
          {isTogglingWishlist ? (
            <LoadingSpinner size="sm" />
          ) : (
            <Heart
              className={cn("w-4 h-4", isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-600")}
            />
          )}
        </Button>
        {product.discount && (
          <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">-{product.discount}%</Badge>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-bold text-lg hover:text-gray-600 transition-colors">{product.name}</h3>
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : i < product.rating
                      ? "fill-yellow-400/50 text-yellow-400"
                      : "fill-gray-200 text-gray-200",
                )}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{product.rating}/5</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>

        <Button
          onClick={handleAddToCart}
          className="w-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity"
          disabled={isAddingToCart}
        >
          {isAddingToCart ? (
            <>
              <LoadingSpinner size="sm" className="mr-2" />
              Adding...
            </>
          ) : (
            "Add to Cart"
          )}
        </Button>
      </div>
    </div>
  )
}
