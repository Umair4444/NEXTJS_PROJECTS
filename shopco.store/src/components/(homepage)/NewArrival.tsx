import React from "react";
import { ProductCard } from "../(products)/product-card";
import { Button } from "../ui/button";
import Link from "next/link";
import { getNewArrivals } from "@/lib/products";

const NewArrival = () => {
  const newArrivals = getNewArrivals();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
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
    </>
  );
};

export default NewArrival;
