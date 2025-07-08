"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/hooks/use-wishlist"
import { useCart } from "@/hooks/use-cart"
import { cn } from "@/lib/utils"

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlist()
  const { addItem: addToCart } = useCart()

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
    })
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <Heart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold mb-4">Your wishlist is empty</h1>
          <p className="text-gray-600 mb-8">Save items you love to your wishlist and shop them later.</p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Wishlist ({items.length})</h1>
        <Button variant="outline" onClick={clearWishlist}>
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item:any) => (
          <div key={item.id} className="group relative">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-[3/4]">
              <Link href={`/products/${item.id}`}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white"
                onClick={() => removeItem(item.id)}
              >
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              </Button>
            </div>

            <div className="mt-4 space-y-2">
              <Link href={`/products/${item.id}`}>
                <h3 className="font-bold text-lg hover:text-gray-600 transition-colors">{item.name}</h3>
              </Link>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < Math.floor(item.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : i < item.rating
                            ? "fill-yellow-400/50 text-yellow-400"
                            : "fill-gray-200 text-gray-200",
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{item.rating}/5</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">${item.price}</span>
                {item.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">${item.originalPrice}</span>
                )}
              </div>

              <Button onClick={() => handleAddToCart(item)} className="w-full mt-3" size="sm">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
