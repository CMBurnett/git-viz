import React from 'react';
import { DateRange } from '../types';
import { getDateRange } from '../utils/date-utils';

interface DateRangePresetSelectorProps {
  onSelect: (range: DateRange) => void;
}

const DateRangePresetSelector: React.FC<DateRangePresetSelectorProps> = ({ onSelect }) => {
  const presets: { label: string; range: string }[] = [
    { label: 'Last 7 days', range: '7days' },
    { label: 'Last 30 days', range: '30days' },
    { label: 'Last 3 months', range: '3months' },
    { label: 'Last 6 months', range: '6months' },
    { label: 'Last year', range: '1year' },
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Preset Ranges:</label>
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => onSelect(getDateRange(preset.range))}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateRangePresetSelector;
