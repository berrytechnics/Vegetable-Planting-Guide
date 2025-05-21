import React from 'react';

interface ZipCodeInputProps {
  zipCode: string;
  error: string;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (value: string) => void;
  zone?: string;
  onZoneChange?: (zone: string) => void;
}

/**
 * A form component for entering a zip code to get planting zone information
 */
export const ZipCodeInput: React.FC<ZipCodeInputProps> = ({
  zipCode,
  error,
  onSubmit,
  onChange,
  zone,
  onZoneChange,
}) => {
  const zones = Array.from({ length: 8 }, (_, i) => (i + 3).toString());

  const handleZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newZone = e.target.value;
    if (onZoneChange) {
      onZoneChange(newZone);
    }
  };

  const handleClearZone = () => {
    if (onZoneChange) {
      onZoneChange('');
    }
  };

  return (
    <form onSubmit={onSubmit} className="mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex items-center gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={zipCode}
              onChange={e => onChange(e.target.value)}
              placeholder="Enter your zip code"
              pattern="[0-9]{5}"
              maxLength={5}
              disabled={!!zone}
              className={`w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                zone ? 'bg-gray-100 cursor-not-allowed' : ''
              }`}
              aria-label="Zip code"
            />
            {error && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
          </div>
          <span className="text-gray-500 font-medium">or</span>
          <div className="flex-1 relative">
            <select
              value={zone || ''}
              onChange={handleZoneChange}
              className="w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-no-repeat bg-[length:12px_12px] bg-[center_right_1rem] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]"
              data-testid="zone-select"
            >
              <option value="">Select a zone</option>
              {zones.map(zoneNumber => (
                <option key={zoneNumber} value={zoneNumber}>
                  Zone {zoneNumber}
                </option>
              ))}
            </select>
            {zone && (
              <button
                type="button"
                onClick={handleClearZone}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label="Clear zone selection"
              >
                ✕
              </button>
            )}
          </div>
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
