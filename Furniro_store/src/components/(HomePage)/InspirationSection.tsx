import { Star, ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Inspiration = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-primary/20 to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Interior Design
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                50+ Beautiful rooms inspiration
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you to create your dream space
              </p>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                4.9/5 from 2,500+ reviews
              </span>
            </div>

            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg"
            >
              <Link href="/shop" className="flex items-center">
                Explore More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="flex gap-6 overflow-hidden">
              <div className="relative flex-shrink-0 w-80 group">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=500&fit=crop"
                  alt="Room inspiration"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>01 — Bed Room</span>
                  </div>
                  <h3 className="font-bold text-foreground text-lg">
                    Inner Peace
                  </h3>
                </div>
              </div>
              <div className="flex-shrink-0 w-80 relative group">
                <img
                  src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=500&fit=crop"
                  alt="Room inspiration"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-muted rounded-full"></div>
              <div className="w-3 h-3 bg-muted rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
