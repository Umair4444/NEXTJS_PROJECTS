"use client";

import { IProduct } from "@/app/utils/Types";
import { useState, useEffect, useMemo, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import "@/globals.css"; // Import your global CSS file

export default function ProductSearch({ products }: { products: IProduct[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce Effect: Update `debouncedSearch` after user stops typing
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Memoized product filtering
  const filteredProducts = useMemo(() => {
    if (!debouncedSearch) return [];
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
    );
  }, [products, debouncedSearch]);

  // Optimized input handler
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      {/* Search Bar */}
      <div className="relative flex items-center bg-gray-800 rounded-full p-2">
        <input
          type="text"
          placeholder="Search products..."
          className="outline-none bg-transparent text-white text-lg font-normal placeholder:text-white/60 w-full px-4"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="text-white text-lg mr-3 hover:text-yellow-500 transition-colors duration-200">
          <FaSearch />
        </button>
      </div>

      {/* Conditionally Render Product List Only When There's a Search Term */}
      {debouncedSearch && (
        <div className="absolute top-full left-0 w-full bg-black text-white mt-4 px-4 rounded-lg shadow-lg max-h-[300px] overflow-auto scrollbar-hide z-50">
          {/* Search Results List */}
          <ul className="space-y-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center gap-4 p-1 border-b border-gray-600"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={60}
                    height={60}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-gray-400">${product.price}</p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-white">No products found</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
