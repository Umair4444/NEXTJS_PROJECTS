"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/(Shared)/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertCircle,
  Heart,
  ShoppingCart,
  Share2,
  Minus,
  Plus,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Eye,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  CheckCircle,
  MessageCircle,
  Leaf,
} from "lucide-react";

// Define TypeScript interfaces for product data
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription?: string;
  isNew?: boolean;
  isOnSale?: boolean;
  discount?: number;
  rating: number;
  reviewCount: number;
  sku: string;
  inStock: boolean;
  stockCount: number;
  images: string[];
  colors?: string[];
  sizes?: string[];
  materials?: string[];
  specifications: {
    dimensions: string;
    weight: string;
    material: string;
    color?: string;
    warranty: string;
    assembly?: string;
    maxWeight?: string;
    origin?: string;
  };
  features?: string[];
  sustainability?: string[];
  tags?: string[];
}

interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isOnSale?: boolean;
  originalPrice?: number;
}

// Enhanced product data with multiple products
const productDatabase: Product[] = [
  {
    id: "1",
    name: "Syltherine Premium Chair",
    category: "Chair",
    price: 2500000,
    originalPrice: 3500000,
    description:
      "Experience unparalleled comfort with our flagship chair, featuring premium oak construction and luxury fabric upholstery.",
    longDescription:
      "The Syltherine Premium Chair represents the pinnacle of modern furniture design. Crafted from sustainably sourced oak wood and upholstered in premium fabric, this chair seamlessly blends contemporary aesthetics with ergonomic excellence. Each piece is meticulously handcrafted by skilled artisans, ensuring exceptional quality and durability that will last for generations.",
    isNew: false,
    isOnSale: true,
    discount: 30,
    rating: 4.8,
    reviewCount: 342,
    sku: "FUR-SYL-001",
    inStock: true,
    stockCount: 15,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&sat=-100",
    ],
    colors: ["Brown", "Black", "Cream", "Navy"],
    sizes: ["Small", "Medium", "Large"],
    materials: ["Oak Wood", "Premium Fabric", "Steel Frame"],
    specifications: {
      dimensions: "75cm × 55cm × 85cm",
      weight: "12 kg",
      material: "Oak Wood, Premium Fabric",
      color: "Multiple Options",
      warranty: "2 years",
      assembly: "Required (30 minutes)",
      maxWeight: "120 kg",
      origin: "Handcrafted in Indonesia",
    },
    features: [
      "Ergonomic design for maximum comfort",
      "Premium sustainably sourced oak wood",
      "High-quality stain-resistant fabric",
      "360-degree swivel mechanism",
      "Height adjustable from 45-55cm",
      "Easy-clean maintenance",
      "Available in 4 stunning colors",
      "Professional assembly included",
    ],
    sustainability: [
      "FSC-certified sustainable wood",
      "Low-emission manufacturing process",
      "Recyclable materials",
      "Carbon-neutral shipping",
    ],
    tags: ["Furniture", "Chair", "Premium", "Ergonomic", "Sustainable"],
  },
  {
    id: "2",
    name: "Leviosa Modern Chair",
    category: "Chair",
    price: 2500000,
    description: "Sleek and modern chair perfect for contemporary spaces.",
    longDescription:
      "The Leviosa Modern Chair brings contemporary elegance to any space with its clean lines and sophisticated design.",
    isNew: false,
    isOnSale: false,
    rating: 4.3,
    reviewCount: 186,
    sku: "FUR-LEV-002",
    inStock: true,
    stockCount: 8,
    images: [
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
    ],
    colors: ["Gray", "White", "Black"],
    sizes: ["Medium", "Large"],
    materials: ["Aluminum", "Fabric"],
    specifications: {
      dimensions: "70cm × 50cm × 80cm",
      weight: "8 kg",
      material: "Aluminum, Fabric",
      warranty: "1 year",
    },
    features: [
      "Modern minimalist design",
      "Lightweight aluminum frame",
      "Comfortable seat padding",
    ],
    tags: ["Furniture", "Chair", "Modern", "Minimalist"],
  },
];

const relatedProducts: RelatedProduct[] = [
  {
    id: "2",
    name: "Leviosa Modern Chair",
    price: 2500000,
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop",
    category: "Chair",
    rating: 4.3,
  },
  {
    id: "3",
    name: "Lolito Luxury Sofa",
    price: 7000000,
    originalPrice: 14000000,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    category: "Sofa",
    isOnSale: true,
    rating: 4.7,
  },
  {
    id: "4",
    name: "Respira Outdoor Table",
    price: 500000,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop",
    category: "Table",
    isNew: true,
    rating: 4.5,
  },
  {
    id: "5",
    name: "Grifo Designer Lamp",
    price: 1500000,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    category: "Lighting",
    rating: 4.6,
  },
];

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("description");

  // Get product data
  const productData = productDatabase.find(
    (product) => product.id === params.id
  );

  // Handle case when product is not found
  if (!productData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="py-12">
          <div className="container mx-auto px-6">
            <Card className="p-8 shadow-lg">
              <CardContent>
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  Product Not Found
                </h1>
                <p className="text-muted-foreground">
                  Sorry, the product you're looking for does not exist or is no
                  longer available.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/shop">Return to Shop</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString()}`;
  };

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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <section className="bg-gradient-to-r from-secondary/20 to-secondary/10 py-6">
        <div className="container mx-auto px-6">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link
              href="/shop"
              className="hover:text-foreground transition-colors"
            >
              Shop
            </Link>
            <span className="mx-2">›</span>
            <Link
              href={`/category/${productData.category.toLowerCase()}`}
              className="hover:text-foreground transition-colors"
            >
              {productData.category}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground font-medium">
              {productData.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
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
                  <p className="text-xs text-muted-foreground">
                    100% protected
                  </p>
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
      </section>

      {/* Product Details Tabs */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto h-14">
              <TabsTrigger value="description" className="text-lg">
                Description
              </TabsTrigger>
              <TabsTrigger value="specifications" className="text-lg">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-lg">
                Reviews ({productData.reviewCount})
              </TabsTrigger>
              <TabsTrigger value="sustainability" className="text-lg">
                Sustainability
              </TabsTrigger>
            </TabsList>

            <div className="mt-12">
              <TabsContent value="description" className="space-y-8">
                <div className="max-w-4xl mx-auto">
                  <Card className="p-8 shadow-lg">
                    <CardContent className="space-y-6">
                      {productData.longDescription ? (
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {productData.longDescription}
                        </p>
                      ) : (
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {productData.description}
                        </p>
                      )}

                      <Separator />

                      {productData.features &&
                        productData.features.length > 0 && (
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                              <Award className="h-6 w-6 text-primary" />
                              Key Features
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              {productData.features.map((feature, index) => (
                                <div
                                  key={index}
                                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                >
                                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                  <span className="text-foreground">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="space-y-8">
                <div className="max-w-4xl mx-auto">
                  <Card className="p-8 shadow-lg">
                    <CardContent className="space-y-6">
                      <h3 className="text-2xl font-bold text-foreground mb-6">
                        Product Specifications
                      </h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          {Object.entries(productData.specifications).map(
                            ([key, value]) =>
                              value && (
                                <div
                                  key={key}
                                  className="flex justify-between items-center p-3 border-b border-border"
                                >
                                  <span className="text-muted-foreground font-medium capitalize">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                  </span>
                                  <span className="text-foreground font-semibold">
                                    {value}
                                  </span>
                                </div>
                              )
                          )}
                        </div>

                        <div className="space-y-4">
                          {productData.materials &&
                            productData.materials.length > 0 && (
                              <>
                                <h4 className="text-lg font-semibold text-foreground">
                                  Materials Used
                                </h4>
                                <div className="space-y-2">
                                  {productData.materials.map((material) => (
                                    <div
                                      key={material}
                                      className="flex items-center gap-2 p-2 bg-muted/30 rounded-lg"
                                    >
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      <span className="text-foreground">
                                        {material}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}

                          <h4 className="text-lg font-semibold text-foreground mt-6">
                            Care Instructions
                          </h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Clean with a soft, dry cloth</li>
                            <li>
                              • Avoid direct sunlight for extended periods
                            </li>
                            <li>• Use coasters to prevent water rings</li>
                            <li>• Check and tighten screws periodically</li>
                            <li>
                              • Professional cleaning recommended annually
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-8">
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Review Summary */}
                  <Card className="p-8 shadow-lg">
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-foreground mb-2">
                            {productData.rating}
                          </div>
                          <div className="flex items-center justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-6 w-6 ${
                                  i < Math.floor(productData.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground">
                            Based on {productData.reviewCount} reviews
                          </p>
                        </div>

                        <div className="space-y-3">
                          {/* TODO: Replace with dynamic review data if available */}
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div
                              key={rating}
                              className="flex items-center gap-3"
                            >
                              <span className="text-sm font-medium w-8">
                                {rating}★
                              </span>
                              <div className="flex-1 bg-muted rounded-full h-3">
                                <div
                                  className="bg-yellow-400 h-3 rounded-full transition-all duration-1000"
                                  style={{
                                    width: `${
                                      rating === 5
                                        ? 65
                                        : rating === 4
                                        ? 20
                                        : rating === 3
                                        ? 10
                                        : rating === 2
                                        ? 3
                                        : 2
                                    }%`,
                                  }}
                                />
                              </div>
                              <span className="text-sm text-muted-foreground w-12">
                                {rating === 5
                                  ? 222
                                  : rating === 4
                                  ? 68
                                  : rating === 3
                                  ? 34
                                  : rating === 2
                                  ? 10
                                  : 8}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Individual Reviews */}
                  <div className="space-y-6">
                    {[
                      {
                        name: "Sarah M.",
                        rating: 5,
                        date: "2 weeks ago",
                        verified: true,
                        comment:
                          "Absolutely love this chair! The quality is outstanding and it's incredibly comfortable. Perfect addition to our dining room. The oak wood finish is beautiful and the fabric is very high quality.",
                        helpful: 24,
                      },
                      {
                        name: "Mike R.",
                        rating: 4,
                        date: "1 month ago",
                        verified: true,
                        comment:
                          "Great chair overall. Assembly was straightforward and the finish is beautiful. Very sturdy and well-made. Would definitely recommend to others!",
                        helpful: 16,
                      },
                      {
                        name: "Emma L.",
                        rating: 5,
                        date: "3 weeks ago",
                        verified: true,
                        comment:
                          "Exceeded my expectations. The craftsmanship is evident and it feels very sturdy. Worth every penny. The customer service was also excellent when I had questions.",
                        helpful: 31,
                      },
                    ].map((review, index) => (
                      <Card
                        key={index}
                        className="p-6 shadow-md hover:shadow-lg transition-shadow"
                      >
                        <CardContent className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <Users className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-foreground">
                                    {review.name}
                                  </span>
                                  {review.verified && (
                                    <Badge
                                      variant="outline"
                                      className="text-xs text-green-600 border-green-600"
                                    >
                                      Verified Purchase
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < review.rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-muted-foreground"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    {review.date}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">
                            {review.comment}
                          </p>

                          <div className="flex items-center gap-4 pt-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-muted-foreground"
                            >
                              <MessageCircle className="h-4 w-4 mr-1" />
                              Reply
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-muted-foreground"
                            >
                              👍 Helpful ({review.helpful})
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sustainability" className="space-y-8">
                <div className="max-w-4xl mx-auto">
                  <Card className="p-8 shadow-lg">
                    <CardContent className="space-y-6">
                      <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Leaf className="h-10 w-10 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          Sustainable & Eco-Friendly
                        </h3>
                        <p className="text-muted-foreground">
                          We care about our planet and future generations
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {productData.sustainability &&
                        productData.sustainability.length > 0 ? (
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-4">
                              Our Commitments
                            </h4>
                            <div className="space-y-3">
                              {productData.sustainability.map(
                                (commitment, index) => (
                                  <div
                                    key={index}
                                    className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20"
                                  >
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-foreground">
                                      {commitment}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        ) : (
                          <div>
                            <p className="text-muted-foreground">
                              No specific sustainability information available
                              for this product.
                            </p>
                          </div>
                        )}

                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-4">
                            Environmental Impact
                          </h4>
                          <div className="space-y-4">
                            <div className="p-4 bg-muted/30 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">
                                  Carbon Footprint
                                </span>
                                <span className="text-green-600 font-semibold">
                                  -40% vs industry avg
                                </span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full w-3/5"></div>
                              </div>
                            </div>

                            <div className="p-4 bg-muted/30 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">
                                  Sustainable Materials
                                </span>
                                <span className="text-green-600 font-semibold">
                                  100%
                                </span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full w-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
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
    </div>
  );
}
