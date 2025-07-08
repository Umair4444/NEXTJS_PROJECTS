"use client"

import { useState } from "react"
import { useParams,notFound } from "next/navigation"
import Image from "next/image"
import { Heart, Star, Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import { getProductById } from "@/lib/products"
import { cn } from "@/lib/utils"

export default function ProductPage() {
  const params = useParams()
  const product = getProductById(params.id as string)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)

  const { addItem: addToCart } = useCart()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()

 if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
    })
  }

  const handleWishlistToggle = () => {
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
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden border-2",
                  selectedImage === index ? "border-black" : "border-transparent",
                )}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-5 h-5",
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : i < product.rating
                          ? "fill-yellow-400/50 text-yellow-400"
                          : "fill-gray-200 text-gray-200",
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating}/5 ({product.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                  {product.discount && (
                    <Badge className="bg-red-100 text-red-600 hover:bg-red-100">-{product.discount}%</Badge>
                  )}
                </>
              )}
            </div>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <Separator />

          {/* Size Selection */}
          {product.sizes.length > 0 && (
            <div>
              <h3 className="font-semibold mb-3">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "px-6 py-3 border rounded-full transition-colors",
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400",
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div>
              <h3 className="font-semibold mb-3">Select Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "px-6 py-3 border rounded-full transition-colors",
                      selectedColor === color
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400",
                    )}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* Quantity and Actions */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 rounded-l-full"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-100 rounded-r-full">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleAddToCart} className="flex-1 rounded-full h-12" size="lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                onClick={handleWishlistToggle}
                className="rounded-full h-12 px-6 bg-transparent"
              >
                <Heart className={cn("w-5 h-5", isInWishlist(product.id) ? "fill-red-500 text-red-500" : "")} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews & Ratings</TabsTrigger>
            <TabsTrigger value="faq">FAQs</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-8">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Product Details</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium quality materials</li>
                <li>• Comfortable fit</li>
                <li>• Machine washable</li>
                <li>• Available in multiple sizes and colors</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-6">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-semibold">Customer {review}</span>
                    </div>
                    <p className="text-gray-600">
                      Great quality product! Exactly as described and fits perfectly. Would definitely recommend to
                      others.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="faq" className="mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What is your return policy?</h4>
                  <p className="text-gray-600">
                    We offer a 30-day return policy for all unworn items with tags attached.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How do I care for this product?</h4>
                  <p className="text-gray-600">Machine wash cold with like colors. Tumble dry low or hang to dry.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Is this product true to size?</h4>
                  <p className="text-gray-600">
                    Yes, this product runs true to size. Check our size guide for measurements.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
