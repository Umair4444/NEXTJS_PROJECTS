import React from "react";
import { Button } from "../ui/button";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-3 mt-16">
      <Button variant="outline" size="sm" className="shadow-sm">
        Previous
      </Button>
      <Button variant="default" size="sm" className="shadow-sm">
        1
      </Button>
      <Button variant="outline" size="sm" className="shadow-sm">
        2
      </Button>
      <Button variant="outline" size="sm" className="shadow-sm">
        3
      </Button>
      <p>......</p>
      <Button variant="outline" size="sm" className="shadow-sm">
        99
      </Button>
      <Button variant="outline" size="sm" className="shadow-sm">
        100
      </Button>
      <Button variant="outline" size="sm" className="shadow-sm">
        Next
      </Button>
    </div>
  );
};

export default Pagination;
