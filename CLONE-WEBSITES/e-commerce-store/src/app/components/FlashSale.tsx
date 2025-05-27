import React from "react";
import Image from "next/image";
import leftArrow from "@/../public/Fill With Left Arrow.png";
import RightArrow from "@/../public/Fill with Right Arrow.png";
import FlashSaleCardList from "./FlashSaleCardList";

const FlashSale = () => {
  return (
    <div className=" h-[493px] flex flex-col gap-10 px-20 ">
      <div className="flex gap-3 text-red-500">
        <div className="bg-red-600 w-4 h-10"></div>
        <h1 className="font-semibold text-lg">Today's</h1>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-10 items-center">
          <div>
            <h1 className="text-4xl font-semibold">Flash Sales</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-3">
                <h4>Days</h4>
                <div className=" flex items-center gap-3">
                  <h1 className="text-4xl font-bold">03</h1>
                </div>
              </div>
            </div>
            <h1 className="text-red-800 text-4xl font-bold ">:</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-3">
                <h4>Hours</h4>
                <div className=" flex items-center gap-3">
                  <h1 className="text-4xl font-bold">23</h1>
                </div>
              </div>
            </div>
            <h1 className="text-red-800 text-4xl font-bold ">:</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-3">
                <h4>Minutes</h4>
                <div className=" flex items-center gap-3">
                  <h1 className="text-4xl font-bold">19</h1>
                </div>
              </div>
            </div>
            <h1 className="text-red-800 text-4xl font-bold ">:</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-3">
                <h4>Seconds</h4>
                <div className=" flex items-center gap-3">
                  <h1 className="text-4xl font-bold">56</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Image src={leftArrow} alt="leftarrow" />
          <Image src={RightArrow} alt="rightarrow" />
        </div>
      </div>
      <FlashSaleCardList />
      <div className="flex items-center justify-center mt-10">
        <div className="bg-red-500 w-fit text-sm text-white px-10 py-3">
          <button>View All Products</button>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
