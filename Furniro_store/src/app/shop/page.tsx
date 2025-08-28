"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { categories, products } from "@/lib/mockDataProduct";
import CustomerSupport from "@/components/CustomerSupport";
import Pagination from "@/components/(Shared)/Pagination";
import ProductGridCard from "@/components/(Product)/ProductGridCard";
import FilterByRating from "@/components/(Sidebar-Filters)/FilterByRating";
import FilterBySale from "@/components/(Sidebar-Filters)/FilterBySale";
import FilterByPrice from "@/components/(Sidebar-Filters)/FilterByPrice";
import FilterByCategory from "@/components/(Sidebar-Filters)/FilterByCategory";
import ViewMode from "@/components/(Topbar-Filters)/ViewModeFilter";
import SortBy from "@/components/(Topbar-Filters)/SortByFilter";
import ClearFilter from "@/components/(Topbar-Filters)/ClearFilter";
import QuickCategory from "@/components/(Topbar-Filters)/QuickCategoryFilter";
import SearchFilter from "@/components/(Topbar-Filters)/SearchFilter";
import FloatingWindow from "@/components/FloatingWindow";
import { Search } from "lucide-react";

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
        className="relative h-96 bg-cover bg-center bg-no-repeat overflow-hidden "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=400&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        {/* Floating Elements */}
        <div className="absolute top-10 left-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-primary/20 rounded-full blur-md animate-pulse delay-1000"></div>

        {/* Floating Window Component */}
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
            <span className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-md text-white rounded-full text-sm font-semibold uppercase tracking-wider border border-white/20 mb-2">
               Shop From the Best
            </span>

            <FloatingWindow
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Shop", href: "/shop" },
              ]}
              description=" Discover our complete collection of premium furniture and home accessories"
            />
          </div>
        </div>
      </section>

      {/* Search & Quick Filters */}
      <section className="border-b border-border bg-gradient-to-r from-secondary/10 to-secondary/5">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <SearchFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            {/* Quick Category Filters */}
            <QuickCategory
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-border bg-card/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            {/* Clear Filter */}
            <ClearFilter
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              products={products}
              filteredProducts={filteredProducts}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              filters={filters}
              clearFilters={clearFilters}
            />

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
              {/* Filter by sorting */}
              <SortBy sortBy={sortBy} setSortBy={setSortBy} />
              {/* Change Product ViewMode */}
              <ViewMode viewMode={viewMode} setViewMode={setViewMode} />
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
            {/* Filter By Category */}
            <FilterByCategory
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

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
                      key={product.id}
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
                  We couldn&apos;t find any products matching your current
                  filters. Try adjusting your search criteria.
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
