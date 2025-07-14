"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Fuel,
  Settings,
  Star,
  Heart,
  Share2,
  ArrowLeft,
  CheckCircle,
  MapPin,
  Shield,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Link from "next/link";
import { carsData } from "@/lib/singleCarsData";
import Image from "next/image";

export default function CarDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");

  const car = carsData;

  if (!car) {
    return (
      <div className="min-h-screen mt-24">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-brand-gray-900 mb-4">
            Car not found
          </h1>
          <Link href="/cars">
            <Button className="bg-brand-blue hover:bg-brand-blue/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cars
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % car["1"].images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + car["1"].images.length) % car["1"].images.length
    );
  };

  const calculateDays = () => {
    if (pickupDate && dropoffDate) {
      const pickup = new Date(pickupDate);
      const dropoff = new Date(dropoffDate);
      const diffTime = Math.abs(dropoff.getTime() - pickup.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays || 1;
    }
    return 1;
  };

  const totalPrice = car["1"].price * calculateDays();

  return (
    <div className="min-h-screen mt-24">
      {/* Breadcrumb */}
      <section className="bg-brand-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-brand-gray-600">
            <Link href="/cars" className="hover:text-brand-blue">
              Cars
            </Link>
            <span>/</span>
            <span className="text-brand-gray-900">{car["1"].name}</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Back Button */}
            <Link href="/cars">
              <Button
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Cars
              </Button>
            </Link>

            {/* Car Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-brand-gray-900">
                    {car["1"].name}
                  </h1>
                  {car["1"].isPopular && (
                    <Badge className="bg-white text-brand-orange hover:bg-brand-orange hover:text-white">
                      Popular
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-brand-gray-700">
                      {car["1"].rating}
                    </span>
                    <span className="text-brand-gray-500">
                      ({car["1"].reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-gray-400" />
                    <span className="text-brand-gray-600">
                      Available at {car["1"].location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="border-brand-gray-200"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite
                        ? "text-red-500 fill-current"
                        : "text-brand-gray-600"
                    }`}
                  />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-brand-gray-200"
                >
                  <Share2 className="w-5 h-5 text-brand-gray-600" />
                </Button>
              </div>
            </div>

            {/* Image Gallery */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="relative">
                <div
                  className="h-96 bg-brand-gray-100 cursor-pointer"
                  onClick={() => setIsImageModalOpen(true)}
                >
                  <Image
                    width={500}
                    height={500}
                    src={car["1"].images[currentImageIndex]}
                    alt={car["1"].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {car["1"].images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-2">
                  {car["1"].images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-20 rounded-lg overflow-hidden border-2 ${
                        index === currentImageIndex
                          ? "border-brand-blue"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        width={500}
                        height={500}
                        src={image}
                        alt={`${car["1"].name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Description */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">
                  About this car
                </h2>
                <p className="text-brand-gray-600 leading-relaxed mb-6">
                  {car["1"].fullDescription}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-gray-900 mb-3">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-brand-blue" />
                        <span className="text-sm">
                          {car["1"].features.passengers} passengers
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="w-4 h-4 text-brand-blue" />
                        <span className="text-sm">
                          {car["1"].features.fuel}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-brand-blue" />
                        <span className="text-sm">
                          {car["1"].features.transmission}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-blue" />
                        <span className="text-sm">
                          {car["1"].features.doors} doors
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-gray-900 mb-3">
                      Included Features
                    </h3>
                    <div className="space-y-2">
                      {car["1"].included.slice(0, 4).map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-brand-gray-600">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-brand-gray-900 mb-6">
                  Specifications
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(car["1"].specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-brand-gray-100"
                      >
                        <span className="text-brand-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                        <span className="font-medium text-brand-gray-900">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-brand-orange">
                        ${car["1"].price}
                      </span>
                      <span className="text-brand-gray-600">/day</span>
                      {car["1"].originalPrice && (
                        <span className="text-lg line-through text-brand-gray-400">
                          ${car["1"].originalPrice}
                        </span>
                      )}
                    </div>
                    {car["1"].originalPrice && (
                      <p className="text-green-600 text-sm font-medium">
                        Save ${car["1"].originalPrice - car["1"].price} per day!
                      </p>
                    )}
                  </div>

                  <div className="space-y-6 mb-6">
                    {/* Pickup Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-gray-700 mb-1">
                          Pickup Date
                        </label>
                        <input
                          type="date"
                          value={pickupDate}
                          onChange={(e) => setPickupDate(e.target.value)}
                          className="w-full text-center py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-gray-700 mb-1">
                          Pickup Time
                        </label>
                        <input
                          type="time"
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="w-full text-center py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        />
                      </div>
                    </div>

                    {/* Return Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-gray-700 mb-1">
                          Return Date
                        </label>
                        <input
                          type="date"
                          value={dropoffDate}
                          onChange={(e) => setDropoffDate(e.target.value)}
                          className="w-full text-center py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-gray-700 mb-1">
                          Return Time
                        </label>
                        <input
                          type="time"
                          value={dropoffTime}
                          onChange={(e) => setDropoffTime(e.target.value)}
                          className="w-full text-center py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        />
                      </div>
                    </div>

                    {/* Pickup Location */}
                    <div>
                      <label className="block text-sm font-medium text-brand-gray-700 mb-1">
                        Pickup Location
                      </label>
                      <select
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="w-full px-3 py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      >
                        <option value="" disabled>
                          Select location
                        </option>
                        {car["1"].pickupLocations.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Price Summary */}
                    {pickupDate && dropoffDate && (
                      <div className="bg-brand-gray-50 p-4 rounded-lg border border-brand-gray-200">
                        <div className="flex justify-between text-sm text-brand-gray-600 mb-2">
                          <span>
                            ${car["1"].price} × {calculateDays()} day
                            {calculateDays() > 1 ? "s" : ""}
                          </span>
                          <span className="font-medium">${totalPrice}</span>
                        </div>
                        <div className="flex justify-between items-center font-semibold text-lg">
                          <span>Total</span>
                          <span className="text-brand-orange">
                            ${totalPrice}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <Button
                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-3 text-lg font-semibold mb-4"
                    disabled={!car["1"].available}
                  >
                    {car["1"].available
                      ? "Reserve Now"
                      : "Currently Unavailable"}
                  </Button>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <Button
                      variant="outline"
                      className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Button>
                    <Button
                      variant="outline"
                      className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat
                    </Button>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-brand-gray-600 mb-2">
                      <Shield className="w-4 h-4" />
                      <span>Free cancellation up to 24h before pickup</span>
                    </div>
                    <p className="text-xs text-brand-gray-500">
                      Book now, pay at pickup. No hidden fees.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              width={500}
              height={500}
              src={car["1"].images[currentImageIndex]}
              alt={car["1"].name}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
