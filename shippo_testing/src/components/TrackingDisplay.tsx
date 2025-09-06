"use client";

import { useState } from "react";

interface TrackingDisplayProps {
  transaction: any;
}

export default function TrackingDisplay({ transaction }: TrackingDisplayProps) {
  const [trackingData, setTrackingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    if (!transaction?.trackingNumber) return;

    setLoading(true);
    try {
      const response = await fetch(
        `/api/shippo/track?trackingNumber=${
          transaction.trackingNumber
        }&carrier=${transaction.rate?.provider?.toLowerCase() || "usps"}`
      );
      const data = await response.json();
      console.log("track", data);

      if (data.success) {
        setTrackingData(data.tracking);
      } else {
        alert("Error tracking package: " + data.error);
      }
    } catch (error) {
      console.error("Error tracking package:", error);
      alert("Error tracking package");
    } finally {
      setLoading(false);
    }
  };

  if (!transaction) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
      <h3 className="text-xl font-bold mb-4 text-green-600">
        🎉 Shipment Created Successfully!
      </h3>

      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong className="text-gray-700">Tracking Number:</strong>
            <div className="text-lg font-mono bg-white p-2 rounded border mt-1">
              {transaction.trackingNumber}
            </div>
          </div>
          <div>
            <strong className="text-gray-700">Status:</strong>
            <div
              className={`text-lg font-semibold mt-1 ${
                transaction.status === "SUCCESS"
                  ? "text-green-600"
                  : "text-yellow-600"
              }`}
            >
              {transaction.status}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        {transaction.labelUrl && (
          <a
            href={transaction.labelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            📄 Download Shipping Label
          </a>
        )}
        {transaction.trackingUrlProvider && (
          <a
            href={transaction.trackingUrlProvider}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors inline-flex items-center"
          >
            🔗 Track on Carrier Site
          </a>
        )}
      </div>

      <button
        onClick={handleTrack}
        disabled={loading || !transaction.trackingNumber}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? "🔄 Tracking..." : "📦 Get Detailed Tracking Info"}
      </button>

      {trackingData && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold text-lg mb-2">📍 Tracking Information</h4>
          <div className="bg-white p-3 rounded border">
            <pre className="text-sm overflow-x-auto">
              {JSON.stringify(trackingData, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
