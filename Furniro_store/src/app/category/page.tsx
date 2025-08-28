"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import CustomerSupport from "@/components/(Category)/CustomerSupport";
import Pagination2 from "@/components/(Shared)/Pagination2";
import { ProductData, CategoryData } from "@/lib/mockCategoriesData";
import {
  Grid,
  List,
  Search,
  X,
  SlidersHorizontal,
  Eye,
  TrendingUp,
} from "lucide-react";
import PaginatedProductsCard from "@/components/(Category)/PaginatedProductsCard";
import SidebarFilters from "@/components/(Category)/SidebarFilters";
import FloatingWindow from "@/components/FloatingWindow";

export default function Category() {
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 15000000]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  const [filters, setFilters] = useState({
    onSale: false,
    newArrivals: false,
    bestsellers: false,
    rating: 0,
  });

  const formatPrice = (price: number) => {
    return `PKR ${price.toLocaleString()}`;
  };

  // Calculate maximum price for slider
  const maxPrice = Math.max(
    ...ProductData.map((product) => product.price),
    15000000
  );

  // Filter and sort products
  const filteredProducts = ProductData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesFilters =
      (!filters.onSale || product.isOnSale) &&
      (!filters.newArrivals || product.isNew) &&
      (!filters.bestsellers || product.isBestseller) &&
      (!filters.rating || product.rating >= filters.rating);

    return matchesSearch && matchesPrice && matchesFilters;
  }).sort((a, b) => {
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
      case "popular":
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, priceRange, filters]);

  const clearFilters = () => {
    setFilters({
      onSale: false,
      newArrivals: false,
      bestsellers: false,
      rating: 0,
    });
    setPriceRange([0, maxPrice]);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    filters.onSale ||
    filters.newArrivals ||
    filters.bestsellers ||
    filters.rating > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < maxPrice ||
    searchQuery;

  if (!CategoryData) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-md mx-auto">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Category Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The category you&apos;re looking for doesn&apos;t exist. Explore
              our other collections.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link href="/shop">Browse All Products</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Go Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=600&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute top-16 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-24 h-24 bg-secondary/30 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
            <span className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-md text-white rounded-full text-sm font-semibold uppercase tracking-wider border border-white/20 mb-2">
              Premium Home Collection
            </span>

            <FloatingWindow
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Category", href: "/category" },
              ]}
              description=" Discover premium furniture, lighting, and decor crafted with
              exceptional quality and style"
            />
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-16 bg-gradient-to-r from-secondary/20 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collections of furniture, lighting, decor, and
              textiles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from(
              new Map(CategoryData.map((item) => [item, item])).values()
            ).map((category) => (
              <Link
                key={category.title}
                href={`/category/${category.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <Card className="overflow-hidden border-0">
                  <CardContent className="p-0 relative">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-xl">{category.title}</h3>
                      {/* <div className="w-full flex gap-20 font-bold"> */}
                      <h3 className="text-nowrap">
                        {category.totalProducts}+ Products
                      </h3>
                      {/* </div> */}
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <Eye className="h-5 w-5 text-white" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Quick Filters */}
      <section className="border-b border-border bg-card/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 py-3 bg-background border-border shadow-sm text-lg"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                variant={filters.bestsellers ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setFilters({ ...filters, bestsellers: !filters.bestsellers })
                }
                className="rounded-full"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Bestsellers
              </Button>
              <Button
                variant={filters.newArrivals ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setFilters({ ...filters, newArrivals: !filters.newArrivals })
                }
                className="rounded-full"
              >
                New Arrivals
              </Button>
              <Button
                variant={filters.onSale ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setFilters({ ...filters, onSale: !filters.onSale })
                }
                className="rounded-full"
              >
                On Sale
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <span className="text-foreground font-medium">
                {filteredProducts.length} of {CategoryData.length} products
              </span>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-primary"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear filters
                </Button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Show:</span>
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={(value) => {
                    setItemsPerPage(Number(value));
                    setCurrentPage(1);
                  }}
                >
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="48">48</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-44">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Featured</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
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
        <div className="flex gap-12">
          {/* Sidebar Filters */}
          <aside
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block w-full lg:w-80 space-y-6`}
          >
            <SidebarFilters
              filters={filters}
              formatPrice={formatPrice}
              maxPrice={maxPrice}
              priceRange={priceRange}
              setFilters={setFilters}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {paginatedProducts.length > 0 ? (
              <>
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                      : "space-y-6"
                  }
                >
                  {paginatedProducts.map((product) => (
                    <PaginatedProductsCard
                      product={product}
                      viewMode={viewMode}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination2
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />
              </>
            ) : (
              <div className="text-center py-20">
                <Search className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">
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
