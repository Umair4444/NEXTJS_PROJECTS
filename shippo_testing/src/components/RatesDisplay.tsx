'use client';

import { Rate } from '@/types/shippo';

interface RatesDisplayProps {
  rates: Rate[];
  onSelectRate: (rateId: string) => void;
  loading: boolean;
}

export default function RatesDisplay({ rates, onSelectRate, loading }: RatesDisplayProps) {
  if (rates.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Available Shipping Rates</h3>
      <div className="space-y-3">
        {rates.map((rate, index) => (
          <div
            key={rate.objectId || index}
            className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-colors"
          >
            <div className="flex-1">
              <div className="font-bold text-lg">{rate.provider}</div>
              <div className="text-sm text-gray-600 mb-1">{rate.servicelevel?.name}</div>
              <div className="text-xs text-gray-500">
                Estimated delivery: {rate.estimatedDays} business days
              </div>
            </div>
            <div className="text-right ml-4">
              <div className="text-2xl font-bold text-green-600">${rate.amount} {rate.currency}</div>
              <button
                onClick={() => onSelectRate(rate.objectId)}
                disabled={loading}
                className="mt-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors"
              >
                {loading ? 'Creating...' : 'Select Rate'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}