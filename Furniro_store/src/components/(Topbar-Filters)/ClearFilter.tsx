import { Filter, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  isNew: boolean;
  isOnSale: boolean;
  discount?: number;
  rating: number;
  reviews: number;
}

interface Filter {
  onSale: boolean;
  newArrivals: boolean;
  freeShipping: boolean;
  rating: number;
}

interface FilterProps {
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
  filteredProducts: Product[];
  products: Product[];
  selectedCategory: string;
  searchQuery: string;
  filters: Filter;
  clearFilters: () => void;
}

const ClearFilter: React.FC<FilterProps> = ({
  showFilters,
  setShowFilters,
  filteredProducts,
  products,
  selectedCategory,
  searchQuery,
  filters,
  clearFilters,
}) => {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden"
      >
        <Filter className="h-4 w-4 mr-2" />
        Filters
      </Button>
      <span className="text-foreground font-medium">
        {filteredProducts.length} of {products.length} products
      </span>
      {(selectedCategory !== "All" ||
        searchQuery ||
        filters.onSale ||
        filters.newArrivals) && (
        <Button
          variant="secondary"
          size="sm"
          onClick={clearFilters}
          className="group text-primary font-medium bg-primary/10 hover:bg-primary/20"
        >
          Clear filters
          <Trash2 className="text-red-500 group-hover:text-red-700" />
        </Button>
      )}
    </div>
  );
};

export default ClearFilter;
