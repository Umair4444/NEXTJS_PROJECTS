"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Product } from "@/hooks/sanityTypes";

interface ProductImageProps {
  product: Product;
}

const ProductImages = ({ product }: ProductImageProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4 ">
      {/* Main Image */}
      <div className="relative w-full h-auto md:h-2/3 aspect-square bg-gray-100 rounded-2xl overflow-hidden">
        <Image
          src={
            product.images[selectedImage] || product.image || "/placeholder.svg"
          }
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto">
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden border-2",
              selectedImage === index ? "border-black" : "border-transparent"
            )}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${product.name} ${index + 1}`}
              width={80}
              height={80}
              className="object-contain w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
