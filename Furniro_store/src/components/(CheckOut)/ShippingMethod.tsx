import React from "react";
import { Truck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";

interface ShippingMethodProps {
  shippingMethod: string;
  setShippingMethod: (value: string) => void;
}

const ShippingMethod: React.FC<ShippingMethodProps> = ({
  shippingMethod,
  setShippingMethod,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-5 w-5" />
          Shipping Method
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
          {/* Standard Delivery */}
          <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
            <RadioGroupItem value="standard" id="standard" />
            <div className="flex-1 flex justify-between items-center">
              <div>
                <Label htmlFor="standard" className="font-medium">
                  Standard Delivery
                </Label>
                <p className="text-sm text-muted-foreground">
                  5-7 business days
                </p>
              </div>
              <Badge className="bg-green-500 text-white">FREE</Badge>
            </div>
          </div>

          {/* Express Delivery */}
          <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
            <RadioGroupItem value="express" id="express" />
            <div className="flex-1 flex justify-between items-center">
              <div>
                <Label htmlFor="express" className="font-medium">
                  Express Delivery
                </Label>
                <p className="text-sm text-muted-foreground">
                  2-3 business days
                </p>
              </div>
              <span className="font-medium">Rp 50,000</span>
            </div>
          </div>

          {/* Same Day Delivery */}
          <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
            <RadioGroupItem value="same-day" id="same-day" />
            <div className="flex-1 flex justify-between items-center">
              <div>
                <Label htmlFor="same-day" className="font-medium">
                  Same Day Delivery
                </Label>
                <p className="text-sm text-muted-foreground">Within 24 hours</p>
              </div>
              <span className="font-medium">Rp 100,000</span>
            </div>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default ShippingMethod;
