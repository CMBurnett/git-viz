import React from 'react';
import { DateRange } from '../types';

interface DateRangeSelectorProps {
  dateRange: DateRange;
  onDateRangeChange: (newDateRange: DateRange) => void;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ dateRange, onDateRangeChange }) => {
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateRangeChange({ ...dateRange, start: e.target.value });
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateRangeChange({ ...dateRange, end: e.target.value });
  };

  return (
    <div className="flex items-center mb-4">
      <label className="mr-2">From:</label>
      <input
        type="datetime-local"
        value={dateRange.start.slice(0, 16)} // Truncate to minute precision
        onChange={handleStartDateChange}
        className="border rounded p-1 mr-4"
      />
      <label className="mr-2">To:</label>
      <input
        type="datetime-local"
        value={dateRange.end.slice(0, 16)} // Truncate to minute precision
        onChange={handleEndDateChange}
        className="border rounded p-1"
      />
    </div>
  );
};

export default DateRangeSelector;