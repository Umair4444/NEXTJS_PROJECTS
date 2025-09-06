'use client';

import { useState } from 'react';
import { Address, Parcel } from '@/types/shippo';

interface ShippingFormProps {
  onGetRates: (addressFrom: Address, addressTo: Address, parcel: Parcel) => void;
  loading: boolean;
}

export default function ShippingForm({ onGetRates, loading }: ShippingFormProps) {
  const [addressFrom, setAddressFrom] = useState<Address>({
    name: 'John Sender',
    street1: '1 Rosedale',
    city: 'Baltimore',
    state: 'MD',
    zip: '21229',
    country: 'US',
    phone: '410-555-0199',
    email: 'sender@example.com',
  });

  const [addressTo, setAddressTo] = useState<Address>({
    name: 'Jane Recipient',
    street1: '965 Mission St',
    city: 'San Francisco',
    state: 'CA',
    zip: '94103',
    country: 'US',
    phone: '415-555-0199',
    email: 'recipient@example.com',
  });

  const [parcel, setParcel] = useState<Parcel>({
    length: 5,
    width: 5,
    height: 5,
    weight: 2,
    distanceUnit: 'in',
    massUnit: 'lb',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGetRates(addressFrom, addressTo, parcel);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* From Address */}
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 text-blue-600">From Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={addressFrom.name}
              onChange={(e) => setAddressFrom({ ...addressFrom, name: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Street Address"
              value={addressFrom.street1}
              onChange={(e) => setAddressFrom({ ...addressFrom, street1: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              placeholder="City"
              value={addressFrom.city}
              onChange={(e) => setAddressFrom({ ...addressFrom, city: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              placeholder="State"
              value={addressFrom.state}
              onChange={(e) => setAddressFrom({ ...addressFrom, state: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              placeholder="ZIP Code"
              value={addressFrom.zip}
              onChange={(e) => setAddressFrom({ ...addressFrom, zip: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Country (e.g., US)"
              value={addressFrom.country}
              onChange={(e) => setAddressFrom({ ...addressFrom, country: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* To Address */}
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 text-green-600">To Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={addressTo.name}
              onChange={(e) => setAddressTo({ ...addressTo, name: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
              required
            />
            <input
              type="text"
              placeholder="Street Address"
              value={addressTo.street1}
              onChange={(e) => setAddressTo({ ...addressTo, street1: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
              required
            />
            <input
              type="text"
              placeholder="City"
              value={addressTo.city}
              onChange={(e) => setAddressTo({ ...addressTo, city: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
              required
            />
            <input
              type="text"
              placeholder="State"
              value={addressTo.state}
              onChange={(e) => setAddressTo({ ...addressTo, state: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
              required
            />
            <input
              type="text"
              placeholder="ZIP Code"
              value={addressTo.zip}
              onChange={(e) => setAddressTo({ ...addressTo, zip: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
              required
            />
            <input
              type="text"
              placeholder="Country (e.g., US)"
              value={addressTo.country}
              onChange={(e) => setAddressTo({ ...addressTo, country: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
              required
            />
          </div>
        </div>

        {/* Package Details */}
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 text-purple-600">Package Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <input
              type="number"
              placeholder="Length (in)"
              value={parcel.length}
              onChange={(e) => setParcel({ ...parcel, length: Number(e.target.value) })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              required
              min="0.1"
              step="0.1"
            />
            <input
              type="number"
              placeholder="Width (in)"
              value={parcel.width}
              onChange={(e) => setParcel({ ...parcel, width: Number(e.target.value) })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              required
              min="0.1"
              step="0.1"
            />
            <input
              type="number"
              placeholder="Height (in)"
              value={parcel.height}
              onChange={(e) => setParcel({ ...parcel, height: Number(e.target.value) })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              required
              min="0.1"
              step="0.1"
            />
            <input
              type="number"
              step="0.1"
              placeholder="Weight (lbs)"
              value={parcel.weight}
              onChange={(e) => setParcel({ ...parcel, weight: Number(e.target.value) })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              required
              min="0.1"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-colors"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Getting Rates...
            </span>
          ) : (
            'Get Shipping Rates'
          )}
        </button>
      </form>
    </div>
  );
}