"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/dummyData/products";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  product: Product;
}

const ProductImages = ({ product }: ProductImageProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div className="space-y-4">
        <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
          <Image
            src={product.images[selectedImage] || product.image}
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
                selectedImage === index ? "border-black" : "border-transparent"
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
    </>
  );
};

export default ProductImages;
