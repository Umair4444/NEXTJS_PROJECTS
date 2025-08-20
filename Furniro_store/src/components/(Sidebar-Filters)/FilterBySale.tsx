import React from "react";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

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

const FilterBySale: React.FC<FilterProps> = ({ filters, setFilters }) => {
  return (
    <>
      <Card className="p-6">
        <h3 className="font-bold text-foreground mb-4 text-lg">Filters</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="onSale"
              checked={filters.onSale}
              onCheckedChange={(checked) =>
                setFilters({ ...filters, onSale: checked as boolean })
              }
            />
            <label htmlFor="onSale" className="text-sm font-medium">
              On Sale
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
            <label htmlFor="newArrivals" className="text-sm font-medium">
              New Arrivals
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox
              id="freeShipping"
              checked={filters.freeShipping}
              onCheckedChange={(checked) =>
                setFilters({
                  ...filters,
                  freeShipping: checked as boolean,
                })
              }
            />
            <label htmlFor="freeShipping" className="text-sm font-medium">
              Free Shipping
            </label>
          </div>
        </div>
      </Card>
    </>
  );
};

export default FilterBySale;
