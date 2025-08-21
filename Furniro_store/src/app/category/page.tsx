"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/(Shared)/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Filter,
  Grid,
  List,
  Heart,
  ShoppingCart,
  Search,
  X,
  Star,
  SlidersHorizontal,
  Eye,
  TrendingUp,
  Award,
  Truck,
  Shield,
  Users,
} from "lucide-react";

// Define TypeScript interfaces
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  isOnSale?: boolean;
  discount?: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface Category {
  title: string;
  description: string;
  image: string;
  totalProducts: number;
  products: Product[];
}

interface CategoryData {
  [key: string]: Category;
}

// Enhanced category data with more products and features
const categoryData = {
  furniture: {
    title: "Furniture",
    description:
      "Discover our premium furniture collection featuring chairs, tables, sofas, and more crafted with exceptional quality",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=600&fit=crop",
    totalProducts: 120,
    products: [
      {
        id: "1",
        name: "Syltherine Premium Chair",
        category: "Chair",
        price: 2500000,
        originalPrice: 3500000,
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
        description: "Premium oak chair with luxury fabric upholstery",
        isOnSale: true,
        discount: 30,
        rating: 4.8,
        reviews: 342,
        isNew: false,
        isBestseller: true,
      },
      {
        id: "2",
        name: "Leviosa Modern Chair",
        category: "Chair",
        price: 2500000,
        image:
          "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop",
        description: "Sleek modern chair for contemporary spaces",
        isOnSale: false,
        rating: 4.3,
        reviews: 186,
        isNew: false,
        isBestseller: false,
      },
      {
        id: "3",
        name: "Lolito Luxury Sofa",
        category: "Sofa",
        price: 7000000,
        originalPrice: 14000000,
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
        description: "Spacious luxury sofa perfect for family gatherings",
        isOnSale: true,
        discount: 50,
        rating: 4.7,
        reviews: 203,
        isNew: false,
        isBestseller: true,
      },
      {
        id: "4",
        name: "Respira Outdoor Table",
        category: "Table",
        price: 500000,
        image:
          "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop",
        description: "Weather-resistant outdoor dining table set",
        isOnSale: false,
        isNew: true,
        rating: 4.5,
        reviews: 45,
        isBestseller: false,
      },
      {
        id: "10",
        name: "Nordic Dining Table",
        category: "Table",
        price: 3200000,
        image:
          "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop",
        description: "Scandinavian-inspired solid wood dining table",
        isOnSale: false,
        rating: 4.6,
        reviews: 128,
        isNew: false,
        isBestseller: true,
      },
      {
        id: "11",
        name: "Comfort Lounge Sofa",
        category: "Sofa",
        price: 5800000,
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
        description: "Ultra-comfortable sectional sofa with premium cushions",
        isOnSale: false,
        rating: 4.4,
        reviews: 92,
        isNew: true,
        isBestseller: false,
      },
    ],
  },
  lighting: {
    title: "Lighting",
    description:
      "Illuminate your space with our carefully curated lighting collection featuring modern designs and energy-efficient solutions",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1920&h=600&fit=crop",
    totalProducts: 80,
    products: [
      {
        id: "5",
        name: "Grifo Designer Lamp",
        category: "Table Lamp",
        price: 1500000,
        image:
          "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
        description:
          "Minimalist designer table lamp with adjustable brightness",
        rating: 4.6,
        reviews: 67,
        isNew: false,
        isBestseller: true,
      },
      {
        id: "9",
        name: "Aurora Ceiling Light",
        category: "Ceiling Light",
        price: 2200000,
        image:
          "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
        description: "Modern LED ceiling light with smart controls",
        isNew: true,
        rating: 4.5,
        reviews: 23,
        isBestseller: false,
      },
    ],
  },
  "home-decor": {
    title: "Home Decor",
    description:
      "Beautiful decorative pieces to personalize your living space with style and sophistication",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=600&fit=crop",
    totalProducts: 200,
    products: [
      {
        id: "6",
        name: "Artisan Coffee Mug",
        category: "Accessories",
        price: 150000,
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
        description: "Handcrafted ceramic coffee mug with unique patterns",
        isNew: true,
        rating: 4.2,
        reviews: 34,
        isBestseller: false,
      },
      {
        id: "8",
        name: "Zen Flower Pot Collection",
        category: "Accessories",
        price: 500000,
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
        description: "Set of 3 minimalist ceramic planters",
        isNew: true,
        rating: 4.1,
        reviews: 28,
        isBestseller: false,
      },
    ],
  },
  textiles: {
    title: "Textiles",
    description:
      "Soft furnishings and premium textiles to add comfort, warmth, and style to your home",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=600&fit=crop",
    totalProducts: 150,
    products: [
      {
        id: "7",
        name: "Luxe Bedding Set",
        category: "Bedding",
        price: 7000000,
        originalPrice: 14000000,
        image:
          "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop",
        description: "Premium cotton bedding set with matching accessories",
        isOnSale: true,
        discount: 50,
        rating: 4.7,
        reviews: 156,
        isNew: false,
        isBestseller: true,
      },
    ],
  },
};

export default function Category() {
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 15000000]);
  const [filters, setFilters] = useState({
    onSale: false,
    newArrivals: false,
    bestsellers: false,
    rating: 0,
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  // Aggregate all products from all categories
  const allProducts: Product[] = Object.values(categoryData).flatMap(
    (category) => category.products
  );

  // Calculate maximum price for slider
  const maxPrice = Math.max(
    ...allProducts.map((product) => product.price),
    15000000
  );

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-md mx-auto">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Category Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The category you&apos;re looking for doesn&apos;t exist. Explore our other
              collections.
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

  // Filter and sort products
  const filteredProducts = allProducts
    .filter((product) => {
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

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString()}`;
  };

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

  // return (
  //   <div className="min-h-screen bg-background">
  //     <Header />

  //     {/* Hero Banner */}
  //     <section
  //       className="relative h-96 bg-cover bg-center bg-no-repeat overflow-hidden"
  //       style={{
  //         backgroundImage: `url('${currentCategory.image}')`,
  //       }}
  //     >
  //       <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

  //       {/* Floating Elements */}
  //       <div className="absolute top-16 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
  //       <div className="absolute bottom-20 left-16 w-24 h-24 bg-secondary/30 rounded-full blur-2xl animate-pulse delay-1000"></div>

  //       <div className="relative container mx-auto px-6 h-full flex items-center">
  //         <div className="max-w-2xl">
  //           <span className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-md text-white rounded-full text-sm font-semibold uppercase tracking-wider border border-white/20 mb-6">
  //             {currentCategory.title} Collection
  //           </span>
  //           <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
  //             {currentCategory.title}
  //           </h1>
  //           <p className="text-xl mb-8 text-white/90 leading-relaxed">
  //             {currentCategory.description}
  //           </p>
  //           <div className="flex items-center gap-6 mb-6">
  //             <div className="text-center">
  //               <div className="text-2xl font-bold text-white">
  //                 {currentCategory.totalProducts}+
  //               </div>
  //               <div className="text-sm text-white/80">Products</div>
  //             </div>
  //             <div className="text-center">
  //               <div className="text-2xl font-bold text-white">4.6★</div>
  //               <div className="text-sm text-white/80">Avg Rating</div>
  //             </div>
  //             <div className="text-center">
  //               <div className="text-2xl font-bold text-white">Free</div>
  //               <div className="text-sm text-white/80">Shipping</div>
  //             </div>
  //           </div>
  //           <nav className="text-sm text-white/80">
  //             <Link href="/" className="hover:text-white transition-colors">
  //               Home
  //             </Link>
  //             <span className="mx-2">›</span>
  //             <Link href="/shop" className="hover:text-white transition-colors">
  //               Shop
  //             </Link>
  //             <span className="mx-2">›</span>
  //             <span className="text-white font-medium">
  //               {currentCategory.title}
  //             </span>
  //           </nav>
  //         </div>
  //       </div>
  //     </section>

  //     {/* Category Navigation */}
  //     <section className="border-b border-border bg-gradient-to-r from-secondary/20 to-secondary/5">
  //       <div className="container mx-auto px-6 py-8">
  //         <div className="flex flex-wrap gap-4 justify-center">
  //           {Object.entries(categoryData).map(([key, data]) => (
  //             <Link
  //               key={key}
  //               href={`/category/${key}`}
  //               className={`group px-8 py-4 rounded-full border-2 transition-all duration-300 font-medium ${
  //                 category === key
  //                   ? "border-primary bg-primary text-primary-foreground shadow-lg scale-105"
  //                   : "border-border bg-background text-foreground hover:border-primary hover:text-primary hover:shadow-md hover:scale-102"
  //               }`}
  //             >
  //               <div className="flex items-center gap-2">
  //                 <span>{data.title}</span>
  //                 <Badge variant="secondary" className="text-xs">
  //                   {data.totalProducts}+
  //                 </Badge>
  //               </div>
  //             </Link>
  //           ))}
  //         </div>
  //       </div>
  //     </section>

  //     {/* Search & Quick Filters */}
  //     <section className="border-b border-border bg-card/30">
  //       <div className="container mx-auto px-6 py-6">
  //         <div className="flex flex-col lg:flex-row gap-6 items-center">
  //           {/* Search */}
  //           <div className="relative flex-1 max-w-md">
  //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
  //             <Input
  //               type="search"
  //               placeholder="Search products..."
  //               value={searchQuery}
  //               onChange={(e) => setSearchQuery(e.target.value)}
  //               className="pl-10 pr-10 py-3 bg-background border-border shadow-sm text-lg"
  //             />
  //             {searchQuery && (
  //               <Button
  //                 variant="ghost"
  //                 size="sm"
  //                 onClick={() => setSearchQuery("")}
  //                 className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
  //               >
  //                 <X className="h-4 w-4" />
  //               </Button>
  //             )}
  //           </div>

  //           {/* Quick Filters */}
  //           <div className="flex flex-wrap gap-3">
  //             <Button
  //               variant={filters.bestsellers ? "default" : "outline"}
  //               size="sm"
  //               onClick={() =>
  //                 setFilters({ ...filters, bestsellers: !filters.bestsellers })
  //               }
  //               className="rounded-full"
  //             >
  //               <TrendingUp className="h-4 w-4 mr-2" />
  //               Bestsellers
  //             </Button>
  //             <Button
  //               variant={filters.newArrivals ? "default" : "outline"}
  //               size="sm"
  //               onClick={() =>
  //                 setFilters({ ...filters, newArrivals: !filters.newArrivals })
  //               }
  //               className="rounded-full"
  //             >
  //               New Arrivals
  //             </Button>
  //             <Button
  //               variant={filters.onSale ? "default" : "outline"}
  //               size="sm"
  //               onClick={() =>
  //                 setFilters({ ...filters, onSale: !filters.onSale })
  //               }
  //               className="rounded-full"
  //             >
  //               On Sale
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     {/* Filter Bar */}
  //     <section className="border-b border-border bg-background">
  //       <div className="container mx-auto px-6 py-4">
  //         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
  //           <div className="flex items-center gap-4">
  //             <Button
  //               variant="outline"
  //               size="sm"
  //               onClick={() => setShowFilters(!showFilters)}
  //               className="lg:hidden"
  //             >
  //               <SlidersHorizontal className="h-4 w-4 mr-2" />
  //               Filters
  //             </Button>
  //             <span className="text-foreground font-medium">
  //               {filteredProducts.length} of {currentCategory.products.length}{" "}
  //               products
  //             </span>
  //             {hasActiveFilters && (
  //               <Button
  //                 variant="ghost"
  //                 size="sm"
  //                 onClick={clearFilters}
  //                 className="text-primary"
  //               >
  //                 <X className="h-4 w-4 mr-1" />
  //                 Clear filters
  //               </Button>
  //             )}
  //           </div>

  //           <div className="flex items-center gap-4">
  //             <div className="flex items-center gap-2">
  //               <span className="text-sm text-muted-foreground">Show:</span>
  //               <Select defaultValue="12">
  //                 <SelectTrigger className="w-20">
  //                   <SelectValue />
  //                 </SelectTrigger>
  //                 <SelectContent>
  //                   <SelectItem value="12">12</SelectItem>
  //                   <SelectItem value="24">24</SelectItem>
  //                   <SelectItem value="48">48</SelectItem>
  //                 </SelectContent>
  //               </Select>
  //             </div>

  //             <div className="flex items-center gap-2">
  //               <span className="text-sm text-muted-foreground">Sort by:</span>
  //               <Select value={sortBy} onValueChange={setSortBy}>
  //                 <SelectTrigger className="w-44">
  //                   <SelectValue />
  //                 </SelectTrigger>
  //                 <SelectContent>
  //                   <SelectItem value="default">Featured</SelectItem>
  //                   <SelectItem value="price-low">
  //                     Price: Low to High
  //                   </SelectItem>
  //                   <SelectItem value="price-high">
  //                     Price: High to Low
  //                   </SelectItem>
  //                   <SelectItem value="name">Name A-Z</SelectItem>
  //                   <SelectItem value="rating">Highest Rated</SelectItem>
  //                   <SelectItem value="newest">Newest First</SelectItem>
  //                   <SelectItem value="popular">Most Popular</SelectItem>
  //                 </SelectContent>
  //               </Select>
  //             </div>

  //             <div className="flex items-center border border-border rounded-lg bg-background">
  //               <Button
  //                 variant={viewMode === "grid" ? "default" : "ghost"}
  //                 size="sm"
  //                 onClick={() => setViewMode("grid")}
  //                 className="rounded-r-none"
  //               >
  //                 <Grid className="h-4 w-4" />
  //               </Button>
  //               <Button
  //                 variant={viewMode === "list" ? "default" : "ghost"}
  //                 size="sm"
  //                 onClick={() => setViewMode("list")}
  //                 className="rounded-l-none"
  //               >
  //                 <List className="h-4 w-4" />
  //               </Button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     <div className="container mx-auto px-6 py-12">
  //       <div className="flex gap-12">
  //         {/* Sidebar Filters */}
  //         <aside
  //           className={`${
  //             showFilters ? "block" : "hidden"
  //           } lg:block w-full lg:w-80 space-y-6`}
  //         >
  //           <Card className="p-6 shadow-lg">
  //             <h3 className="font-bold text-foreground mb-6 text-xl flex items-center gap-2">
  //               <Filter className="h-5 w-5" />
  //               Filters
  //             </h3>

  //             {/* Price Range */}
  //             <div className="space-y-4 mb-6">
  //               <h4 className="font-semibold text-foreground">Price Range</h4>
  //               <Slider
  //                 value={priceRange}
  //                 onValueChange={setPriceRange}
  //                 max={15000000}
  //                 step={100000}
  //                 className="w-full"
  //               />
  //               <div className="flex justify-between text-sm">
  //                 <span className="font-medium">
  //                   {formatPrice(priceRange[0])}
  //                 </span>
  //                 <span className="font-medium">
  //                   {formatPrice(priceRange[1])}
  //                 </span>
  //               </div>
  //             </div>

  //             <Separator className="my-6" />

  //             {/* Filter Options */}
  //             <div className="space-y-4">
  //               <h4 className="font-semibold text-foreground">Product Type</h4>
  //               <div className="space-y-3">
  //                 <div className="flex items-center space-x-3">
  //                   <Checkbox
  //                     id="onSale"
  //                     checked={filters.onSale}
  //                     onCheckedChange={(checked) =>
  //                       setFilters({ ...filters, onSale: checked as boolean })
  //                     }
  //                   />
  //                   <label
  //                     htmlFor="onSale"
  //                     className="text-sm font-medium flex items-center gap-2"
  //                   >
  //                     On Sale
  //                     <Badge variant="destructive" className="text-xs">
  //                       Save up to 50%
  //                     </Badge>
  //                   </label>
  //                 </div>
  //                 <div className="flex items-center space-x-3">
  //                   <Checkbox
  //                     id="newArrivals"
  //                     checked={filters.newArrivals}
  //                     onCheckedChange={(checked) =>
  //                       setFilters({
  //                         ...filters,
  //                         newArrivals: checked as boolean,
  //                       })
  //                     }
  //                   />
  //                   <label
  //                     htmlFor="newArrivals"
  //                     className="text-sm font-medium flex items-center gap-2"
  //                   >
  //                     New Arrivals
  //                     <Badge className="bg-green-500 text-xs">Latest</Badge>
  //                   </label>
  //                 </div>
  //                 <div className="flex items-center space-x-3">
  //                   <Checkbox
  //                     id="bestsellers"
  //                     checked={filters.bestsellers}
  //                     onCheckedChange={(checked) =>
  //                       setFilters({
  //                         ...filters,
  //                         bestsellers: checked as boolean,
  //                       })
  //                     }
  //                   />
  //                   <label
  //                     htmlFor="bestsellers"
  //                     className="text-sm font-medium flex items-center gap-2"
  //                   >
  //                     Bestsellers
  //                     <Badge className="bg-orange-500 text-xs">Popular</Badge>
  //                   </label>
  //                 </div>
  //               </div>
  //             </div>

  //             <Separator className="my-6" />

  //             {/* Rating Filter */}
  //             <div className="space-y-4">
  //               <h4 className="font-semibold text-foreground">
  //                 Minimum Rating
  //               </h4>
  //               <div className="space-y-2">
  //                 {[5, 4, 3, 2, 1].map((rating) => (
  //                   <button
  //                     key={rating}
  //                     onClick={() =>
  //                       setFilters({
  //                         ...filters,
  //                         rating: filters.rating === rating ? 0 : rating,
  //                       })
  //                     }
  //                     className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-all duration-200 ${
  //                       filters.rating === rating
  //                         ? "bg-primary/10 text-primary border border-primary"
  //                         : "hover:bg-muted border border-transparent"
  //                     }`}
  //                   >
  //                     <div className="flex items-center">
  //                       {[...Array(5)].map((_, i) => (
  //                         <Star
  //                           key={i}
  //                           className={`h-4 w-4 ${
  //                             i < rating
  //                               ? "fill-yellow-400 text-yellow-400"
  //                               : "text-muted-foreground"
  //                           }`}
  //                         />
  //                       ))}
  //                     </div>
  //                     <span className="text-sm font-medium">& up</span>
  //                   </button>
  //                 ))}
  //               </div>
  //             </div>
  //           </Card>
  //         </aside>

  //         {/* Product Grid */}
  //         <main className="flex-1">
  //           {filteredProducts.length > 0 ? (
  //             <>
  //               <div
  //                 className={
  //                   viewMode === "grid"
  //                     ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
  //                     : "space-y-6"
  //                 }
  //               >
  //                 {filteredProducts.map((product) => (
  //                   <Card
  //                     key={product.id}
  //                     className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-b from-card to-card/50"
  //                   >
  //                     <CardContent className="p-0">
  //                       <div className="relative overflow-hidden">
  //                         <img
  //                           src={product.image}
  //                           alt={product.name}
  //                           className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
  //                             viewMode === "grid" ? "h-64" : "h-48"
  //                           }`}
  //                         />

  //                         {/* Badges */}
  //                         <div className="absolute top-4 left-4 flex flex-col gap-2">
  //                           {product.isNew && (
  //                             <Badge className="bg-green-500 text-white shadow-lg">
  //                               NEW
  //                             </Badge>
  //                           )}
  //                           {product?.isOnSale && (
  //                             <Badge className="bg-red-500 text-white shadow-lg">
  //                               -{product.discount}%
  //                             </Badge>
  //                           )}
  //                           {product.isBestseller && (
  //                             <Badge className="bg-orange-500 text-white shadow-lg">
  //                               BESTSELLER
  //                             </Badge>
  //                           )}
  //                         </div>

  //                         {/* Rating & Reviews */}
  //                         <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
  //                           <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
  //                           <span className="text-xs font-medium">
  //                             {product.rating}
  //                           </span>
  //                           <span className="text-xs text-muted-foreground">
  //                             ({product.reviews})
  //                           </span>
  //                         </div>

  //                         {/* Action Buttons */}
  //                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
  //                           <div className="flex gap-3">
  //                             <Button
  //                               variant="secondary"
  //                               size="icon"
  //                               className="h-12 w-12 rounded-full shadow-lg"
  //                             >
  //                               <Heart className="h-5 w-5" />
  //                             </Button>
  //                             <Button size="sm" className="shadow-lg px-6">
  //                               <Eye className="h-4 w-4 mr-2" />
  //                               Quick View
  //                             </Button>
  //                             <Button
  //                               variant="secondary"
  //                               size="icon"
  //                               className="h-12 w-12 rounded-full shadow-lg"
  //                             >
  //                               <ShoppingCart className="h-5 w-5" />
  //                             </Button>
  //                           </div>
  //                         </div>
  //                       </div>

  //                       <div className="p-6 space-y-4">
  //                         <div className="flex items-center justify-between">
  //                           <Badge
  //                             variant="outline"
  //                             className="text-xs font-medium border-primary text-primary"
  //                           >
  //                             {product.category}
  //                           </Badge>
  //                           <div className="flex items-center gap-1 text-xs text-muted-foreground">
  //                             <Users className="h-3 w-3" />
  //                             <span>{product.reviews} reviews</span>
  //                           </div>
  //                         </div>

  //                         <Link href={`/product/${product.id}`}>
  //                           <h3 className="font-bold text-foreground hover:text-primary transition-colors text-xl leading-tight">
  //                             {product.name}
  //                           </h3>
  //                         </Link>

  //                         <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
  //                           {product.description}
  //                         </p>

  //                         <div className="flex items-center justify-between pt-2">
  //                           <div className="flex items-center gap-2">
  //                             <span className="font-bold text-foreground text-xl">
  //                               {formatPrice(product.price)}
  //                             </span>
  //                             {product.originalPrice && (
  //                               <span className="text-sm text-muted-foreground line-through">
  //                                 {formatPrice(product.originalPrice)}
  //                               </span>
  //                             )}
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </CardContent>
  //                   </Card>
  //                 ))}
  //               </div>

  //               {/* Pagination */}
  //               <div className="flex justify-center items-center gap-3 mt-16">
  //                 <Button variant="outline" size="sm" className="shadow-sm">
  //                   Previous
  //                 </Button>
  //                 <Button variant="default" size="sm" className="shadow-sm">
  //                   1
  //                 </Button>
  //                 <Button variant="outline" size="sm" className="shadow-sm">
  //                   2
  //                 </Button>
  //                 <Button variant="outline" size="sm" className="shadow-sm">
  //                   3
  //                 </Button>
  //                 <Button variant="outline" size="sm" className="shadow-sm">
  //                   Next
  //                 </Button>
  //               </div>
  //             </>
  //           ) : (
  //             <div className="text-center py-20">
  //               <Search className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
  //               <h3 className="text-3xl font-bold text-foreground mb-4">
  //                 No Products Found
  //               </h3>
  //               <p className="text-muted-foreground mb-8 max-w-md mx-auto">
  //                 We couldn't find any products matching your current filters.
  //                 Try adjusting your search criteria.
  //               </p>
  //               <Button onClick={clearFilters} className="shadow-lg">
  //                 Clear All Filters
  //               </Button>
  //             </div>
  //           )}
  //         </main>
  //       </div>
  //     </div>

  //     {/* Related Categories */}
  //     <section className="py-24 bg-gradient-to-r from-secondary/20 to-secondary/5">
  //       <div className="container mx-auto px-6">
  //         <div className="text-center mb-16">
  //           <h2 className="text-4xl font-bold text-foreground mb-6">
  //             Explore Other Collections
  //           </h2>
  //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
  //             Discover more beautiful pieces from our carefully curated
  //             collections
  //           </p>
  //         </div>

  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  //           {Object.entries(categoryData)
  //             .filter(([key]) => key !== category)
  //             .slice(0, 3)
  //             .map(([key, data]) => (
  //               <Link
  //                 key={key}
  //                 href={`/category/${key}`}
  //                 className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
  //               >
  //                 <Card className="overflow-hidden border-0">
  //                   <CardContent className="p-0 relative">
  //                     <img
  //                       src={data.image}
  //                       alt={data.title}
  //                       className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
  //                     />
  //                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
  //                     <div className="absolute bottom-6 left-6 text-white">
  //                       <h3 className="font-bold text-2xl mb-2">
  //                         {data.title}
  //                       </h3>
  //                       <div className="flex items-center gap-4 text-sm opacity-90">
  //                         <span>{data.totalProducts}+ products</span>
  //                         <span>•</span>
  //                         <span>Free shipping</span>
  //                       </div>
  //                     </div>
  //                     <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
  //                       <Eye className="h-6 w-6 text-white" />
  //                     </div>
  //                   </CardContent>
  //                 </Card>
  //               </Link>
  //             ))}
  //         </div>
  //       </div>
  //     </section>

  //     {/* Features Section */}
  //     <section className="py-20 bg-background">
  //       <div className="container mx-auto px-6">
  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  //           <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-card to-card/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
  //             <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
  //               <Award className="w-8 h-8 text-white" />
  //             </div>
  //             <div>
  //               <h3 className="font-bold text-foreground text-lg">
  //                 Premium Quality
  //               </h3>
  //               <p className="text-sm text-muted-foreground">
  //                 Crafted from the finest materials
  //               </p>
  //             </div>
  //           </div>

  //           <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-card to-card/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
  //             <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
  //               <Shield className="w-8 h-8 text-white" />
  //             </div>
  //             <div>
  //               <h3 className="font-bold text-foreground text-lg">
  //                 Warranty Protection
  //               </h3>
  //               <p className="text-sm text-muted-foreground">
  //                 2+ years comprehensive coverage
  //               </p>
  //             </div>
  //           </div>

  //           <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-card to-card/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
  //             <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
  //               <Truck className="w-8 h-8 text-white" />
  //             </div>
  //             <div>
  //               <h3 className="font-bold text-foreground text-lg">
  //                 Free Delivery
  //               </h3>
  //               <p className="text-sm text-muted-foreground">
  //                 On orders over Rp 2,000,000
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-background">
      <Header />

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
          <div className="max-w-2xl">
            <span className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-md text-white rounded-full text-sm font-semibold uppercase tracking-wider border border-white/20 mb-6">
              Premium Home Collection
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Elevate Your Home
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Discover premium furniture, lighting, and decor crafted with
              exceptional quality and style
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {allProducts.length}+
                </div>
                <div className="text-sm text-white/80">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.6★</div>
                <div className="text-sm text-white/80">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Free</div>
                <div className="text-sm text-white/80">Shipping</div>
              </div>
            </div>
            <Button asChild>
              <Link href="/shop">Shop Now</Link>
            </Button>
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
            {Object.entries(categoryData).map(([key, data]) => (
              <Link
                key={key}
                href={`/category/${key}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <Card className="overflow-hidden border-0">
                  <CardContent className="p-0 relative">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-xl">{data.title}</h3>
                      <p className="text-sm opacity-90">
                        {data.totalProducts}+ products
                      </p>
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
                {filteredProducts.length} of {allProducts.length} products
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
            <Card className="p-6 shadow-lg">
              <h3 className="font-bold text-foreground mb-6 text-xl flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </h3>

              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-foreground">Price Range</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={maxPrice}
                  step={100000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  <span className="font-medium">
                    {formatPrice(priceRange[0])}
                  </span>
                  <span className="font-medium">
                    {formatPrice(priceRange[1])}
                  </span>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Product Type</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="onSale"
                      checked={filters.onSale}
                      onCheckedChange={(checked) =>
                        setFilters({ ...filters, onSale: checked as boolean })
                      }
                    />
                    <label
                      htmlFor="onSale"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      On Sale
                      <Badge variant="destructive" className="text-xs">
                        Save up to 50%
                      </Badge>
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="newArrivals"
                      checked={filters.newArrivals}
                      onCheckedChange={(checked) =>
                        setFilters({
                          ...filters,
                          newArrivals: checked as boolean,
                        })
                      }
                    />
                    <label
                      htmlFor="newArrivals"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      New Arrivals
                      <Badge className="bg-green-500 text-xs">Latest</Badge>
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="bestsellers"
                      checked={filters.bestsellers}
                      onCheckedChange={(checked) =>
                        setFilters({
                          ...filters,
                          bestsellers: checked as boolean,
                        })
                      }
                    />
                    <label
                      htmlFor="bestsellers"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      Bestsellers
                      <Badge className="bg-orange-500 text-xs">Popular</Badge>
                    </label>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">
                  Minimum Rating
                </h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      onClick={() =>
                        setFilters({
                          ...filters,
                          rating: filters.rating === rating ? 0 : rating,
                        })
                      }
                      className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-all duration-200 ${
                        filters.rating === rating
                          ? "bg-primary/10 text-primary border border-primary"
                          : "hover:bg-muted border border-transparent"
                      }`}
                    >
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">& up</span>
                    </button>
                  ))}
                </div>
              </div>
            </Card>
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
                    <Card
                      key={product.id}
                      className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-b from-card to-card/50"
                    >
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                              viewMode === "grid" ? "h-64" : "h-48"
                            }`}
                          />

                          <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {product.isNew && (
                              <Badge className="bg-green-500 text-white shadow-lg">
                                NEW
                              </Badge>
                            )}
                            {product.isOnSale && product.discount && (
                              <Badge className="bg-red-500 text-white shadow-lg">
                                -{product.discount}%
                              </Badge>
                            )}
                            {product.isBestseller && (
                              <Badge className="bg-orange-500 text-white shadow-lg">
                                BESTSELLER
                              </Badge>
                            )}
                          </div>

                          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-medium">
                              {product.rating}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              ({product.reviews})
                            </span>
                          </div>

                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="flex gap-3">
                              <Button
                                variant="secondary"
                                size="icon"
                                className="h-12 w-12 rounded-full shadow-lg"
                              >
                                <Heart className="h-5 w-5" />
                              </Button>
                              <Button size="sm" className="shadow-lg px-6">
                                <Eye className="h-4 w-4 mr-2" />
                                Quick View
                              </Button>
                              <Button
                                variant="secondary"
                                size="icon"
                                className="h-12 w-12 rounded-full shadow-lg"
                              >
                                <ShoppingCart className="h-5 w-5" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="outline"
                              className="text-xs font-medium border-primary text-primary"
                            >
                              {product.category}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Users className="h-3 w-3" />
                              <span>{product.reviews} reviews</span>
                            </div>
                          </div>

                          <Link href={`/shop/${product.id}`}>
                            <h3 className="font-bold text-foreground hover:text-primary transition-colors text-xl leading-tight">
                              {product.name}
                            </h3>
                          </Link>

                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {product.description}
                          </p>

                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-foreground text-xl">
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="shadow-sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        className="shadow-sm"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    )
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="shadow-sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                  >
                    Next
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <Search className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  No Products Found
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  We couldn&apos;t find any products matching your current filters.
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-card to-card/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">
                  Premium Quality
                </h3>
                <p className="text-sm text-muted-foreground">
                  Crafted from the finest materials
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-card to-card/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">
                  Warranty Protection
                </h3>
                <p className="text-sm text-muted-foreground">
                  2+ years comprehensive coverage
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-card to-card/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">
                  Free Delivery
                </h3>
                <p className="text-sm text-muted-foreground">
                  On orders over Rp 2,000,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
