"use client";

import React from "react";
import { Input } from "../ui/input";

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  placeholder: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchQuery,
  setSearchQuery,
  placeholder,
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="max-w-md"
    />
  );
};

export default SearchFilter;
