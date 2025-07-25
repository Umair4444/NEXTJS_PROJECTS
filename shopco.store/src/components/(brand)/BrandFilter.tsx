"use client";
import React, { useEffect } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { useSanityStore } from "@/hooks/useSanityStore";

interface BrandFilterContentProps {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedPriceRanges: string[];
  setSelectedPriceRanges: (ranges: string[]) => void;
  showPremiumOnly: boolean;
  setShowPremiumOnly: (value: boolean) => void;
}

const BrandFilter: React.FC<BrandFilterContentProps> = ({
  categories,
  selectedCategories,
  setSelectedCategories,
  selectedPriceRanges,
  setSelectedPriceRanges,
  showPremiumOnly,
  setShowPremiumOnly,
}) => {
  // for dummy data
  // const priceRanges = ["Budget", "Mid-Range", "Premium", "Luxury"];

  // from sanity
  const { brands, fetchAll } = useSanityStore();
  useEffect(() => {
    fetchAll(); // Fetch all data on mount
  }, []);

  const priceRanges = Array.from(
    new Set(
      brands.map((brand) => brand.priceRange).filter(Boolean) // removes null/undefined/empty
    )
  );

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const handlePriceRangeChange = (range: string, checked: boolean) => {
    if (checked) {
      setSelectedPriceRanges([...selectedPriceRanges, range]);
    } else {
      setSelectedPriceRanges(selectedPriceRanges.filter((r) => r !== range));
    }
  };

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(category, checked as boolean)
                }
              />
              <Label htmlFor={`category-${category}`}>{category}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range} className="flex items-center space-x-2">
              <Checkbox
                id={`price-${range}`}
                checked={selectedPriceRanges.includes(range)}
                onCheckedChange={(checked) =>
                  handlePriceRangeChange(range, checked as boolean)
                }
              />
              <Label htmlFor={`price-${range}`}>{range}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Filter */}
      <div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="premium-only"
            checked={showPremiumOnly}
            onCheckedChange={(checked) =>
              setShowPremiumOnly(checked as boolean)
            }
          />
          <Label htmlFor="premium-only">Premium Brands Only</Label>
        </div>
      </div>
    </div>
  );
};

export default BrandFilter;
