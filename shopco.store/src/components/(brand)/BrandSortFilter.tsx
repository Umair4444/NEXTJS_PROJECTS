import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BrandSortFilterProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const BrandSortFilter: React.FC<BrandSortFilterProps> = ({
  sortBy,
  setSortBy,
}) => {
  return (
    <>
      <div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="products">Product Count</SelectItem>
            <SelectItem value="founded">Founded Year</SelectItem>
            <SelectItem value="country">Country</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default BrandSortFilter;
