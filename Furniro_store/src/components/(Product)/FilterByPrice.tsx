import { Slider } from "@/components/ui/slider";
import React from "react";
import { Card } from "../ui/card";

interface FilterProps {
  priceRange: number[];
  // setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  setPriceRange: (range: number[]) => void;
  formatPrice: (arg0: number) => string;
}

const FilterByPrice: React.FC<FilterProps> = ({
  priceRange,
  setPriceRange,
  formatPrice,
}) => {
  return (
    <>
      <Card className="p-6">
        <h3 className="font-bold text-foreground mb-4 text-lg">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={15000000}
            step={100000}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span className="font-medium">{formatPrice(priceRange[0])}</span>
            <span className="font-medium">{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </Card>
    </>
  );
};

export default FilterByPrice;
