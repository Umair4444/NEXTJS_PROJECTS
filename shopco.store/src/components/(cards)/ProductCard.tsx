"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LoadingSpinner } from "@/components/(spinners)/spinner";
import { useWishlist } from "@/hooks/use-wishlist";
import { cn } from "@/lib/utils";
import { Product } from "@/hooks/sanityTypes";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isTogglingWishlist, setIsTogglingWishlist] = useState(false);

  const {
    addItem: addToWishlist,
    removeItem: removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const handleWishlistToggle = async () => {
    setIsTogglingWishlist(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist({
        _id: product._id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        rating: product.rating,
      });
    }
    setIsTogglingWishlist(false);
  };

  return (
    <div className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-md">
      {/* Image Section */}
      <div className="relative bg-gray-100 aspect-[1.2]">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain"
          />
        </Link>

        {/* Wishlist Button */}
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
              className={cn(
                "w-4 h-4",
                isInWishlist(product._id)
                  ? "fill-red-500 text-red-500"
                  : "text-gray-600"
              )}
            />
          )}
        </Button>

        {/* Discount Badge */}
        {product.discount && (
          <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
            -{product.discount}%
          </Badge>
        )}
      </div>

      {/* Info Section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div className="space-y-2">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-bold text-lg hover:text-gray-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
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
                        : "fill-gray-200 text-gray-200"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.rating}/5</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Shop Now Button at Bottom */}
        <Button asChild className="mt-4 w-full rounded-md">
          <Link href={`/products/${product.slug}`}>
            {product.btnText || "Shop Now"}
          </Link>
        </Button>
      </div>
    </div>
  );
}
