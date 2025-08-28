import React from "react";
import { Search, X, TrendingUp, Sparkles, Tag } from "lucide-react"; // Added icons
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export interface Filters {
  bestsellers: boolean;
  newArrivals: boolean;
  onSale: boolean;
  rating: number;
}

export interface QuickFilterProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const QuickFilter: React.FC<QuickFilterProps> = ({
  searchQuery,
  setSearchQuery,
  filters,
  setFilters,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center px-4">
      {/* Search Bar */}
      <div className="relative flex-1 w-full md:max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="search"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 py-3 bg-background border-border shadow-sm text-lg"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchQuery("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-5 md:gap-3">
        <Button
          variant={filters.bestsellers ? "default" : "outline"}
          size="sm"
          onClick={() =>
            setFilters({ ...filters, bestsellers: !filters.bestsellers })
          }
          className="rounded-full"
        >
          <TrendingUp className="h-4 w-4 mr-2" />
          Bestsellers
        </Button>

        <Button
          variant={filters.newArrivals ? "default" : "outline"}
          size="sm"
          onClick={() =>
            setFilters({ ...filters, newArrivals: !filters.newArrivals })
          }
          className="rounded-full"
        >
          <Sparkles className="h-4 w-4 mr-2" /> {/* ✨ Icon for New Arrivals */}
          New Arrivals
        </Button>

        <Button
          variant={filters.onSale ? "default" : "outline"}
          size="sm"
          onClick={() => setFilters({ ...filters, onSale: !filters.onSale })}
          className="rounded-full"
        >
          <Tag className="h-4 w-4 mr-2" /> {/* 🏷️ Icon for On Sale */}
          On Sale
        </Button>
      </div>
    </div>
  );
};

export default QuickFilter;
