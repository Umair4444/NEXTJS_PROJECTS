"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/(Shared)/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BreadCrumb from "@/components/BreadCrumb";
import ProductDetailCard from "@/components/(Product)/ProductDetailCard";
import ProductDetailTab from "@/components/(Product)/ProductDetailTab";
import RelatedProducts from "@/components/(Product)/RelatedProducts";
import { productDatabase, relatedProducts } from "@/lib/mockDataProduct";

export default function ProductDetail() {
  const params = useParams<{ id: string }>();

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
                  Sorry, the product you&apos;re looking for does not exist or
                  is no longer available.
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

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <BreadCrumb
        variant="withBg"
        className="text-black hover:text-black "
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          {
            label: productData.category,
            href: `/category/${productData.category.toLowerCase()}`,
          },
        ]}
        productData={productData}
      />

      {/* Product Details */}
      <ProductDetailCard productData={productData} formatPrice={formatPrice} />

      {/* Product Details Tabs */}
      <ProductDetailTab productData={productData} />

      {/* Related Products */}
      <RelatedProducts
        relatedProducts={relatedProducts}
        formatPrice={formatPrice}
      />
    </div>
  );
}
