import React from "react";
import { Separator } from "../ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const OrderSummary = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Order Items */}
        <div className="space-y-4">
          {orderItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{item.name}</h4>
                <div className="text-sm text-muted-foreground">
                  Qty: {item.quantity}
                </div>
              </div>
              <span className="font-medium">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>

        <Separator />

        {/* Order Totals */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span>
              {shippingCost === 0 ? "Free" : formatPrice(shippingCost)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span>{formatPrice(tax)}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
