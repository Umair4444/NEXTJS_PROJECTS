import React from "react";
import { CreditCard, Landmark, Truck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface PaymentMethodProps {
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMethod,
  setPaymentMethod,
}) => {
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
          {/* Credit Card */}
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

          {/* Bank Transfer */}
          <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
            <RadioGroupItem value="bank-transfer" id="bank-transfer" />
            <Label htmlFor="bank-transfer" className="flex-1 font-medium">
              Bank Transfer
            </Label>
            <Landmark className="h-5 w-5 text-muted-foreground" />
          </div>

          {/* Cash on Delivery */}
          <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
            <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" />
            <Label htmlFor="cash-on-delivery" className="flex-1 font-medium">
              Cash on Delivery
            </Label>
            <Truck className="h-5 w-5 text-muted-foreground" />
          </div>
        </RadioGroup>

        {/* Conditional Sections */}
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

        {paymentMethod === "bank-transfer" && (
          <div className="mt-6 space-y-3 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              Please transfer to the account below and upload proof of payment:
            </p>
            <div>
              <Label>Account Number</Label>
              <Input value="123-456-7890" readOnly className="mt-1" />
            </div>
            <div>
              <Label>Bank Name</Label>
              <Input value="Bank of Example" readOnly className="mt-1" />
            </div>
          </div>
        )}

        {paymentMethod === "cash-on-delivery" && (
          <div className="mt-6 p-4 bg-muted rounded-lg text-sm text-muted-foreground">
            Pay with cash or card upon delivery. Please prepare the exact amount
            if possible.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentMethod;
