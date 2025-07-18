import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import { Shield } from "lucide-react";

const OrderSummary = () => {
  const { items, getTotalPrice } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingMethod, setShippingMethod] = useState("standard");

  const subtotal = getTotalPrice();
  const discount = subtotal * 0.2;
  const shipping = shippingMethod === "express" ? 25 : 15;
  const total = subtotal - discount + shipping;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Order Items */}
          <div className="space-y-4">
            {items.map((item: any) => (
              <div key={item.id} className="flex gap-3">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  {item.size && (
                    <p className="text-xs text-gray-600">Size: {item.size}</p>
                  )}
                  {item.color && (
                    <p className="text-xs text-gray-600">Color: {item.color}</p>
                  )}
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm">Qty: {item.quantity}</span>
                    <span className="font-medium">${item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Separator />

          {/* Price Breakdown */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount (-20%)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="flex gap-2">
            <Input placeholder="Add promo code" className="flex-1" />
            <Button variant="outline">Apply</Button>
          </div>

          {/* Place Order Button */}
          <Button size="lg" className="w-full rounded-full">
            <Shield className="w-4 h-4 mr-2" />
            Place Order
          </Button>

          <p className="text-xs text-gray-600 text-center">
            By placing your order, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default OrderSummary;
