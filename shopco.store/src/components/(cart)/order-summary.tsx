import { useCart } from "@/hooks/use-cart";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const OrderSummary = () => {
  const { getTotalPrice } = useCart();

  return (
    <div className="border border-gray-200 rounded-lg p-6 sticky top-4">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount (-20%)</span>
          <span className="text-red-500">
            -${(getTotalPrice() * 0.2).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>$15.00</span>
        </div>
        <Separator />
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${(getTotalPrice() * 0.8 + 15).toFixed(2)}</span>
          {/* <span>Items: {getTotalItems()}</span> */}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add promo code"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-full"
          />
          <Button variant="outline" className="rounded-full bg-transparent">
            Apply
          </Button>
        </div>

        <Button asChild size="lg" className="w-full rounded-full">
          <Link href="/checkout"> Go to Checkout → </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
