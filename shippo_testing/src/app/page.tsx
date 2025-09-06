"use client";

import { useState } from "react";
import ShippingForm from "@/components/ShippoForm";
import RatesDisplay from "@/components/RatesDisplay";
import TrackingDisplay from "@/components/TrackingDisplay";
import { Address, Parcel, Rate } from "@/types/shippo";

export default function Home() {
  const [rates, setRates] = useState<Rate[]>([]);
  const [loading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetRates = async (
    addressFrom: Address,
    addressTo: Address,
    parcel: Parcel
  ) => {
    setLoading(true);
    setRates([]);
    setTransaction(null);
    setError(null);

    try {
      const response = await fetch("/api/shippo/rates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addressFrom,
          addressTo,
          parcel,
        }),
      });

      const data = await response.json();
      console.log("rates", data);

      if (data.success) {
        setRates(data.rates);
        if (data.rates.length === 0) {
          setError(
            "No shipping rates available for this route. Please check your addresses."
          );
        }
      } else {
        setError(data.error || "Failed to get shipping rates");
        console.error("Rate fetch error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectRate = async (rateId: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/shippo/shipment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rateId,
        }),
      });

      const data = await response.json();
      console.log("shipment", data);

      if (data.success) {
        setTransaction(data.transaction);
      } else {
        setError(data.error || "Failed to create shipment");
        console.error("Transaction error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🚚 Next.js Shippo Integration
          </h1>
          <p className="text-gray-600 text-lg">
            Compare shipping rates and create labels with Shippo v2.15.0
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <strong>Error:</strong> {error}
          </div>
        )}

        <div className="space-y-8">
          <ShippingForm onGetRates={handleGetRates} loading={loading} />

          <RatesDisplay
            rates={rates}
            onSelectRate={handleSelectRate}
            loading={loading}
          />

          <TrackingDisplay transaction={transaction} />
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Built with Next.js 14, TypeScript, and Shippo v2.15.0</p>
        </div>
      </div>
    </main>
  );
}
