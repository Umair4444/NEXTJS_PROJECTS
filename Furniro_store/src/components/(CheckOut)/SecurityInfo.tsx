import { Shield } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

const SecurityInfo = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 text-center">
          <Shield className="h-8 w-8 text-green-500" />
          <div>
            <h4 className="font-medium text-foreground">Secure Checkout</h4>
            <p className="text-sm text-muted-foreground">
              Your payment information is encrypted and secure
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityInfo;
