import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Users,
  Fuel,
  Settings,
  Star,
  Heart,
  Eye,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

import { featuredCars } from "../lib/featuredCarsData";

export default function FeaturedCars() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Fleet
          </div>
          <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
            Featured <span className="text-brand-blue">Vehicles</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium vehicles, perfect for
            any occasion. From economy to luxury, find your ideal ride.
          </p>
        </div>

        {/* Filter Tabs */}
        <Tabs defaultValue="all" className="flex flex-col items-center">
          <TabsList className="flex flex-wrap justify-center bg-brand-blues gap-6 mb-12 ">
            {["all", "economy", "luxury", "suv", "sports"].map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="
                px-6 py-2 text-lg rounded-md
                data-[state=active]:bg-brand-blue data-[state=active]:text-white
                data-[state=inactive]:border-brand-gray-200 data-[state=inactive]:text-brand-gray-600
          hover:border-brand-blue hover:text-brand-blue
          "
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* ... TabsContent ... */}
        </Tabs>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <Card
              key={car.id}
              className="group-hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden"
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
                    <div className="text font-bold">${car.price}/day</div>
                    {car.originalPrice && (
                      <div className="text-sm  opacity-90">
                        was {""}
                        <span className="line-through">
                          ${car.originalPrice}
                        </span>
                        /day
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

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
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

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                    >
                      View Details
                    </Button>
                    <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                      Rent Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
          >
            View All Cars
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
