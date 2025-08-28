import { Star, ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

const StorySection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
                The Beginning
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                A Vision Born from Passion
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Furniro began as a small workshop with a big
                  dream: to create furniture that combines timeless design with
                  modern functionality. What started as a passion project has
                  grown into a trusted brand that furnishes homes across the
                  country.
                </p>
                <p>
                  Our commitment to quality craftsmanship and sustainable
                  practices has earned us recognition in the industry and, more
                  importantly, the trust of thousands of satisfied customers who
                  call our pieces part of their daily lives.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-muted-foreground font-medium">
                Rated 4.9/5 by 10,000+ customers
              </span>
            </div>

            <Button size="lg" className="group shadow-lg">
              <Link href="/shop" className="flex items-center">
                Explore Our Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=400&fit=crop"
                alt="Furniro workshop"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=400&fit=crop"
                alt="Furniro products"
                className="w-full h-80 object-cover rounded-2xl shadow-xl mt-8"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card p-8 rounded-2xl shadow-2xl border border-border">
              <p className="text-3xl font-bold text-foreground">10,000+</p>
              <p className="text-sm text-muted-foreground mt-1">
                Happy Customers Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
