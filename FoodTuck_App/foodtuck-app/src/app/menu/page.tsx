"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux-toolkit/store";
import { IProduct } from "../utils/Types";
import {
  fetchProducts,
  subscribeToProducts,
} from "../Redux-toolkit/feature/productSlice";
import { useRouter } from "next/navigation";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector(
    (state: RootState) => state.product
  );

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Define the number of menu items per page

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = products.slice(indexOfFirstItem, indexOfLastItem);

  const router = useRouter();

  // Fetch products on initial render if status is idle
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }

    // Subscribe to live updates
    const unsubscribe = subscribeToProducts(dispatch);

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Loading products...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {currentItem.map((product: IProduct) => (
          <div
            key={product.id}
            className="shadow-sm shadow-yellow-500 rounded-lg overflow-hidden bg-white flex flex-col"
          >
            {/* Product Image */}
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.title}
                className="object-cover"
                layout="fill"
              />
            </div>
            {/* Product Details */}
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-black">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-sm font-semibold text-gray-700">
                Category: {product.category}
              </p>
              <p className="text-lg font-bold text-gray-800">
                Price: ${product.price}
              </p>
              {product.discount > 0 && (
                <p className="text-sm text-red-500">
                  Discount: {product.discount}% Off
                </p>
              )}
            </div>
            {/* Order Now Button at the bottom */}
            <button
              onClick={() => router.push(`/menu/${product.slug}`)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 mt-auto w-full rounded-md"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500"
              : "bg-yellow-500 text-black"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500"
              : "bg-yellow-500 text-black"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
