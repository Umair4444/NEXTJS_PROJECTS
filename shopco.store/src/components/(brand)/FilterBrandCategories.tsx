import React from "react";
import { Button } from "../ui/button";

interface BrandFilterContentProps {
  categories: string[];
  setSelectedCategories: (categories: string[]) => void;
}

const FilterBrandCategories: React.FC<BrandFilterContentProps> = ({
  categories,
  setSelectedCategories,
}) => {
  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Explore brands by their specialization
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(0, 6).map((category) => (
              <Button
                key={category}
                variant="outline"
                className="h-16 bg-transparent hover:bg-black hover:text-white transition-colors"
                onClick={() => setSelectedCategories([category])}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterBrandCategories;
