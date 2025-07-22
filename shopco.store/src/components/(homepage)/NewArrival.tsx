import React from "react";
import { ProductCard } from "../(cards)/ProductCard";
import { Button } from "../ui/button";
import Link from "next/link";
import { getNewArrivals, products } from "@/dummyData/products";

const NewArrival = () => {
  const newArrivals = getNewArrivals();
  console.log("////", newArrivals);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-12 bg-transparent"
            // asChild
          >
            <Link href={`/products?isonsale=true`}>View All</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
