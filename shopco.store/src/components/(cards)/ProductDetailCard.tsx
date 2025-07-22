import React from "react";
import ProductDetailsTab from "../(products)/ProductDetailsTab";
import ProductImages from "../(products)/ProductImages";
import ProductDetail from "../(products)/ProductDetail";
import { Product } from "@/dummyData/products";

interface ProductImageProps {
  product: Product;
}

const ProductDetailCard = ({ product }: ProductImageProps) => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <ProductImages product={product} />

          {/* Product Details */}
          <ProductDetail product={product} />
        </div>

        {/* Product Details Tabs */}
        <ProductDetailsTab product={product} />
      </div>
    </>
  );
};

export default ProductDetailCard;
