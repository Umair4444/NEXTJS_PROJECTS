import { brands, getBrandCategories, getFeaturedBrands } from "@/dummyData/brands";
import React from "react";

const Stats = () => {
  const featuredBrands = getFeaturedBrands();
  const categories = getBrandCategories();

  return (
    <>
      <section className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{brands.length}+</div>
              <div className="text-gray-400">Total Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {featuredBrands.length}
              </div>
              <div className="text-gray-400">Featured Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{categories.length}</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
