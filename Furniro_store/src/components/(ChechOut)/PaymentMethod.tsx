import React from "react";
import { CreditCard } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const PaymentMethod = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
            <RadioGroupItem value="credit-card" id="credit-card" />
            <Label htmlFor="credit-card" className="flex-1 font-medium">
              Credit Card
            </Label>
            <div className="flex gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-6"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
            <RadioGroupItem value="bank-transfer" id="bank-transfer" />
            <Label htmlFor="bank-transfer" className="flex-1 font-medium">
              Bank Transfer
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
            <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" />
            <Label htmlFor="cash-on-delivery" className="flex-1 font-medium">
              Cash on Delivery
            </Label>
          </div>
        </RadioGroup>

        {paymentMethod === "credit-card" && (
          <div className="mt-6 space-y-4 p-4 bg-muted rounded-lg">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="mt-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input id="expiryDate" placeholder="MM/YY" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" className="mt-2" />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentMethod;
