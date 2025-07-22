import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react";
import BrandFilter from "./BrandFilter";

interface BrandFilterContentProps {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedPriceRanges: string[];
  setSelectedPriceRanges: (ranges: string[]) => void;
  showPremiumOnly: boolean;
  setShowPremiumOnly: (value: boolean) => void;
}

const MobileFilter: React.FC<BrandFilterContentProps> = ({
  categories,
  selectedCategories,
  setSelectedCategories,
  selectedPriceRanges,
  setSelectedPriceRanges,
  showPremiumOnly,
  setShowPremiumOnly,
}) => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden bg-transparent">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>
              Filter brands by category, price range, and more
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            {/* Brand Filter */}
            <BrandFilter
              categories={categories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedPriceRanges={selectedPriceRanges}
              setSelectedPriceRanges={setSelectedPriceRanges}
              showPremiumOnly={showPremiumOnly}
              setShowPremiumOnly={setShowPremiumOnly}
            />
          </div>
        </SheetContent>
      </Sheet>
      
    </>
  );
};

export default MobileFilter;
