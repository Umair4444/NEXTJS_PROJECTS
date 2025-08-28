import { Filter, Star } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

interface Filters {
  onSale: boolean;
  newArrivals: boolean;
  bestsellers: boolean;
  rating: number;
}

interface SidebarFiltersProps {
  filters: Filters;
  setFilters: (newFilters: Filters) => void;
  priceRange: number[];
  setPriceRange: (newRange: number[]) => void;
  maxPrice: number;
  formatPrice: (price: number) => string;
}

const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  filters,
  setFilters,
  priceRange,
  setPriceRange,
  maxPrice,
  formatPrice,
}) => {
  return (
    <Card className="p-6 shadow-lg">
      <h3 className="font-bold text-foreground mb-6 text-xl flex items-center gap-2">
        <Filter className="h-5 w-5" />
        Filters
      </h3>

      <div className="space-y-4 mb-6">
        <h4 className="font-semibold text-foreground">Price Range</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={maxPrice}
          step={100000}
          className="w-full"
        />
        <div className="flex justify-between text-sm">
          <span className="font-medium">{formatPrice(priceRange[0])}</span>
          <span className="font-medium">{formatPrice(priceRange[1])}</span>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Product Type</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="onSale"
              checked={filters.onSale}
              onCheckedChange={(checked) =>
                setFilters({ ...filters, onSale: checked as boolean })
              }
            />
            <label
              htmlFor="onSale"
              className="text-sm font-medium flex items-center gap-2"
            >
              On Sale
              <Badge variant="destructive" className="text-xs">
                Save up to 50%
              </Badge>
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox
              id="newArrivals"
              checked={filters.newArrivals}
              onCheckedChange={(checked) =>
                setFilters({
                  ...filters,
                  newArrivals: checked as boolean,
                })
              }
            />
            <label
              htmlFor="newArrivals"
              className="text-sm font-medium flex items-center gap-2"
            >
              New Arrivals
              <Badge className="bg-green-500 text-xs">Latest</Badge>
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox
              id="bestsellers"
              checked={filters.bestsellers}
              onCheckedChange={(checked) =>
                setFilters({
                  ...filters,
                  bestsellers: checked as boolean,
                })
              }
            />
            <label
              htmlFor="bestsellers"
              className="text-sm font-medium flex items-center gap-2"
            >
              Bestsellers
              <Badge className="bg-orange-500 text-xs">Popular</Badge>
            </label>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Minimum Rating</h4>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() =>
                setFilters({
                  ...filters,
                  rating: filters.rating === rating ? 0 : rating,
                })
              }
              className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-all duration-200 ${
                filters.rating === rating
                  ? "bg-primary/10 text-primary border border-primary"
                  : "hover:bg-muted border border-transparent"
              }`}
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">& up</span>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SidebarFilters;
