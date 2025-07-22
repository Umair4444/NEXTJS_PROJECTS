"use client";

import { useState, useMemo } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
// import BrandCard from "@/components/(products)/brand-card";
import { BrandCard } from "@/components/(cards)/BrandCard";
import { brands, getBrandCategories } from "@/dummyData/brands";
import CallToAction from "@/components/(brand)/CTA";
import FilterBrandCategories from "@/components/(brand)/FilterBrandCategories";
import SearchFilter from "@/components/(filters)/SearchFilter";
import FeatureBrands from "@/components/(cards)/FeatureBrandCardss";
import Stats from "@/components/(brand)/Stats";
import BrandFilter from "@/components/(brand)/BrandFilter";
import MobileFilter from "@/components/(brand)/MobileFilter";
import BrandSortFilter from "@/components/(brand)/BrandSortFilter";

export default function BrandsPage() {
  const categories = getBrandCategories();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("name");
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);

  const filteredBrands = useMemo(() => {
    const filtered = brands.filter((brand) => {
      const matchesSearch =
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        (brand.category &&
          brand.category.some((c) => selectedCategories.includes(c)));

      const matchesPremium = !showPremiumOnly || brand.premium;

      const matchesPriceRange =
        selectedPriceRanges.length === 0 ||
        selectedPriceRanges.includes(brand.priceRange);

      return (
        matchesSearch && matchesCategory && matchesPriceRange && matchesPremium
      );
    });

    // Sort brands
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "products":
          return b.productCount - a.productCount;
        case "founded":
          return Number.parseInt(a.founded) - Number.parseInt(b.founded);
        case "country":
          return a.country.localeCompare(b.country);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [
    searchQuery,
    selectedCategories,
    selectedPriceRanges,
    sortBy,
    showPremiumOnly,
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Brands</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover premium fashion brands from around the world. From luxury
            designers to contemporary labels, find your perfect style with our
            curated collection of international brands.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Featured Brands */}
      <section className="py-16">
        <FeatureBrands />
      </section>

      {/* All Brands */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Desktop Filters */}
            <div className="hidden lg:block w-64 shrink-0">
              <Card className="border-none shadow-lg sticky top-4">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter className="w-5 h-5" />
                    <h2 className="font-semibold">Filters</h2>
                  </div>

                  {/* Brand filter */}
                  <BrandFilter
                    categories={categories}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    selectedPriceRanges={selectedPriceRanges}
                    setSelectedPriceRanges={setSelectedPriceRanges}
                    showPremiumOnly={showPremiumOnly}
                    setShowPremiumOnly={setShowPremiumOnly}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">All Brands</h2>
                  <p className="text-gray-600">
                    Showing {filteredBrands.length} of {brands.length} brands
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Mobile Filter */}
                  <MobileFilter
                    categories={categories}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    selectedPriceRanges={selectedPriceRanges}
                    setSelectedPriceRanges={setSelectedPriceRanges}
                    showPremiumOnly={showPremiumOnly}
                    setShowPremiumOnly={setShowPremiumOnly}
                  />
                  {/* Filter and Sort by  */}
                  <BrandSortFilter sortBy={sortBy} setSortBy={setSortBy} />
                  
                </div>
              </div>

              {/* Search */}
              <div className="mb-8">
                <SearchFilter
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  placeholder={"Search Brands..."}
                />
              </div>

              {/* Brands Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                {filteredBrands.map((brand) => (
                  <BrandCard key={brand.id} brand={brand} />
                ))}
              </div>

              {/* Filter Not Match */}
              {filteredBrands.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No brands found matching your criteria.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategories([]);
                      setSelectedPriceRanges([]);
                      setShowPremiumOnly(false);
                    }}
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Categories */}
      <FilterBrandCategories
        categories={categories}
        setSelectedCategories={setSelectedCategories}
      />

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
}
