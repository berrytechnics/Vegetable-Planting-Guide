import React from 'react';

interface ZipCodeInputProps {
  zipCode: string;
  error: string;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (value: string) => void;
}

/**
 * A form component for entering a zip code to get planting zone information
 */
export const ZipCodeInput: React.FC<ZipCodeInputProps> = ({
  zipCode,
  error,
  onSubmit,
  onChange,
}) => {
  return (
    <form onSubmit={onSubmit} className="mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            value={zipCode}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter your zip code"
            pattern="[0-9]{5}"
            maxLength={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Zip code"
          />
          {error && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Get Planting Guide
        </button>
      </div>
    </form>
  );
}; 