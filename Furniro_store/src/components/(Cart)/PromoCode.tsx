import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

interface CodeProps {
  promoCode: string;
  setPromoCode: (value: string) => void;
  applyPromoCode: () => void;
}

const PromoCode: React.FC<CodeProps> = ({
  promoCode,
  setPromoCode,
  applyPromoCode,
}) => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <h3 className="font-semibold text-foreground">Promo Code</h3>
        <div className="flex gap-2">
          <Input
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <Button variant="outline" onClick={applyPromoCode}>
            Apply
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Try &quot;SAVE10&quot; for 10% off
        </p>
      </CardContent>
    </Card>
  );
};

export default PromoCode;
