"use client";
import { Star } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";

interface Filters {
  onSale: boolean;
  newArrivals: boolean;
  freeShipping: boolean;
  rating: number;
}

interface FilterProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FilterByRating: React.FC<FilterProps> = ({ filters, setFilters }) => {
  return (
    <Card className="p-6">
      <h3 className="font-bold text-foreground mb-4 text-lg">Minimum Rating</h3>
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((rating) => (
          <button
            key={rating}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                rating: prev.rating === rating ? 0 : rating,
              }))
            }
            className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition-colors ${
              filters.rating === rating
                ? "bg-primary/10 text-primary"
                : "hover:bg-muted"
            }`}
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm">& up</span>
          </button>
        ))}
      </div>
    </Card>
  );
};

export default FilterByRating;
