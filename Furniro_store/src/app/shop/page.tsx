"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

import { Input } from "@/components/ui/input";
import { Filter, Grid, List, Search, X } from "lucide-react";

import { categories, products } from "@/lib/mockData";
import CustomerSupport from "@/components/CustomerSupport";
import Pagination from "@/components/(Shared)/Pagination";
import ProductGridCard from "@/components/(Product)/ProductGridCard";
import FilterByRating from "@/components/(Product)/FilterByRating";
import FilterBySale from "@/components/(Product)/FilterBySale";
import FilterByPrice from "@/components/(Product)/FilterByPrice";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 15000000]);
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    onSale: false,
    newArrivals: false,
    freeShipping: false,
    rating: 0,
  });

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilters =
        (!filters.onSale || product.isOnSale) &&
        (!filters.newArrivals || product.isNew) &&
        (!filters.rating || product.rating >= filters.rating);

      return matchesCategory && matchesPrice && matchesSearch && matchesFilters;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return 0;
      }
    });

  const formatPrice = (price: number) => {
    return `Rs ${price.toLocaleString()}`;
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setPriceRange([0, 15000000]);
    setFilters({
      onSale: false,
      newArrivals: false,
      freeShipping: false,
      rating: 0,
    });
    setSearchQuery("");
  };

  console.log(typeof filters);

  return (
    <div className="min-h-screen bg-gradient-to-tl from-primary/20 to-secondary/10">
      {/* Hero Banner */}
      <section
        className="relative h-80 bg-cover bg-center bg-no-repeat overflow-hidden "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=400&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        {/* Floating Elements */}
        <div className="absolute top-10 left-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-primary/20 rounded-full blur-md animate-pulse delay-1000"></div>

        <div className="relative container mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Shop
            </h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto text-white/90">
              Discover our complete collection of premium furniture and home
              accessories
            </p>
            <nav className="text-sm">
              <Link
                href="/"
                className="hover:underline text-white/80 hover:text-white transition-colors"
              >
                Home
              </Link>
              <span className="mx-2 text-white/60">›</span>
              <span className="text-white">Shop</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Search & Quick Filters */}
      <section className="border-b border-border bg-gradient-to-r from-secondary/10 to-secondary/5">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border shadow-sm"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>

            {/* Quick Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-border bg-card/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <span className="text-foreground font-medium">
                {filteredProducts.length} of {products.length} products
              </span>
              {(selectedCategory !== "All" ||
                searchQuery ||
                filters.onSale ||
                filters.newArrivals) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-primary"
                >
                  Clear filters
                </Button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Show:</span>
                <Select defaultValue="16">
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="16">16</SelectItem>
                    <SelectItem value="32">32</SelectItem>
                    <SelectItem value="48">48</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center border border-border rounded-lg bg-background">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block w-full lg:w-80 space-y-6`}
          >
            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4 text-lg">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const count =
                    category === "All"
                      ? products.length
                      : products.filter((p) => p.category === category).length;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex justify-between items-center w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      <span className="font-medium">{category}</span>
                      <span className="text-sm">({count})</span>
                    </button>
                  );
                })}
              </div>
            </Card>

            {/* Filter By Price Range */}
            <FilterByPrice
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              formatPrice={formatPrice}
            />

            {/* Filter By Sale, Arrival & Shipping */}
            <FilterBySale filters={filters} setFilters={setFilters} />

            {/* Filter By Rating */}
            <FilterByRating filters={filters} setFilters={setFilters} />
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {filteredProducts.length > 0 ? (
              <>
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
                      : "space-y-6"
                  }
                >
                  {filteredProducts.map((product) => (
                    <ProductGridCard
                      product={product}
                      viewMode={viewMode}
                      formatPrice={formatPrice}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination />
              </>
            ) : (
              <div className="text-center py-20">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  No Products Found
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  We couldn't find any products matching your current filters.
                  Try adjusting your search criteria.
                </p>
                <Button onClick={clearFilters} className="shadow-lg">
                  Clear All Filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Features Section */}
      <CustomerSupport />
    </div>
  );
}
