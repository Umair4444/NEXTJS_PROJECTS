import { MapPin, Star } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <>
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Your Next Favorite Brand
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            From emerging designers to established luxury houses, find the
            perfect brand that matches your style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8"
            >
              <Star className="w-5 h-5 mr-2" />
              Shop Featured Brands
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 bg-transparent"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Explore by Country
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
