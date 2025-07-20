"use client";

import { useEffect } from "react";
import { useSanityStore } from "@/hooks/useSanityStore"; // update path accordingly
import { Skeleton } from "@/components/ui/skeleton"; // optional: for loading UI
import Image from "next/image";

const ProductPage = () => {
  const { brands, products, fetchAll, isLoading } = useSanityStore();

  // Fetch data once on component mount
  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return (
    <div className="p-6">
      {isLoading ? (
        <div className="grid grid-cols-2 gap-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-48 w-full rounded-xl" />
          ))}
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg p-4 hover:shadow-md transition"
              >
                <div className="relative aspect-[1.1] m-3">
                  <Image
                    fill
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <h3 className="text-lg font-semibold">
                  {product.isNew ? "new" : ""}
                </h3>
                <h3 className="text-lg font-semibold">{product.discount}</h3>
                <h3 className="text-lg font-semibold">{product.rating}</h3>
                <p className="text-sm text-gray-500">${product.price}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
