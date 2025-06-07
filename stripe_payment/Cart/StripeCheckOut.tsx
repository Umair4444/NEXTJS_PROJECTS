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
}

const StripeCheckOut = ({ amount }: CheckoutPageProps) => {
  // Determine host URL (adjust as necessary)
  const myhost = window.location.host;
  const URL =
    myhost === "localhost:3000"
      ? "http://localhost:3000"
      : "https://food-tuck-qcommerce-app.vercel.app";

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setError] = useState<string>("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  // Create a PaymentIntent on component mount or when amount changes.
  useEffect(() => {
    fetch("/api/payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.error("Error creating PaymentIntent:", err));
  }, [amount]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false); 
      return;
    }

    // Submit the payment details collected by PaymentElement.
    const { error: submitErrors }: any = await elements.submit();
    if (submitErrors) {
      setError(submitErrors.message);
      setLoading(false);
      return;
    }

    // Confirm the payment with the client secret.
    const { error }: any = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
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
