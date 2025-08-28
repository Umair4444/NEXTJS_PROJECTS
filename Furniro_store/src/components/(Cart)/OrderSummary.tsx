import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import Link from "next/link";

interface OrderSummaryProps {
  shipping: number;
  subtotal: number;
  tax: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  shipping,
  subtotal,
  tax,
  total,
}) => {
  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString()}`;
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Order Summary</h3>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="text-foreground">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span className="text-foreground">
              {shipping === 0 ? "Free" : formatPrice(shipping)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span className="text-foreground">{formatPrice(tax)}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-foreground">Total</span>
            <span className="text-foreground">{formatPrice(total)}</span>
          </div>
        </div>

        <Button className="w-full" size="lg" asChild>
          <Link href="/checkout">Proceed to Checkout</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
