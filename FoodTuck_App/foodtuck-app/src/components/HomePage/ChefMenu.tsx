"use client";
import { Great_Vibes } from "next/font/google";
import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSelector } from "react-redux";
import { RootState } from "@/app/Redux-toolkit/store";
import { IProduct } from "@/app/utils/Types";
import Link from "next/link";

const great_Vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

const ChefMenu = () => {
  const [activeTab, setActiveTab] = useState("Breakfast");

  const { products } = useSelector((state: RootState) => state.product);

  const tabCategories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack",
    "Soup",
    "Drinks",
    "Dessert",
  ];

  const filteredProducts: IProduct[] = products.filter(
    (res) => res.mealoftheday?.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col items-center gap-4 text-center mt-5 md:mt-10 lg:mt-20">
        <h3
          className={`${great_Vibes.className} text-3xl sm:text-4xl text-[#FF9F0D]`}
        >
          Food Gallery
        </h3>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-[#FF9F0D] font-helvetica">Ch</span>oose Food
          Items
        </h1>
      </div>

      {/* Tabs */}
      <Tabs defaultValue={activeTab} className="mt-10 w-full">
        <TabsList className="bg-black text-white flex justify-center gap-2 md:gap-6 lg:gap-14 p-2">
          {tabCategories.map((meal) => (
            <TabsTrigger
              key={meal}
              onClick={() => setActiveTab(meal)}
              className="py-2 px-4 rounded-md transition-colors hover:bg-black hover:text-yellow-500 text-base sm:text-lg data-[state=active]:bg-[#FF9F0D] data-[state=active]:text-black "
              value={meal}
            >
              {meal}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Products Grid */}
        <TabsContent
          value={activeTab}
          className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: IProduct) => (
              <div
                key={product.id}
                className=" py-1 rounded-lg w-full border border-yellow-800 hover:shadow-yellow-500 shadow-md transition duration-500 "
              >
                <Link href={`/menu/${product.slug}`}>
                  <div className="flex items-center gap-x-2">
                    <div className="w-20 h-20 relative">
                      <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="text-white">
                      <h1 className="font-semibold">{product.title}</h1>
                      <p className="text-sm text-gray-300">
                        {product.description.slice(0, 40)}...
                      </p>
                      <h2 className="text-[#FF9F0D] font-semibold">
                        ${product.price}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-white text-center w-full text-lg sm:text-xl italic mt-5">
              No items available for {activeTab}.
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChefMenu;
