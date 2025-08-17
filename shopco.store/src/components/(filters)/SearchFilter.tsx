// "use client";

// import React from "react";
// import { Input } from "../ui/input";

// interface SearchFilterProps {
//   searchQuery: string;
//   setSearchQuery: (value: string) => void;
//   placeholder: string;

// }

// const SearchFilter: React.FC<SearchFilterProps> = ({
//   searchQuery,
//   setSearchQuery,
//   placeholder,
// }) => {
//   return (
//     <Input
//       placeholder={placeholder}
//       value={searchQuery}
//       onChange={(e) => setSearchQuery(e.target.value)}
//       className="max-w-md"
//     />
//   );
// };

// export default SearchFilter;

"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function SearchFilter({
  placeholder,
  searchQuery,
  setSearchQuery,
  products,
  variant = "desktop",
  showDropdown = true,
}: {
  placeholder: string;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  products: any[];
  variant?: "desktop" | "mobile";
  showDropdown: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`relative ${
        variant === "desktop" ? "w-full max-w-md" : "w-full"
      }`}
    >
      {/* Search Input */}
      <Input
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 200)} // delay for clicking results
        className={`bg-gray-100 border-none rounded-full ${
          variant === "mobile" ? "text-sm py-2 px-3" : "pl-3"
        }`}
      />

      {/* Results Dropdown */}
      {showDropdown && focused && searchQuery && (
        <div
          className={`absolute z-50 bg-white shadow-md rounded-md mt-2 max-h-64 overflow-y-auto ${
            variant === "desktop" ? "w-full" : "w-full left-0"
          }`}
        >
          {products.length > 0 ? (
            products.map((p) => (
              <Link
                key={p._id}
                href={`/products/${p.slug.current}`}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {p.name}
              </Link>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">
              No products found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
