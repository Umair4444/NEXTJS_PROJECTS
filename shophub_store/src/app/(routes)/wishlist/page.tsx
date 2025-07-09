"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  Trash2,
  Share2,
  Filter,
  Grid,
  List,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 128,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Sale",
      inStock: true,
      category: "Electronics",
      dateAdded: "2024-01-15",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
      inStock: true,
      category: "Electronics",
      dateAdded: "2024-01-12",
    },
    {
      id: 3,
      name: "Premium Coffee Maker",
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.6,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Sale",
      inStock: false,
      category: "Home & Kitchen",
      dateAdded: "2024-01-10",
    },
    {
      id: 4,
      name: "Gaming Mechanical Keyboard",
      price: 129.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 203,
      image: "/placeholder.svg?height=300&width=300",
      badge: null,
      inStock: true,
      category: "Electronics",
      dateAdded: "2024-01-08",
    },
    {
      id: 5,
      name: "Yoga Mat Premium",
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.4,
      reviews: 94,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Sale",
      inStock: true,
      category: "Sports",
      dateAdded: "2024-01-05",
    },
    {
      id: 6,
      name: "Wireless Charging Pad",
      price: 29.99,
      originalPrice: null,
      rating: 4.3,
      reviews: 67,
      image: "/placeholder.svg?height=300&width=300",
      badge: null,
      inStock: true,
      category: "Electronics",
      dateAdded: "2024-01-03",
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("dateAdded");
  const [filterBy, setFilterBy] = useState("all");

  const removeFromWishlist = (id: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
    setSelectedItems((selected) => selected.filter((itemId) => itemId !== id));
  };

  const addToCart = (id: number) => {
    // Add to cart logic here
    console.log("Added to cart:", id);
  };

  const toggleSelectItem = (id: number) => {
    setSelectedItems((selected) =>
      selected.includes(id)
        ? selected.filter((itemId) => itemId !== id)
        : [...selected, id]
    );
  };

  const selectAllItems = () => {
    if (selectedItems.length === filteredItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredItems.map((item) => item.id));
    }
  };

  const removeSelectedItems = () => {
    setWishlistItems((items) =>
      items.filter((item) => !selectedItems.includes(item.id))
    );
    setSelectedItems([]);
  };

  const addSelectedToCart = () => {
    selectedItems.forEach((id) => addToCart(id));
    setSelectedItems([]);
  };

  // Filter and sort items
  const filteredItems = wishlistItems
    .filter((item) => {
      if (filterBy === "all") return true;
      if (filterBy === "inStock") return item.inStock;
      if (filterBy === "outOfStock") return !item.inStock;
      if (filterBy === "onSale") return item.originalPrice !== null;
      return item.category === filterBy;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "priceLow":
          return a.price - b.price;
        case "priceHigh":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "dateAdded":
        default:
          return (
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
          );
      }
    });

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Your wishlist is empty
          </h1>
          <p className="text-gray-600 mb-8">
            Save items you love to your wishlist and shop them later.
          </p>
          <Button asChild>
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <Heart className="h-8 w-8 mr-3 text-red-500" />
                My Wishlist
              </h1>
              <p className="text-gray-600">
                {wishlistItems.length} items saved
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex bg-transparent">
              <Share2 className="h-4 w-4 mr-2" />
              Share Wishlist
            </Button>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="selectAll"
                  checked={
                    selectedItems.length === filteredItems.length &&
                    filteredItems.length > 0
                  }
                  onCheckedChange={selectAllItems}
                />
                <label htmlFor="selectAll" className="text-sm font-medium">
                  Select All ({selectedItems.length})
                </label>
              </div>
              {selectedItems.length > 0 && (
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={addSelectedToCart}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={removeSelectedItems}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Remove
                  </Button>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Items</SelectItem>
                  <SelectItem value="inStock">In Stock</SelectItem>
                  <SelectItem value="outOfStock">Out of Stock</SelectItem>
                  <SelectItem value="onSale">On Sale</SelectItem>
                  <SelectItem value="Electronics">Electronics</SelectItem>
                  <SelectItem value="Home & Kitchen">Home & Kitchen</SelectItem>
                  <SelectItem value="Sports">Sports</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dateAdded">Date Added</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="priceLow">Price: Low to High</SelectItem>
                  <SelectItem value="priceHigh">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Items Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <Image
                        width={500}
                        height={500}
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-3 left-3">
                      <Checkbox
                        checked={selectedItems.includes(item.id)}
                        onCheckedChange={() => toggleSelectItem(item.id)}
                        className="bg-white"
                      />
                    </div>
                    <div className="absolute top-3 right-3 flex flex-col space-y-2">
                      {item.badge && (
                        <Badge
                          className={`${
                            item.badge === "Sale"
                              ? "bg-red-500"
                              : item.badge === "New"
                              ? "bg-green-500"
                              : "bg-blue-500"
                          }`}
                        >
                          {item.badge}
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-white hover:bg-gray-100 text-red-500 hover:text-red-600"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <Heart className="h-4 w-4 fill-current" />
                      </Button>
                    </div>
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
                        <Badge
                          variant="secondary"
                          className="bg-white text-gray-900"
                        >
                          Out of Stock
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <Link href={`/product/${item.id}`}>
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                    </Link>

                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {renderStars(item.rating)}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        ({item.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">
                          ${item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button
                      className="w-full"
                      disabled={!item.inStock}
                      onClick={() => addToCart(item.id)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {item.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={() => toggleSelectItem(item.id)}
                    />

                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        width={500}
                        height={500}
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <Link href={`/product/${item.id}`}>
                            <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <div className="flex items-center mt-1">
                            <div className="flex items-center">
                              {renderStars(item.rating)}
                            </div>
                            <span className="text-sm text-gray-600 ml-2">
                              ({item.reviews} reviews)
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            Added on{" "}
                            {new Date(item.dateAdded).toLocaleDateString()}
                          </p>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-xl font-bold text-gray-900">
                              ${item.price}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                ${item.originalPrice}
                              </span>
                            )}
                          </div>
                          {item.badge && (
                            <Badge
                              className={`${
                                item.badge === "Sale"
                                  ? "bg-red-500"
                                  : item.badge === "New"
                                  ? "bg-green-500"
                                  : "bg-blue-500"
                              }`}
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Button
                        disabled={!item.inStock}
                        onClick={() => addToCart(item.id)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {item.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && wishlistItems.length > 0 && (
          <div className="text-center py-12">
            <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No items match your filters
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters to see more items.
            </p>
            <Button variant="outline" onClick={() => setFilterBy("all")}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
