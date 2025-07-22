"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Brand } from "@/dummyData/brands";
import getPriceRangeColor from "../(products)/PriceRange";

interface BrandCardProps {
  brand: Brand;
  variant?: "default" | "featured";
}

export function BrandCard({ brand, variant = "default" }: BrandCardProps) {
  const priceRangeColor = getPriceRangeColor(brand.priceRange);

  return (
    <Card className="group shadow-sm hover:shadow-md transition-all duration-300 border-none overflow-hidden flex flex-col h-full">
      {/* Logo section */}
      <div className="relative bg-gray-50 p-4 flex items-center justify-center h-24">
        <Image
          src={brand.logo || "/placeholder.svg"}
          alt={`${brand.name} logo`}
          width={100}
          height={60}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {brand.premium && (
          <Badge className="absolute top-2 right-2 bg-yellow-500 text-white text-xs text-nowrap">
            Premium
          </Badge>
        )}
      </div>

      {/* Content section */}
      <CardContent className="relative flex flex-col py-3 px-2 gap-2 h-40">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-nowrap">{brand.name}</h3>
          <Badge className={`text-nowrap ${priceRangeColor}`}>
            {brand.priceRange}
          </Badge>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2">
          {brand.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="absolute bottom-10 left-5">{brand.country}</span>
          <span className="absolute bottom-10 right-5">
            {brand.productCount} items
          </span>
        </div>

        <Button
          asChild
          size="sm"
          className=" absolute bottom-0 right-2 left-2 rounded-full mb-1"
        >
          <Link href={`/brands/${brand.id}`}>Shop Now</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
