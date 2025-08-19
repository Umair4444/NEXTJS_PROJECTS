import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isSale,
}: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                NEW
              </span>
            )}
            {isSale && (
              <span className="bg-destructive text-destructive-foreground text-xs font-medium px-2 py-1 rounded">
                SALE
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Add to Cart Overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button className="w-full rounded-none bg-primary/90 hover:bg-primary text-primary-foreground">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          {category && (
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {category}
            </p>
          )}
          <Link href={`/product/${id}`}>
            <h3 className="font-medium text-foreground hover:text-muted-foreground transition-colors line-clamp-2">
              {name}
            </h3>
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
