import { Star, Heart, Eye, ShoppingCart, Users } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ProductProps } from "@/lib/mockCategoriesData";

interface PaginatedProductProps {
  product: ProductProps;
  viewMode: "grid" | "list";
}

const PaginatedProductsCard: React.FC<PaginatedProductProps> = ({
  product,
  viewMode,
}) => {
  const formatPrice = (price: number) => {
    return `PKR ${price.toLocaleString()}`;
  };

  return (
    <Card
      key={product.id}
      className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-b from-card to-card/50"
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

          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-green-500 text-white shadow-lg">NEW</Badge>
            )}
            {product.isOnSale && product.discount && (
              <Badge className="bg-red-500 text-white shadow-lg">
                -{product.discount}%
              </Badge>
            )}
            {product.isBestseller && (
              <Badge className="bg-orange-500 text-white shadow-lg">
                BESTSELLER
              </Badge>
            )}
          </div>

          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <div className="flex gap-3">
              <Button
                variant="secondary"
                size="icon"
                className="h-12 w-12 rounded-full shadow-lg"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="sm" className="shadow-lg px-6">
                <Eye className="h-4 w-4 mr-2" />
                Quick View
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="h-12 w-12 rounded-full shadow-lg"
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <Badge
              variant="outline"
              className="text-xs font-medium border-primary text-primary"
            >
              {product.category}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{product.reviews} reviews</span>
            </div>
          </div>

          <Link href={`/shop/${product.id}`}>
            <h3 className="font-bold text-foreground hover:text-primary transition-colors text-xl leading-tight">
              {product.name}
            </h3>
          </Link>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground text-xl">
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

export default PaginatedProductsCard;
