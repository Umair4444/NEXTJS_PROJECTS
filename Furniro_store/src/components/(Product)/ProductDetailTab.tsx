import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Award,
  CheckCircle,
  Star,
  Users,
  MessageCircle,
  Leaf,
} from "lucide-react";
import { Product } from "@/lib/mockInterfaceProduct";

interface ProductProps {
  productData: Product;
}

const ProductDetailTab: React.FC<ProductProps> = ({ productData }) => {
  const [activeTab, setActiveTab] = useState<string>("description");

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                          <li>• Avoid direct sunlight for extended periods</li>
                          <li>• Use coasters to prevent water rings</li>
                          <li>• Check and tighten screws periodically</li>
                          <li>• Professional cleaning recommended annually</li>
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
                          <div key={rating} className="flex items-center gap-3">
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
                            No specific sustainability information available for
                            this product.
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
  );
};

export default ProductDetailTab;
