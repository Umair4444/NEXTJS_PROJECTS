import React from "react";
import { Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/dummyData/products";

interface ProductImageProps {
  product: Product;
}

const ProductDetailsTab = ({ product }: ProductImageProps) => {
  return (
    <>
      <div className="mt-16">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews & Ratings</TabsTrigger>
            <TabsTrigger value="faq">FAQs</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-8">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Product Details</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium quality materials</li>
                <li>• Comfortable fit</li>
                <li>• Machine washable</li>
                <li>• Available in multiple sizes and colors</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-6">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="font-semibold">Customer {review}</span>
                    </div>
                    <p className="text-gray-600">
                      Great quality product! Exactly as described and fits
                      perfectly. Would definitely recommend to others.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="faq" className="mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">
                    What is your return policy?
                  </h4>
                  <p className="text-gray-600">
                    We offer a 30-day return policy for all unworn items with
                    tags attached.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    How do I care for this product?
                  </h4>
                  <p className="text-gray-600">
                    Machine wash cold with like colors. Tumble dry low or hang
                    to dry.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Is this product true to size?
                  </h4>
                  <p className="text-gray-600">
                    Yes, this product runs true to size. Check our size guide
                    for measurements.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ProductDetailsTab;
