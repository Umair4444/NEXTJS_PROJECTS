import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SlidersHorizontal, X, Grid, List } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

// Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  rating?: number;
  isOnSale?: boolean;
}

export type SortOption =
  | "default"
  | "price-low"
  | "price-high"
  | "name"
  | "rating"
  | "newest"
  | "popular";

export type ViewMode = "grid" | "list";

export interface FilterBarProps {
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  filteredProducts: Product[];
  CategoryData: Product[];
  hasActiveFilters: boolean;
  clearFilters: () => void;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  showFilters,
  setShowFilters,
  filteredProducts,
  CategoryData,
  hasActiveFilters,
  clearFilters,
  itemsPerPage,
  setItemsPerPage,
  setCurrentPage,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
        <span className="text-foreground font-medium">
          {filteredProducts.length} of {CategoryData.length} products
        </span>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-primary"
          >
            <X className="h-4 w-4 mr-1" />
            Clear filters
          </Button>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Show:</span>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={(value) => {
              setItemsPerPage(Number(value));
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="24">24</SelectItem>
              <SelectItem value="48">48</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center border border-border rounded-lg bg-background">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className="rounded-r-none"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
            className="rounded-l-none"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
