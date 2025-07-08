"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Brand } from "@/lib/brands"

interface BrandCardProps {
  brand: Brand
  variant?: "default" | "featured"
}

export function BrandCard({ brand, variant = "default" }: BrandCardProps) {
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

  if (variant === "featured") {
    return (
      <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg overflow-hidden h-full flex flex-col">
        <div className="relative bg-gray-50 p-8 flex items-center justify-center h-32 flex-shrink-0">
          <Image
            src={brand.logo || "/placeholder.svg"}
            alt={`${brand.name} logo`}
            width={120}
            height={80}
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {brand.premium && <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">Premium</Badge>}
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold">{brand.name}</h3>
            <Badge className={getPriceRangeColor(brand.priceRange)}>{brand.priceRange}</Badge>
          </div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{brand.description}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{brand.country}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{brand.founded}</span>
            </div>
            <div className="flex items-center gap-1">
              <Package className="w-3 h-3" />
              <span>{brand.productCount} items</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mb-4">
            {brand.specialties.slice(0, 2).map((specialty) => (
              <Badge key={specialty} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
          <Button asChild className="w-full rounded-full mt-auto">
            <Link href={`/products?brand=${brand.id}`}>Shop {brand.name}</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-none shadow-sm overflow-hidden h-full flex flex-col">
      <div className="relative bg-gray-50 p-6 flex items-center justify-center h-24 flex-shrink-0">
        <Image
          src={brand.logo || "/placeholder.svg"}
          alt={`${brand.name} logo`}
          width={100}
          height={60}
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {brand.premium && (
          <Badge className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-600 text-xs">Premium</Badge>
        )}
      </div>
      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold">{brand.name}</h3>
          <Badge className={`${getPriceRangeColor(brand.priceRange)} text-nowrap `} variant="secondary">
            {brand.priceRange}
          </Badge>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">{brand.description}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>{brand.country}</span>
          <span>{brand.productCount} items</span>
        </div>
        <Button asChild size="sm" className="w-full rounded-full mt-auto">
          <Link href={`/products?brand=${brand.id}`}>Shop Now</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
