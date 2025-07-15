"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Users } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");

  return (
    <section className="bg-gradient-to-br from-brand-gray-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto p-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="">
              <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium">
                ⭐ #1 Car Rental Service
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-gray-900 leading-tight">
                Find Your Perfect{" "}
                <span className="text-brand-blue">Rental Car</span>
              </h1>
              <p className="text-xl text-brand-gray-600 leading-relaxed">
                Discover the freedom of the road with our premium fleet of
                vehicles. From economy to luxury, we have the perfect car for
                every journey.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">500+</div>
                <div className="text-brand-gray-600">Cars Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange">50k+</div>
                <div className="text-brand-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">24/7</div>
                <div className="text-brand-gray-600">Support</div>
              </div>
            </div>

            {/* Booking Form */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-6">
                  Book Your Car Now
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {/* Pickup Location */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-gray-700">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Enter pickup location"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="w-full pl-6 pr-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Drop-off Location */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-gray-700">
                      Drop-off Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Enter drop-off location"
                        value={dropoffLocation}
                        onChange={(e) => setDropoffLocation(e.target.value)}
                        className="w-full pl-6 pr-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Pickup Date & Time */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-gray-700">
                        Pickup Date
                      </label>
                      <div className="relative">
                        {/* <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-4 h-4" /> */}
                        <input
                          type="date"
                          value={pickupDate}
                          onChange={(e) => setPickupDate(e.target.value)}
                          className="w-full pl-1 pr-2 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-gray-700">
                        Time
                      </label>
                      <div className="relative">
                        {/* <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-4 h-4" /> */}
                        <input
                          type="time"
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="w-full pl-5 pr-2 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Drop-off Date & Time */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-gray-700">
                        Drop-off Date
                      </label>
                      <div className="relative">
                        {/* <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-4 h-4" /> */}
                        <input
                          type="date"
                          value={dropoffDate}
                          onChange={(e) => setDropoffDate(e.target.value)}
                          className="w-full pl-1 pr-2 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-gray-700">
                        Time
                      </label>
                      <div className="relative">
                        {/* <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-4 h-4" /> */}
                        <input
                          type="time"
                          value={dropoffTime}
                          onChange={(e) => setDropoffTime(e.target.value)}
                          className="w-full pl-5 pr-2 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-3 text-lg font-semibold">
                  Search Available Cars
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Car Image */}
          <div className="relative w-full max-w-lg mx-auto mt-10">
            {/* Image */}
            <div className="relative z-10">
              <Image
                width={500}
                height={500}
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop&auto=format&q=80"
                alt="Premium Car"
                className="w-full h-auto rounded-xl"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.1))",
                }}
              />
            </div>

            {/* Background Blur Circles */}
            <div className="absolute inset-0 z-40">
              <div className="absolute top-40 right-40 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/5 rounded-full blur-lg"></div>
            </div>

            {/* Floating Card: Top Left */}
            <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg border z-20 w-48">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    5 Seater
                  </div>
                  <div className="text-xs text-gray-600">Comfortable</div>
                </div>
              </div>
            </div>

            {/* Floating Card: Bottom Right */}
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg border z-20 w-48">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-lg">$</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    $29/day
                  </div>
                  <div className="text-xs text-gray-600">Best Price</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
