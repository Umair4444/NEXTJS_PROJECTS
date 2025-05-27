"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/Redux-toolkit/store";
import { removeFromWish } from "@/app/Redux-toolkit/feature/wishSlice";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Wishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wish); // Corrected state reference
  const dispatch = useDispatch();
  const [openImage, setOpenImage] = useState<number | null>(null);

  const toggleImage = (id: number) => {
    setOpenImage(openImage === id ? null : id);
  };

  return (
    <div className="min-h-screen  p-5 bg-gray-100 text-black">
      <h1 className="text-2xl text-center font-bold mb-4 ">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-center">No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center relative"
            >
              {/* Accordion for image */}
              <div className="relative w-full ">
                {openImage === item.id && (
                  <div className="relative w-full h-60">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2">
                {/* Eye icon with title */}
                <button
                  onClick={() => toggleImage(item.id)}
                  className="text-gray-600"
                >
                  {openImage === item.id ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
                <h2 className="text-lg text-black font-semibold">
                  {item.title}
                </h2>
              </div>

              <p className="text-gray-600 text-center">${item.price}</p>

              {/* Availability */}
              <p
                className={`text-sm mt-2 text-center ${
                  item.availability ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.availability ? "In Stock" : "Out of Stock"}
              </p>

              {/* Category */}
              <p className="text-sm text-gray-500 text-center">
                {item.category}
              </p>

              {/* Description */}
              <p className="text-xs text-gray-500 text-center text-wrap mt-2 ">
                {item.description}
              </p>

              <div className="mt-10 w-full flex justify-between items-center  ">
                <button
                  onClick={() => dispatch(removeFromWish(item.id))}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg w-full absolute bottom-0 left-0 "
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
