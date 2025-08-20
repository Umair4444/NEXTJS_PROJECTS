import { Label } from "@/components/ui/label";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Star,
  Minus,
  Plus,
  CheckCircle,
  AlertCircle,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ProductData } from "@/lib/mockInterfaceProduct";

interface ProductDetailCardProps {
  productData: ProductData;
  formatPrice: (price: number) => string;
  initialQuantity?: number;
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({
  productData,
  formatPrice,
  initialQuantity = 1,
}) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prev) => {
      if (increment && prev < productData.stockCount) {
        return prev + 1;
      }
      return prev > 1 ? prev - 1 : 1;
    });
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      id: productData.id,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });
    alert("Product added to cart!");
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productData.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) =>
        (prev - 1 + productData.images.length) % productData.images.length
    );
  };
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted/30 shadow-xl">
                <img
                  src={productData.images[selectedImage]}
                  alt={productData.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Zoom Button */}
                <button
                  onClick={() => setIsZoomed(true)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white"
                >
                  <ZoomIn className="h-5 w-5" />
                </button>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {productData.isNew && (
                    <Badge className="bg-green-500 text-white shadow-lg">
                      NEW
                    </Badge>
                  )}
                  {productData.isOnSale && productData.discount && (
                    <Badge className="bg-red-500 text-white shadow-lg">
                      -{productData.discount}% OFF
                    </Badge>
                  )}
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {productData.images.length}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-5 gap-3">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? "border-primary shadow-lg scale-105"
                      : "border-border hover:border-primary/50 hover:scale-102"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${productData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  variant="outline"
                  className="border-primary text-primary"
                >
                  {productData.category}
                </Badge>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(productData.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {productData.rating} ({productData.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
                {productData.name}
              </h1>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {formatPrice(productData.price)}
                </span>
                {productData.originalPrice && (
                  <span className="text-2xl text-muted-foreground line-through">
                    {formatPrice(productData.originalPrice)}
                  </span>
                )}
                {productData.isOnSale && productData.discount && (
                  <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                    Save {productData.discount}%
                  </Badge>
                )}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {productData.description}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-6">
              {/* Color Selection */}
              {productData.colors && productData.colors.length > 0 && (
                <div>
                  <Label className="text-lg font-semibold text-foreground mb-3 block">
                    Color
                  </Label>
                  <div className="flex gap-3">
                    {productData.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 text-sm font-medium ${
                          selectedColor === color
                            ? "border-primary bg-primary text-primary-foreground shadow-lg"
                            : "border-border hover:border-primary hover:shadow-md"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {productData.sizes && productData.sizes.length > 0 && (
                <div>
                  <Label className="text-lg font-semibold text-foreground mb-3 block">
                    Size
                  </Label>
                  <div className="flex gap-3">
                    {productData.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 text-sm font-medium ${
                          selectedSize === size
                            ? "border-primary bg-primary text-primary-foreground shadow-lg"
                            : "border-border hover:border-primary hover:shadow-md"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Stock */}
              <div className="flex items-center gap-8">
                <div>
                  <Label className="text-lg font-semibold text-foreground mb-3 block">
                    Quantity
                  </Label>
                  <div className="flex items-center border-2 border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleQuantityChange(false)}
                      className="p-3 hover:bg-muted transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="px-6 py-3 min-w-20 text-center font-semibold text-lg">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(true)}
                      className="p-3 hover:bg-muted transition-colors"
                      disabled={quantity >= productData.stockCount}
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div>
                  <Label className="text-lg font-semibold text-foreground mb-3 block">
                    Availability
                  </Label>
                  <div className="flex items-center gap-2">
                    {productData.inStock ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    <span className="text-foreground font-medium">
                      {productData.inStock
                        ? `${productData.stockCount} in stock`
                        : "Out of stock"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 py-4 text-lg font-semibold shadow-lg"
                  disabled={!productData.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 py-4 border-2"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 py-4 border-2"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">
                  Free Delivery
                </h4>
                <p className="text-xs text-muted-foreground">
                  Orders over Rp 2M
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <RotateCcw className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">
                  90 Days Return
                </h4>
                <p className="text-xs text-muted-foreground">
                  If not satisfied
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">
                  Secure Payment
                </h4>
                <p className="text-xs text-muted-foreground">100% protected</p>
              </div>
            </div>

            {/* Product Meta */}
            <div className="space-y-3 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-medium min-w-20">
                  SKU:
                </span>
                <span className="text-foreground font-mono">
                  {productData.sku}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-medium min-w-20">
                  Category:
                </span>
                <Link
                  href={`/category/${productData.category.toLowerCase()}`}
                  className="text-primary hover:underline font-medium"
                >
                  {productData.category}
                </Link>
              </div>
              {productData.tags && productData.tags.length > 0 && (
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground font-medium min-w-20">
                    Tags:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {productData.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-3xl max-h-[90vh] flex items-center">
            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 bg-white/70 rounded-full p-3"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <img
              src={productData.images[selectedImage]}
              alt={productData.name}
              className="object-contain rounded-lg max-h-[90vh]"
            />

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 bg-white/70 rounded-full p-3"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Close */}
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-2 right-4 text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetailCard;
