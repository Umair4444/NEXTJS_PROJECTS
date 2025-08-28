"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Truck, Shield, MapPin } from "lucide-react";
import CustomerPolicy from "@/components/CustomerPolicy";
import FloatingWindow from "@/components/FloatingWindow";
import PaymentMethod from "@/components/(CheckOut)/PaymentMethod";
import ShippingMethod from "@/components/(CheckOut)/ShippingMethod";
import OrderSummary from "@/components/(CheckOut)/OrderSummary";
import BillingForm from "@/components/(CheckOut)/BillingForm";
import TermsAndPlaceOrder from "@/components/(CheckOut)/TermsAndPlaceOrder";

// Mock order data
const orderItems = [
  {
    id: "1",
    name: "Syltherine",
    price: 2500000,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=80&h=80&fit=crop",
  },
  {
    id: "3",
    name: "Lolito",
    price: 7000000,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=80&h=80&fit=crop",
  },
];

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    country: "Indonesia",
  });
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatPrice = (price: number) => {
    return `PKR ${price.toLocaleString()}`;
  };

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost =
    shippingMethod === "express"
      ? 50000
      : shippingMethod === "same-day"
      ? 100000
      : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shippingCost + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("Please accept the terms and conditions");
      return;
    }
    alert(
      "Order placed successfully! You will receive a confirmation email shortly."
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative h-64 lg:h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=400&fit=crop')",
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
                {
                  label: "Checkout",
                  href: "/checkout",
                },
              ]}
              description="Your Product Checkout Summary"
            />
          </div>
        </div>
      </section>

      <div className=" mx-auto px-6 py-12">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-5 gap-2">
            {/* Order Summary - top on mobile, right on desktop */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <OrderSummary
                formatPrice={formatPrice}
                orderItems={orderItems}
                shippingCost={shippingCost}
              />
            </div>

            {/* Billing + Shipping + Payment */}
            <div className="order-2 lg:order-1 lg:col-span-3 space-y-8">
              <BillingForm
                formData={formData}
                handleInputChange={handleInputChange}
              />

              <ShippingMethod
                shippingMethod={shippingMethod}
                setShippingMethod={setShippingMethod}
              />

              <PaymentMethod
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
              <TermsAndPlaceOrder
                acceptTerms={acceptTerms}
                setAcceptTerms={setAcceptTerms}
              />
            </div>
          </div>
        </form>
      </div>

      {/* CustomerPolicy Section */}
      <CustomerPolicy />
    </div>
  );
}
