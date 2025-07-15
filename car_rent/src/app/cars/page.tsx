"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cars, categories, locations, priceRanges } from "@/lib/carsData";
import Image from "next/image";
import {
  Users,
  Fuel,
  Settings,
  Star,
  Heart,
  Eye,
  Search,
  Filter,
  MapPin,
  ArrowUpDown,
} from "lucide-react";

export default function Cars() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredCars = cars
    .filter((car) => {
      const matchesSearch = car.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || car.category === selectedCategory;
      const matchesLocation =
        selectedLocation === "All" || car.location === selectedLocation;
      const matchesAvailability = !showAvailableOnly || car.available;

      let matchesPrice = true;
      if (priceRange !== "All") {
        switch (priceRange) {
          case "Under $50":
            matchesPrice = car.price < 50;
            break;
          case "$50 - $80":
            matchesPrice = car.price >= 50 && car.price <= 80;
            break;
          case "$80 - $120":
            matchesPrice = car.price >= 80 && car.price <= 120;
            break;
          case "Over $120":
            matchesPrice = car.price > 120;
            break;
        }
      }

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation &&
        matchesPrice &&
        matchesAvailability
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return b.isPopular ? 1 : -1;
      }
    });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors mt-28 lg:mt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Our <span className="text-brand-orange">Car Fleet</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Discover the perfect vehicle for your journey from our premium
              collection of cars, SUVs, and luxury vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-brand-gray-100 dark:border-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
            <div className="flex-1 relative ">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              />
            </div>
            <Button className="bg-brand-blue hover:bg-brand-blue/90 px-8">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-brand-gray-600" />
              <span className="text-brand-gray-700 font-medium">Filters:</span>
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3 py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-3 py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              {priceRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showAvailableOnly}
                onChange={(e) => setShowAvailableOnly(e.target.checked)}
                className="w-4 h-4 text-brand-blue focus:ring-brand-blue border-brand-gray-300 rounded"
              />
              <span className="text-brand-gray-700">Available only</span>
            </label>

            <div className="flex items-center gap-2 ml-auto">
              <ArrowUpDown className="w-4 h-4 text-brand-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8 bg-brand-gray-50 dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-brand-gray-900">
              {filteredCars.length} cars available
            </h2>
            <div className="text-brand-gray-600">
              Showing {filteredCars.length} of {cars.length} vehicles
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <Card
                key={car.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Car Image */}
                  <div className="relative overflow-hidden bg-brand-gray-50 h-48">
                    <Image
                      width={500}
                      height={500}
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {car.isPopular && (
                        <Badge className="bg-white text-brand-orange hover:bg-brand-orange hover:text-white">
                          Popular
                        </Badge>
                      )}
                      <Badge
                        variant="secondary"
                        className="bg-white text-brand-blue hover:bg-brand-blue hover:text-white"
                      >
                        {car.category}
                      </Badge>
                      {!car.available && (
                        <Badge className="bg-white text-red-500 hover:bg-red-500 hover:text-white">
                          Unavailable
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Heart
                          className={`w-5 h-5 ${
                            car.isFavorite
                              ? "text-red-500 fill-current"
                              : "text-brand-gray-600"
                          }`}
                        />
                      </button>
                      <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Eye className="w-5 h-5 text-brand-gray-600" />
                      </button>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 right-4 bg-brand-blue text-white px-3 py-1 rounded-lg">
                      <div className="text-sm font-bold">${car.price}/day</div>
                      {car.originalPrice && (
                        <div className="text-xs line-through opacity-75">
                          ${car.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Car Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-brand-gray-900">
                        {car.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-brand-gray-700">
                          {car.rating}
                        </span>
                        <span className="text-sm text-brand-gray-500">
                          ({car.reviews})
                        </span>
                      </div>
                    </div>

                    <p className="text-brand-gray-600 text-sm mb-4">
                      {car.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-brand-gray-400" />
                        <span className="text-sm text-brand-gray-600">
                          {car.features.passengers} seats
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="w-4 h-4 text-brand-gray-400" />
                        <span className="text-sm text-brand-gray-600">
                          {car.features.fuel}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-brand-gray-400" />
                        <span className="text-sm text-brand-gray-600">
                          {car.features.transmission}
                        </span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 mb-6">
                      <MapPin className="w-4 h-4 text-brand-gray-400" />
                      <span className="text-sm text-brand-gray-600">
                        Available at {car.location}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                        onClick={() =>
                          (window.location.href = `/cars/${car.id}`)
                        }
                      >
                        View Details
                      </Button>
                      <Button
                        className={`${
                          car.available
                            ? "bg-brand-orange hover:bg-brand-orange/90 text-white"
                            : "bg-brand-gray-300 text-brand-gray-600 cursor-not-allowed"
                        }`}
                        disabled={!car.available}
                      >
                        {car.available ? "Rent Now" : "Unavailable"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <div className="text-brand-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">
                No cars found
              </h3>
              <p className="text-brand-gray-600 mb-6">
                Try adjusting your filters or search terms
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedLocation("All");
                  setPriceRange("All");
                  setShowAvailableOnly(false);
                }}
                className="bg-brand-blue hover:bg-brand-blue/90"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
