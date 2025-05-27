"use client";
import React, { useEffect, useState } from "react";
import CheckOutCard from "./CheckOutCard";
import TopCard from "@/components/ui/TopCard";

const CheckOut = () => {
  const [stripe, setStripe] = useState<any>(null);

  useEffect(() => {
    // Load Stripe script and initialize Stripe once loaded
    const loadStripe = async () => {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/";
      script.onload = () => {
        if (window.Stripe) {
          const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
          if (publishableKey) {
            const stripeInstance = window.Stripe(publishableKey);
            setStripe(stripeInstance); // Set the Stripe instance once loaded
          } else {
            console.error("Stripe publishable key is not defined");
          }
        } else {
          console.error("Stripe.js not loaded");
        }
      };
      document.body.appendChild(script);
    };

    loadStripe(); // Call the load function
  }, []);

  return (
    <div>
      <TopCard title="Checkout Page" />
      <div className="flex flex-col md:flex-row bg-white items-start justify-center">
        {/* <div className="sm:w-full md:w-3/5 lg:w-2/3">
          <CheckOutForm />
        </div> */}

        <div className="w-full mr-4 my-10">
          <CheckOutCard />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
