import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 128,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    badge: "New",
  },
  {
    id: 3,
    name: "Premium Coffee Maker",
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: 299.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
  },
  {
    id: 5,
    name: "Portable Power Bank",
    price: 39.99,
    originalPrice: 49.99,
    rating: 3.4,
    reviews: 94,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Sale",
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 29.99,
    originalPrice: null,
    rating: 4.3,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
  },
  {
    id: 7,
    name: "4K Webcam",
    price: 89.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 45,
    image: "/placeholder.svg?height=300&width=300",
    badge: "New",
  },
  {
    id: 8,
    name: "Gaming Mouse",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 112,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Sale",
  },
];

export function ProductGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Showing {products.length} products</p>
        <Select defaultValue="featured">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-0">
              <div className="relative aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge
                    className={`absolute top-3 left-3 ${
                      product.badge === "Sale"
                        ? "bg-red-500"
                        : product.badge === "New"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>

              <div className="p-4">
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <Button className="w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
