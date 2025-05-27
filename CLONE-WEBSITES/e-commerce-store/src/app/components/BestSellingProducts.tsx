import React from "react";
import BestSellingCardList from "./BestSellingCardList";

const BestSellingProducts = () => {
  return (
    <div className="mt-10">
      <div className=" h-[493px] flex flex-col gap-10 px-20 ">
        <div className="flex gap-3 text-red-500">
          <div className="bg-red-600 w-4 h-10"></div>
          <h1 className="font-semibold text-lg">This Month</h1>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-10 items-center">
            <div>
              <h1 className="text-4xl font-semibold">Best Selling Products</h1>
            </div>
          </div>
          <div className="flex items-center bg-red-500 text-white">
            <button className="px-10 py-1 text-sm">View All</button>
          </div>
        </div>
        <BestSellingCardList />{" "}
      </div>
    </div>
  );
};

export default BestSellingProducts;
