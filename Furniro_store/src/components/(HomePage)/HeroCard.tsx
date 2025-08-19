import { Star, ArrowRight, Play } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const HeroCard = () => {
  return (
    <div className="relative container mx-auto px-6 min-h-screen flex items-center">
      <div className="max-w-2xl">
        <div className="bg-secondary/95 backdrop-blur-md p-12 rounded-2xl shadow-2xl border border-white/10 transform hover:scale-105 transition-all duration-500">
          <div className="space-y-2 mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider">
              New Arrival
            </span>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Rated #1 Furniture Store
              </span>
            </div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            Discover Our
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              New Collection
            </span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Transform your living space with our curated collection of premium
            furniture. Every piece tells a story of craftsmanship, comfort, and
            timeless design.
          </p>

          <div className="flex flex-col justify-start sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              SHOP COLLECTION
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group px-8 py-4 text-lg border-2 hover:bg-primary/5"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Story
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-6 border-t border-border/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
