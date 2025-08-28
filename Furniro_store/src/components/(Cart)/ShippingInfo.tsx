import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const ShippingInfo = () => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <h3 className="font-semibold text-foreground">Shipping Information</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Badge className="bg-green-500">FREE</Badge>
            <span className="text-muted-foreground">
              Standard Delivery (5-7 days)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Rp 50,000</Badge>
            <span className="text-muted-foreground">
              Express Delivery (2-3 days)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Rp 100,000</Badge>
            <span className="text-muted-foreground">Same Day Delivery</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShippingInfo;
