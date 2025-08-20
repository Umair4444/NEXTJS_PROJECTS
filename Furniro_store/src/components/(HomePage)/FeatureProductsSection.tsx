import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { featuredProducts } from "@/lib/mockDataProduct";

const FeatureProducts = () => {
  return (
    <section className="py-10 bg-gradient-to-l from-primary/20 to-secondary/10 ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Best Sellers
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites from our latest collection, loved by thousands
            of customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.discount && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      -{product.discount}%
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      NEW
                    </span>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-transparent/80">
                    View Details
                  </Button>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-b from-card to-muted/20">
                <h3 className="font-bold text-foreground text-xl mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground text-lg">
                      Rp {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground line-through text-sm">
                        Rp {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 text-lg font-semibold"
          >
            <Link href="/shop" className="flex items-center">
              Show More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
