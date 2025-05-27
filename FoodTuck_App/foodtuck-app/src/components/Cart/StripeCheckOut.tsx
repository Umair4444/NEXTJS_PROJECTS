"use client";

import { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubCurrency from "@/components/Cart/ConverttoSubCurrency";

interface CheckoutPageProps {
  amount: number;
  check: string;
  formData: any; // Data collected from the checkout form
  loading?: boolean;
}

// StripeCheckOut handles the payment confirmation using Stripe
const StripeCheckOut = ({ amount, check, formData }: CheckoutPageProps) => {
  console.log("Form Data in StripeCheckOut:", formData);

  // Determine the host URL (adjust based on your environment)
  const myhost = window.location.host;
  const URL =
    myhost === "localhost:3000"
      ? "http://localhost:3000"
      : "https://food-tuck-qcommerce-app.vercel.app";

  const stripe = useStripe();
  const elements = useElements();

  // Local state to manage errors and loading status
  const [errorMessage, setError] = useState<string>("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  // On component mount, create a PaymentIntent by calling our API endpoint
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!formData || isSubmitted) return;

    setIsSubmitted(true); // Mark as submitted to avoid duplicate calls

    fetch("/api/payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: convertToSubCurrency(amount),
        check,
        formData,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.error("Error creating PaymentIntent:", err));
  }, [amount, check, formData, isSubmitted]);

  // useEffect(() => {
  //   fetch("/api/payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // Send the amount (converted to sub-currency) along with the checkout form data
  //     body: JSON.stringify({
  //       amount: convertToSubCurrency(amount),
  //       check,
  //       formData,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret))
  //     .catch((err) => console.error("Error creating PaymentIntent:", err));
  // }, [amount, check, formData]);

  // Handle payment submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    // Submit the payment details collected by PaymentElement
    const { error: submitErrors }: any = await elements.submit();
    if (submitErrors) {
      setError(submitErrors.message);
      setLoading(false);
      return;
    }

    // Confirm the payment with Stripe
    const { error }: any = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        // Redirect to success page on successful payment
        return_url: `${URL}/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      {/* Show PaymentElement if clientSecret is ready */}
      {clientSecret ? <PaymentElement /> : <p>Loading payment details...</p>}
      {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
      <button
        className="w-full bg-black text-white py-2 mt-5"
        disabled={loading || !stripe}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default StripeCheckOut;
