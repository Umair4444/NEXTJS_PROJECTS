import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const BrowseTheRange = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-primary/20 to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Our Collection
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Browse The Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections designed to transform
            every corner of your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Dining",
              image:
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop",
              count: "120+ Items",
            },
            {
              name: "Living",
              image:
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=500&fit=crop",
              count: "180+ Items",
            },
            {
              name: "Bedroom",
              image:
                "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=500&fit=crop",
              count: "95+ Items",
            },
          ].map((category, index) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  {category.name}
                </h3>
                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.count}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseTheRange;
