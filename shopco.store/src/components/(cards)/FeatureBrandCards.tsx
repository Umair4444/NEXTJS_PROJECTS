"use client";

import React, { useEffect } from "react";
import { getFeaturedBrands } from "@/dummyData/brands";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import getPriceRangeColor from "../(products)/PriceRange";
import { useSanityStore } from "@/hooks/useSanityStore";

const FeatureBrands: React.FC = () => {
  // from dummy data
  // const featuredBrands = getFeaturedBrands();

  // from sanity
  const { brands, fetchAll } = useSanityStore();
  useEffect(() => {
    fetchAll(); // Fetch all data on mount
  }, []);
  const featuredBrands = brands.filter((brand) => brand.isFeatured);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Brands</h2>
        <p className="text-xl text-gray-600">
          Our most popular and premium brand partners
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredBrands.slice(0, 4).map((brand) => {
          const priceRangeColor = getPriceRangeColor(brand.priceRange);
          return (
            <Card
              key={brand._id}
              className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg overflow-hidden h-fit flex flex-col"
            >
              <div className="relative bg-white p-8 flex items-center justify-center h-32 flex-shrink-0">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={80}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {brand.isPremium && (
                  <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">
                    Premium
                  </Badge>
                )}
              </div>

              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{brand.name}</h3>
                  <Badge className={priceRangeColor}>{brand.priceRange}</Badge>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                  {brand.description}
                </p>

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
                  {brand.specialties?.slice(0, 3).map((specialty) => (
                    <Badge
                      key={specialty}
                      variant="secondary"
                      className="text-xs"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <Button asChild className="w-full rounded-full mt-auto">
                  <Link href={`/brands/${brand._id}`}>Shop {brand.name}</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureBrands;
