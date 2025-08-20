import { Star, Heart, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  originalPrice?: number;
  isNew?: boolean;
  isOnSale?: boolean;
  discount?: number;
  rating: number;
  reviews: number;
}

interface CardProps {
  product: Product;
  viewMode: "grid" | "list";
  formatPrice: (price: number) => string;
}

const ProductGridCard: React.FC<CardProps> = ({
  product,
  viewMode,
  formatPrice,
}) => {
  return (
    <Card
      key={product.id}
      className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-b from-card to-card/50"
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
              viewMode === "grid" ? "h-64" : "h-48"
            }`}
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-green-500 text-white shadow-lg">NEW</Badge>
            )}
            {product.isOnSale && (
              <Badge className="bg-red-500 text-white shadow-lg">
                -{product.discount}%
              </Badge>
            )}
          </div>

          {/* Rating */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>

          {/* Action Buttons */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <div className="flex gap-3">
              <Button
                variant="secondary"
                size="icon"
                className="h-10 w-10 rounded-full shadow-lg"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="sm" className="shadow-lg">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs font-medium">
              {product.category}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>({product.reviews})</span>
            </div>
          </div>

          <Link href={`/shop/${product.id}`}>
            <h3 className="font-bold text-foreground hover:text-primary transition-colors text-lg hover:text-red-500">
              {product.name}
            </h3>
          </Link>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-2">
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
  );
};

export default ProductGridCard;
