"use client";

import { useState, useMemo, useEffect } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ProductCard } from "@/components/(cards)/ProductCard";
import SearchFilter from "@/components/(filters)/SearchFilter";
import FilterContent from "@/components/(filters)/ContentFilter";
import SortFilter from "@/components/(filters)/SortFilter";
import { useSanityStore } from "@/hooks/useSanityStore";
// import { products } from "@/dummyData/products";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = useSearchParams();
  const isOnSale = searchParams.get("isonsale") === "true";
  const isNew = searchParams.get("isnew") === "true";

  // for fetching data from sanity store
  const { products, fetchAll } = useSanityStore();
  useEffect(() => {
    fetchAll(); // Fetch all data on mount
  }, []);

  const categories = useMemo(() => {
    const all = products.flatMap(
      (p) => p.typeCategories?.map((c) => c.title) || []
    );
    return Array.from(new Set(all));
  }, [products]);

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchSale =
        !searchParams.has("isonsale") || product.isOnSale === isOnSale;
      const matchNew = !searchParams.has("isnew") || product.isNew === isNew;
      const matchesCategory =
        selectedCategories.length === 0 ||
        (product.typeCategories &&
          product.typeCategories.some((c) =>
            selectedCategories.includes(c.title)
          ));

      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchNew &&
        matchSale
      );
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [
    products,
    searchQuery,
    selectedCategories,
    priceRange,
    sortBy,
    isNew,
    isOnSale,
  ]);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Filters */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5" />
              <h2 className="font-semibold">Filters</h2>
            </div>
            {/* Content Filter */}
            <FilterContent
              categories={categories}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-2">All Products</h1>
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              {/* Mobile Content Filter */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="lg:hidden bg-transparent"
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Filter products by category and price
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent
                      categories={categories}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      selectedCategories={selectedCategories}
                      setSelectedCategories={setSelectedCategories}
                    />
                  </div>
                </SheetContent>
              </Sheet>

              {/* sortfilter */}
              <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
            </div>
          </div>

          {/* Search */}
          <div className="mb-8">
            <SearchFilter
              placeholder={"Search products..."}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
