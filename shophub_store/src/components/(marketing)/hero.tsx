"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Amazing Products
          </h1>
          <p className="text-xl mb-8 text-purple-100">
            Shop the latest trends and find everything you need in one place.
            Quality products, unbeatable prices, and fast delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => router.push("/products")}
              size="lg"
              variant={"outline"}
              className="border-transparent text-white hover:bg-white hover:text-purple-600 bg-transparent/20 "
            >
              Shop Now!
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
