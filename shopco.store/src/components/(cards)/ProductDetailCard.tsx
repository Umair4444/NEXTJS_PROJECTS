import React from "react";
import ProductDetailsTab from "../(products)/ProductDetailsTab";
import ProductImages from "../(products)/ProductImages";
import ProductDetail from "../(products)/ProductDetail";
import { Product } from "@/hooks/sanityTypes";

interface ProductProps {
  product: Product;
}

const ProductDetailCard = ({ product }: ProductProps) => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <ProductImages key={product.slug} product={product} />

          {/* Product Details */}
          <ProductDetail key={product.slug} product={product} />
        </div>

        {/* Product Details Tabs */}
        <ProductDetailsTab key={product.slug} product={product} />
      </div>
    </>
  );
};

export default ProductDetailCard;
