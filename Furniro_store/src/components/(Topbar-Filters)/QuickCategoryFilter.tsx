import React from "react";
import { Button } from "../ui/button";

interface FilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

const QuickCategory: React.FC<FilterProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.slice(0, 6).map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(category)}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default QuickCategory;
