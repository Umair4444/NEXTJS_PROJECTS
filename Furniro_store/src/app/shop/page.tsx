"use client"
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Filter, Grid, List, Heart, ShoppingCart, Search, X, Star, Award, Truck, Shield } from "lucide-react";

// Extended product data
const products = [
  {
    id: "1",
    name: "Syltherine",
    category: "Chair",
    price: 2500000,
    originalPrice: 3500000,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
    description: "Stylish cafe chair with premium comfort",
    isNew: false,
    isOnSale: true,
    discount: 30,
    rating: 4.5,
    reviews: 128
  },
  {
    id: "2",
    name: "Leviosa",
    category: "Chair",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop",
    description: "Stylish cafe chair with modern design",
    isNew: false,
    isOnSale: false,
    rating: 4.3,
    reviews: 86
  },
  {
    id: "3",
    name: "Lolito",
    category: "Sofa",
    price: 7000000,
    originalPrice: 14000000,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",
    description: "Luxury big sofa for ultimate comfort",
    isNew: false,
    isOnSale: true,
    discount: 50,
    rating: 4.8,
    reviews: 203
  },
  {
    id: "4",
    name: "Respira",
    category: "Table",
    price: 500000,
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=300&fit=crop",
    description: "Outdoor bar table and stool set",
    isNew: true,
    isOnSale: false,
    rating: 4.6,
    reviews: 45
  },
  {
    id: "5",
    name: "Grifo",
    category: "Lighting",
    price: 1500000,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop",
    description: "Modern night lamp with ambient lighting",
    isNew: false,
    isOnSale: false,
    rating: 4.4,
    reviews: 67
  },
  {
    id: "6",
    name: "Muggo",
    category: "Accessories",
    price: 150000,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    description: "Premium ceramic coffee mug",
    isNew: true,
    isOnSale: false,
    rating: 4.2,
    reviews: 34
  },
  {
    id: "7",
    name: "Pingky",
    category: "Bed",
    price: 7000000,
    originalPrice: 14000000,
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=300&fit=crop",
    description: "Complete bedroom set with storage",
    isNew: false,
    isOnSale: true,
    discount: 50,
    rating: 4.7,
    reviews: 156
  },
  {
    id: "8",
    name: "Potty",
    category: "Accessories",
    price: 500000,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    description: "Minimalist ceramic flower pot collection",
    isNew: true,
    isOnSale: false,
    rating: 4.1,
    reviews: 28
  }
];

const categories = ["All", "Chair", "Sofa", "Table", "Lighting", "Bed", "Accessories"];

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
    rating: 0
  });

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilters = (!filters.onSale || product.isOnSale) &&
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
    return `Rp ${price.toLocaleString()}`;
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setPriceRange([0, 15000000]);
    setFilters({ onSale: false, newArrivals: false, freeShipping: false, rating: 0 });
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-80 bg-cover bg-center bg-no-repeat overflow-hidden"
               style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=400&fit=crop')"
               }}>
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-20 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Shop
            </h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto text-white/90">
              Discover our complete collection of premium furniture and home accessories
            </p>
            <nav className="text-sm">
              <Link href="/" className="hover:underline text-white/80 hover:text-white transition-colors">Home</Link>
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
              {categories.slice(0, 5).map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
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
              {(selectedCategory !== "All" || searchQuery || filters.onSale || filters.newArrivals) && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-primary">
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
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
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
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 space-y-6`}>
            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4 text-lg">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => {
                  const count = category === "All" ? products.length : products.filter(p => p.category === category).length;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex justify-between items-center w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <span className="font-medium">{category}</span>
                      <span className="text-sm">({count})</span>
                    </button>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4 text-lg">Price Range</h3>
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={15000000}
                  step={100000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{formatPrice(priceRange[0])}</span>
                  <span className="font-medium">{formatPrice(priceRange[1])}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4 text-lg">Filters</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="onSale"
                    checked={filters.onSale}
                    onCheckedChange={(checked) => setFilters({...filters, onSale: checked as boolean})}
                  />
                  <label htmlFor="onSale" className="text-sm font-medium">On Sale</label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="newArrivals"
                    checked={filters.newArrivals}
                    onCheckedChange={(checked) => setFilters({...filters, newArrivals: checked as boolean})}
                  />
                  <label htmlFor="newArrivals" className="text-sm font-medium">New Arrivals</label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="freeShipping"
                    checked={filters.freeShipping}
                    onCheckedChange={(checked) => setFilters({...filters, freeShipping: checked as boolean})}
                  />
                  <label htmlFor="freeShipping" className="text-sm font-medium">Free Shipping</label>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4 text-lg">Minimum Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map(rating => (
                  <button
                    key={rating}
                    onClick={() => setFilters({...filters, rating: filters.rating === rating ? 0 : rating})}
                    className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition-colors ${
                      filters.rating === rating ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm">& up</span>
                  </button>
                ))}
              </div>
            </Card>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {filteredProducts.length > 0 ? (
              <>
                <div className={
                  viewMode === "grid" 
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
                    : "space-y-6"
                }>
                  {filteredProducts.map(product => (
                    <Card key={product.id} className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-b from-card to-card/50">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                              viewMode === "grid" ? "h-64" : "h-48"
                            }`}
                          />
                          
                          {/* Badges */}
                          <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {product.isNew && (
                              <Badge className="bg-green-500 text-white shadow-lg">NEW</Badge>
                            )}
                            {product.isOnSale && (
                              <Badge className="bg-red-500 text-white shadow-lg">-{product.discount}%</Badge>
                            )}
                          </div>

                          {/* Rating */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-medium">{product.rating}</span>
                          </div>

                          {/* Action Buttons */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="flex gap-3">
                              <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full shadow-lg">
                                <Heart className="h-4 w-4" />
                              </Button>
                              <Button size="sm" className="shadow-lg">
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 space-y-3">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs font-medium">
                              {product.category}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>({product.reviews})</span>
                            </div>
                          </div>
                          
                          <Link href={`/shop/${product.id}`}>
                            <h3 className="font-bold text-foreground hover:text-primary transition-colors text-lg">
                              {product.name}
                            </h3>
                          </Link>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                          
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-foreground text-lg">
                                {formatPrice(product.price)}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">
                                  {formatPrice(product.originalPrice)}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-3 mt-16">
                  <Button variant="outline" size="sm" className="shadow-sm">Previous</Button>
                  <Button variant="default" size="sm" className="shadow-sm">1</Button>
                  <Button variant="outline" size="sm" className="shadow-sm">2</Button>
                  <Button variant="outline" size="sm" className="shadow-sm">3</Button>
                  <Button variant="outline" size="sm" className="shadow-sm">Next</Button>
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">No Products Found</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  We couldn't find any products matching your current filters. Try adjusting your search criteria.
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
      <section className="py-20 bg-gradient-to-r from-secondary/20 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">High Quality</h3>
                <p className="text-sm text-muted-foreground">Crafted from top materials</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Warranty Protection</h3>
                <p className="text-sm text-muted-foreground">Over 2 years coverage</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Dedicated customer service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
