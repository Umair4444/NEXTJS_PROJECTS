"use client";

import { Product } from "@/dummyData/products";
import React, { useState } from "react";
import { Heart, Star, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/hooks/use-wishlist";
import { useCart } from "@/hooks/use-cart";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addItem: addToCart } = useCart();
  const {
    addItem: addToWishlist,
    removeItem: removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    });
  };

  const handleWishlistToggle = () => {
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
  };
  return (
    <>
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
                        : "fill-gray-200 text-gray-200"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating}/5 (reviews)
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-2xl text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
                {product.discount && (
                  <Badge className="bg-red-100 text-red-600 hover:bg-red-100">
                    -{product.discount}%
                  </Badge>
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
                  key={size._id}
                  onClick={() => setSelectedSize(size.productSize)}
                  className={cn(
                    "px-6 py-3 border rounded-full transition-colors",
                    selectedSize === size.productSize
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-gray-400"
                  )}
                >
                  {size.productSize}
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
                  key={color._id}
                  onClick={() => setSelectedColor(color.productColor)}
                  className={cn(
                    "px-6 py-3 border rounded-full transition-colors",
                    selectedColor === color.productColor
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-gray-400"
                  )}
                >
                  {color.productColor}
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
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-gray-100 rounded-r-full"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={handleAddToCart}
              className="flex-1 rounded-full h-12"
              size="lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              onClick={handleWishlistToggle}
              className="rounded-full h-12 px-6 bg-transparent"
            >
              <Heart
                className={cn(
                  "w-5 h-5",
                  isInWishlist(product._id) ? "fill-red-500 text-red-500" : ""
                )}
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
