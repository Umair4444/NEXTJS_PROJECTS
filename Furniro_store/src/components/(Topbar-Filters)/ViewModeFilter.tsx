import React from "react";
import { Button } from "../ui/button";
import { Grid, List } from "lucide-react";

interface FilterProps {
  viewMode: string;
  setViewMode: (mode: "list" | "grid") => void;
}

const ViewMode: React.FC<FilterProps> = ({ viewMode, setViewMode }) => {
  return (
    <div className="flex items-center border border-border rounded-lg bg-background">
      <Button
        variant={viewMode === "grid" ? "default" : "ghost"}
        size="sm"
        onClick={() => setViewMode("grid")}
        className="rounded-r-none"
      >
        <Grid className="h-4 w-4" />
      </Button>
      <Button
        variant={viewMode === "list" ? "default" : "ghost"}
        size="sm"
        onClick={() => setViewMode("list")}
        className="rounded-l-none"
      >
        <List className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ViewMode;
