import React from "react";

const Stats = () => {
  return (
    <>
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
            <div className="pl-8">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-gray-400">International Brands</div>
            </div>
            <div className="md:border-l border-gray-600 pl-8">
              <div className="text-4xl font-bold mb-2">2,000+</div>
              <div className="text-gray-400">High-Quality Products</div>
            </div>
            <div className="md:border-l border-gray-600 pl-8">
              <div className="text-4xl font-bold mb-2">30,000+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
