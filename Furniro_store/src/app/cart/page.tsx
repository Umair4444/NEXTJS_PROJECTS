"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import FeatureSection from "@/components/CustomerPolicy";
import FloatingWindow from "@/components/FloatingWindow";
import ShippingInfo from "@/components/(Cart)/ShippingInfo";
import PromoCode from "@/components/(Cart)/PromoCode";
import OrderSummary from "@/components/(Cart)/OrderSummary";
import CartItemCard from "@/components/(Cart)/CartItemCard";
import { initialCartItems } from "@/lib/mockCartData";
import CustomerPolicy from "@/components/CustomerPolicy";

interface CartItem {
  id: string;
  name: string;
  image: string;
  size: string;
  color: string;
  price: number;
  originalPrice?: number;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      alert("10% discount applied!");
    } else {
      alert("Invalid promo code");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=400&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
            <span className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-md text-white rounded-full text-sm font-semibold uppercase tracking-wider border border-white/20 mb-2">
              My Shopping Cart
            </span>

            <FloatingWindow
              className="max-w-5xl"
              breadcrumbs={[
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Cart",
                  href: "/cart",
                },
              ]}
              description="Your Product Shopping Cart"
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-6 py-12">
        {cartItems.length === 0 ? (
          // Empty Cart
          <div className="text-center py-20">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like you haven&apos;t added any items to your cart yet.
              Start shopping to fill it up!
            </p>
            <Button asChild size="lg">
              <Link href="/shop">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        ) : (
          // Cart with Items
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-foreground">
                  Shopping Cart
                </h2>
                <span className="text-muted-foreground">
                  {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItemCard
                    key={item.id}
                    item={item}
                    setCartItems={setCartItems}
                  />
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="flex justify-between items-center pt-6">
                <Button variant="outline" asChild>
                  <Link href="/shop">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => setCartItems([])}>
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <OrderSummary
                shipping={shipping}
                subtotal={subtotal}
                tax={tax}
                total={total}
              />

              {/* Promo Code */}
              <PromoCode
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                applyPromoCode={applyPromoCode}
              />

              {/* Shipping Info */}
              <ShippingInfo />
            </div>
          </div>
        )}
      </div>
      {/* Customer Policy Section */}
      <CustomerPolicy />
    </div>
  );
}
