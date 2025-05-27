"use client";

import { useState, useMemo } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import StripeCheckOut from "./StripeCheckOut";
import convertToSubCurrency from "@/components/Cart/ConverttoSubCurrency";

interface StripePaymentProps {
  amount: number;
}

const StripePayment = ({ amount }: StripePaymentProps) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>(null);

  // Memoized Stripe instance
  const stripePromise = useMemo(() => {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      console.error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
      return null;
    }
    return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }, []);

  // Handle form submission from CheckOutForm
  const handleFormSubmit = async (data: any) => {
    // Save the form data locally
    setFormData(data);

    try {
      setErrorMessage(null);
      const requestBody = {
        amount: convertToSubCurrency(amount),
        formData: data,
      };

      console.log("Sending request with:", requestBody);

      const res = await fetch("/api/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!res.ok) throw new Error("Failed to create PaymentIntent");

      const responseData = await res.json();
      console.log("API Response:", responseData);
      setClientSecret(responseData.clientSecret);
    } catch (error: any) {
      setErrorMessage(
        error.message || "An error occurred while processing payment."
      );
      console.error("Error fetching clientSecret:", error);
    }
  };

  return (
    <div className="bg-gray-200 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full">
        <h2 className="text-2xl font-bold text-black text-center mb-4">
          Secure Payment
        </h2>
        <div className="bg-yellow-400 text-black font-semibold text-lg p-4 rounded-lg text-center mb-6">
          Total Bill: ${amount}
        </div>

        {errorMessage && (
          <div className="bg-red-500 text-white text-center p-3 rounded-lg mb-4">
            {errorMessage}
          </div>
        )}

        {/* 
          Render the checkout form (to collect shipping/billing data)
          when clientSecret is not available.
        */}
        {!clientSecret && <CheckOutForm onSubmit={handleFormSubmit} />}

        {/* 
          Render the Stripe PaymentElement only when clientSecret is available.
          At that point, wrap the StripeCheckOut component in the Elements provider.
        */}
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <StripeCheckOut
              amount={amount}
              check="checking123"
              formData={formData}
            />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default StripePayment;
