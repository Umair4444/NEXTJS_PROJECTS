import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Eye, Star } from "lucide-react";
import Link from "next/link";
import { RelatedProduct } from "@/lib/mockInterfaceProduct";

interface ProductProps {
  relatedProducts: RelatedProduct[];
  formatPrice: (value: number) => string;
}

const RelatedProducts: React.FC<ProductProps> = ({
  relatedProducts,
  formatPrice,
}) => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary/20 to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            You Might Also Like
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover more premium furniture pieces that complement your style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 text-white shadow-lg">
                        NEW
                      </Badge>
                    )}
                    {product.isOnSale && (
                      <Badge className="bg-red-500 text-white shadow-lg">
                        SALE
                      </Badge>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">
                      {product.rating}
                    </span>
                  </div>

                  {/* Quick View */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="shadow-lg">
                      <Eye className="h-4 w-4 mr-2" />
                      Quick View
                    </Button>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-bold text-foreground hover:text-primary transition-colors text-lg">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground text-lg">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
