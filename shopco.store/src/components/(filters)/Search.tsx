"use client";

import React from "react";
import { Input } from "../ui/input";

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <Input
      placeholder="Search products..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="max-w-md"
    />
  );
};

export default SearchFilter;
