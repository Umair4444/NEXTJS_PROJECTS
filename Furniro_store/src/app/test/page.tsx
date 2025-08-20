import ProductCard from "@/components/(Product)/ProductCard2";
import React from "react";

const page = () => {
  return (
    <div className="w-1/3">
      <ProductCard
        id={"1"}
        name={"Syltherine"}
        price={1990}
        image={
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop"
        }
      />
    </div>
  );
};

export default page;
