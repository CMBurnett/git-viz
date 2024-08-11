import React from 'react';
import { DateRange } from '../types';
import { getDateRange } from '../utils/date-utils';

interface DateRangePresetSelectorProps {
  onSelect: (range: DateRange) => void;
  currentRange: DateRange;
}

const DateRangePresetSelector: React.FC<DateRangePresetSelectorProps> = ({ onSelect, currentRange }) => {
  const presets: { label: string; range: string }[] = [
    { label: 'Last 7 days', range: '7days' },
    { label: 'Last 30 days', range: '30days' },
    { label: 'Last 3 months', range: '3months' },
    { label: 'Last 6 months', range: '6months' },
    { label: 'Last year', range: '1year' },
  ];

  const isCurrentRange = (range: string) => {
    const presetRange = getDateRange(range);
    return presetRange.start === currentRange.start && presetRange.end === currentRange.end;
  };

  return (
    <div className="mb-4">
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => onSelect(getDateRange(preset.range))}
            className={`px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isCurrentRange(preset.range)
                ? 'bg-blue-500 text-white'
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateRangePresetSelector;