"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/(products)/product-card";
import { getNewArrivals, getTopSelling } from "@/lib/products";
import model from "@/images/model.png";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useHeroStore } from "@/hooks/useHero";
import { useEffect } from "react";

// use this to fetch data directly from sanity
// const query = ` *[_type == "hero"]{
//           _id,
//           title,
//             content,
//             buttontext,
//           "poster": poster.asset->url
// }`;

export default async function HomePage() {
  const newArrivals = getNewArrivals();
  const topSelling = getTopSelling();

  // use this for server rendering
  // const hero = await client.fetch(query);
  // const hero = await fetchHero(); // ✅ Server-side fetching
  // if (!hero || hero.length === 0) return <p>No hero data found.</p>;

  // use this for client rendering
  const { hero, fetchHero } = useHeroStore();
  useEffect(() => {
    fetchHero(); // Fetch data when the component is mounted
  }, [fetchHero]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          {hero.map((block: any) => (
            <div
              className="grid md:grid-cols-2 gap-12 items-center"
              key={block._id}
            >
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {/* FIND CLOTHES THAT MATCHES YOUR STYLE */}
                  {block.title}
                </h1>
                <p className="text-gray-600 text-lg max-w-md">
                  {/* Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style. */}
                  {block.content}
                </p>
                <Button asChild size="lg" className="rounded-full px-12">
                  <Link href="/products">{block.buttontext}</Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src={urlFor(block.poster).url()}
                  alt="Trendy fashionable couple"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-gray-400">International Brands</div>
              </div>
              <div className="border-l border-gray-600 pl-8">
                <div className="text-4xl font-bold mb-2">2,000+</div>
                <div className="text-gray-400">High-Quality Products</div>
              </div>
              <div className="border-l border-gray-600 pl-8">
                <div className="text-4xl font-bold mb-2">30,000+</div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="hidden md:block bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-8 md:gap-16 opacity-80">
            <div className=" text-white text-xl md:text-2xl lg:text-4xl font-bold">
              VERSACE
            </div>
            <div className=" text-white text-xl md:text-2xl lg:text-4xl font-bold">
              ZARA
            </div>
            <div className=" text-white text-xl md:text-2xl lg:text-4xl font-bold">
              GUCCI
            </div>
            <div className=" text-white text-xl md:text-2xl lg:text-4xl font-bold">
              PRADA
            </div>
            <div className=" text-white text-xl md:text-2xl lg:text-4xl font-bold">
              Calvin Klein
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            NEW ARRIVALS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-12 bg-transparent"
              // asChild
            >
              <Link href="/products">View All</Link>
            </Button>
          </div>
        </div>
      </section>

      <hr className="max-w-7xl mx-auto border-gray-200" />

      {/* Top Selling */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            TOP SELLING
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSelling.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-12 bg-transparent"
              asChild
            >
              <Link href="/products">View All</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Browse by Style */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-100 rounded-3xl p-8 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              BROWSE BY DRESS STYLE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 relative overflow-hidden h-60">
                <h3 className="text-2xl font-bold mb-4 z-50 absolute">
                  Casual
                </h3>
                <Image
                  src={model}
                  alt="Casual style"
                  width={300}
                  height={200}
                  className="absolute right-0 top-0 object-cover"
                />
              </div>
              <div className="md:col-span-2 bg-white rounded-2xl p-6 relative overflow-hidden h-60">
                <h3 className="text-2xl font-bold mb-4 z-50 absolute">
                  Formal
                </h3>
                <Image
                  src={model}
                  alt="Formal style"
                  width={700}
                  height={200}
                  className="absolute right-0 top-0 "
                />
              </div>
              <div className="md:col-span-2 bg-white rounded-2xl p-6 relative overflow-hidden h-60">
                <h3 className="text-2xl font-bold mb-4 z-50 absolute">Party</h3>
                <Image
                  src={model}
                  alt="Party style"
                  width={600}
                  height={200}
                  className="absolute right-0 bottom-0"
                />
              </div>
              <div className="bg-white rounded-2xl p-6 relative overflow-hidden h-60">
                <h3 className="text-2xl font-bold mb-4 z-50 absolute">Gym</h3>
                <Image
                  src={model}
                  alt="Gym style"
                  width={300}
                  height={200}
                  className="absolute right-0 top-0 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                rating: 5,
                review:
                  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
              },
              {
                name: "Alex K.",
                rating: 5,
                review:
                  "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
              },
              {
                name: "James L.",
                rating: 5,
                review:
                  "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 bg-yellow-400 rounded-sm mr-1"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold">{review.name}</span>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <p className="text-gray-600">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
