import { categories, products } from "@/lib/mockDataProduct";
import React from "react";
import { Card } from "../ui/card";

interface FilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const FilterByCategory: React.FC<FilterProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <>
      <Card className="p-6">
        <h3 className="font-bold text-foreground mb-4 text-lg">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const count =
              category === "All"
                ? products.length
                : products.filter((p) => p.category === category).length;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex justify-between items-center w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <span className="font-medium">{category}</span>
                <span className="text-sm">({count})</span>
              </button>
            );
          })}
        </div>
      </Card>
    </>
  );
};

export default FilterByCategory;
