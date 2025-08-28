import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

interface TermsAndPlaceOrderProps {
  acceptTerms: boolean;
  setAcceptTerms: React.Dispatch<React.SetStateAction<boolean>>;
}

const TermsAndPlaceOrder: React.FC<TermsAndPlaceOrderProps> = ({
  acceptTerms,
  setAcceptTerms,
}) => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-2">
          <Checkbox
            id="terms"
            checked={acceptTerms}
            onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
          />
          <Label htmlFor="terms" className="text-sm leading-relaxed">
            I agree to the{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={!acceptTerms}
        >
          Place Order
        </Button>
      </CardContent>
    </Card>
  );
};

export default TermsAndPlaceOrder;
