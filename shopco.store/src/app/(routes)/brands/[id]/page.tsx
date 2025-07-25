"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Package, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useSanityStore } from "@/hooks/useSanityStore";
import { useEffect } from "react";
import getPriceRangeColor from "@/components/(products)/PriceRange";
// import { brands } from "@/dummyData/brands";

export default function BrandPage() {
  const params = useParams();
  // for dummy data 
  // const brandparams = getBrandById(params.id as string);
  // const brand = brands.find((brand) => brand._id == brandparams?._id);

  const { brands, fetchAll } = useSanityStore();
  useEffect(() => {
    fetchAll(); // Fetch all data on mount
  }, []);

  if (!brands.length) return null;

  const brand = brands.find((brand) => brand.slug == params.id);

  if (!brand) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span>/</span>
            <Link href="/brands" className="hover:text-black">
              Brands
            </Link>
            <span>/</span>
            <span className="text-black font-medium">{brand.name}</span>
          </div>
        </div>
      </div>

      {/* Brand Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Brand Logo and Info */}
            <div className="text-center lg:text-left">
              <div className="w-fit h-fit bg-gray-100 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-8">
                <Image
                  src={brand.image || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={300}
                  height={300}
                  className="object-fill aspect-square w-fit"
                />
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold">{brand.name}</h1>
                {brand.isPremium && (
                  <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">
                    Premium
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 mb-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{brand.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Founded {brand.founded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  <span>{brand.productCount} Products</span>
                </div>
              </div>

              <Badge className={`${getPriceRangeColor(brand.priceRange)} mb-6`}>
                {brand.priceRange}
              </Badge>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {brand.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {brand.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Stats */}
            <div className="grid grid-cols-2 gap-6 self-start ">
              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {brand.productCount}
                  </div>
                  <div className="text-gray-600">Products Available</div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    4.8
                  </div>
                  <div className="text-gray-600">Average Rating</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {new Date().getFullYear() - Number.parseInt(brand.founded)}
                  </div>
                  <div className="text-gray-600">Years of Excellence</div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">Countries Served</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Brand Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-center leading-relaxed">
              {brand.name} has been a pioneer in the{" "}
              {brand.brandCategory
                .map((cat) => cat.title)
                .join(", ")
                .toLowerCase()}{" "}
              industry since {brand.founded}. Founded in {brand.country}, the
              brand has consistently delivered exceptional quality and
              innovative designs that have captured the hearts of fashion
              enthusiasts worldwide.
            </p>
            <p className="text-center leading-relaxed mt-6">
              With a focus on {brand.specialties.join(", ").toLowerCase()},{" "}
              {brand.name} continues to set trends and redefine what it means to
              be stylish in today&apos;s world. Their commitment to quality and
              customer satisfaction has made them a trusted name in the fashion
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Related Brands */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Similar Brands
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {brands
              .filter((brand) => brand.slug !== params.id)
              .slice(0, 6)
              .map((brand) => (
                <Link
                  key={brand._id}
                  href={`/brands/${brand.slug}`}
                  className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  {/* BRAND LOGO */}
                  <div className="w-36 h-24 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors overflow-hidden">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      width={64}
                      height={48}
                      className="object-contain w-fit h-fit"
                    />
                  </div>

                  {/* BRAND NAME */}
                  <h3 className="font-semibold capitalize">
                    {brand.name.replace("-", " ")}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover More from {brand.name}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our complete collection of {brand.name} products and find
            your perfect style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8"
            >
              <Link href={`/products?brand=${brand._id}`}>
                Shop All {brand.name}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 bg-transparent"
            >
              <Link href="/brands">Explore Other Brands</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
