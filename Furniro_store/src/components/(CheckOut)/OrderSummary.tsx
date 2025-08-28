import React from "react";
import { Separator } from "../ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface OrderItems {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderSummaryProps {
  orderItems: OrderItems[];
  formatPrice: (value: number) => string;
  shippingCost: 0 | 50000 | 100000;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  orderItems,
  formatPrice,
  shippingCost,
}) => {
  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxRate = 0.1; // 10% tax (adjust as needed)
  const tax = subtotal * taxRate;
  const total = subtotal + shippingCost + tax;
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 px-6 pt-4 pb-2">
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
                <div className="font-medium text-right">
                  Price: {formatPrice(item.price * item.quantity)}
                </div>
              </div>
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
          <div className="flex justify-between items-center h-10 text-lg font-semibold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
