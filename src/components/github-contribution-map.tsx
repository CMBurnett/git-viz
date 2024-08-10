"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useGitHubData from "../hooks/use-github-data";
import useContributionCalculations from '../hooks/use-contribution-calculations';
import ContributionGrid from './contribution-grid';
import ContributionStats from './contribution-stats';
import Legend from './legend';
import DateRangeSelector from './date-range-selector';
import DateRangePresetSelector from './date-range-preset-selector';
import StatusMessage from './status-message';
import { ColorScheme, DateRange, Shape } from "../types";
import { getDateRange, isValidDateRange } from '../utils/date-utils';
import { generateColorScale } from '../utils/color-utils';

export interface GitHubContributionMapProps {
  username: string;
  initialDateRange?: DateRange;
  initialColorScheme?: ColorScheme;
  initialShape?: Shape;
  showColorSchemeSelector?: boolean;
  showShapeToggle?: boolean;
  showDateRangeSelector?: boolean;
  showDateRangePresetSelector?: boolean;
  onDateRangeChange?: (newDateRange: DateRange) => void;
  onColorSchemeChange?: (newColorScheme: ColorScheme) => void;
  onShapeChange?: (newShape: Shape) => void;
}

const predefinedColorSchemes: { [key: string]: ColorScheme } = {
  default: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39', '#00471b'],
  blue: ['#ebedf0', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289'],
  red: ['#ebedf0', '#ffb3ba', '#ff6b6b', '#ff3333', '#cc0000', '#990000'],
};

const GitHubContributionMap: React.FC<GitHubContributionMapProps> = ({
  username,
  initialDateRange = getDateRange('1year'),
  initialColorScheme = predefinedColorSchemes.default,
  initialShape = 'rounded-square',
  showColorSchemeSelector = true,
  showShapeToggle = true,
  showDateRangeSelector = true,
  showDateRangePresetSelector = true,
  onDateRangeChange,
  onColorSchemeChange,
  onShapeChange
}) => {
  const [dateRange, setDateRange] = useState<DateRange>(initialDateRange);
  const [colorScheme, setColorScheme] = useState<ColorScheme>(initialColorScheme);
  const [shape, setShape] = useState<Shape>(initialShape);

  const { data, loading, error } = useGitHubData(username, dateRange);
  const processedData = useContributionCalculations(data, colorScheme);

  const handleDateRangeChange = (newDateRange: DateRange) => {
    if (isValidDateRange(newDateRange.start, newDateRange.end)) {
      const formattedRange = {
        start: new Date(newDateRange.start).toISOString(),
        end: new Date(newDateRange.end).toISOString()
      };
      setDateRange(formattedRange);
      onDateRangeChange?.(formattedRange);
    } else {
      console.error('Invalid date range');
    }
  };

  const handleColorSchemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newColorScheme = predefinedColorSchemes[e.target.value];
    setColorScheme(newColorScheme);
    onColorSchemeChange?.(newColorScheme);
  };

  const handleShapeToggle = () => {
    const newShape = shape === 'rounded-square' ? 'circle' : 'rounded-square';
    setShape(newShape);
    onShapeChange?.(newShape);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-4"
    >
      <h2 className="text-2xl font-bold mb-4">GitHub Contributions for {username}</h2>
      {showDateRangePresetSelector && <DateRangePresetSelector onSelect={handleDateRangeChange} />}
      {showDateRangeSelector && <DateRangeSelector dateRange={dateRange} onDateRangeChange={handleDateRangeChange} />}
      <div className="mb-4 flex items-center flex-wrap">
        {showColorSchemeSelector && (
          <select
            value={Object.keys(predefinedColorSchemes).find(key => predefinedColorSchemes[key] === colorScheme) || 'default'}
            onChange={handleColorSchemeChange}
            className="mr-4 p-2 border rounded"
          >
            {Object.keys(predefinedColorSchemes).map(key => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        )}
        {showShapeToggle && (
          <button
            onClick={handleShapeToggle}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-4"
          >
            Toggle Shape: {shape === 'rounded-square' ? 'Square' : 'Circle'}
          </button>
        )}
      </div>
      <StatusMessage loading={loading} error={error} />
      {processedData && (
        <>
          <ContributionStats data={processedData} />
          <ContributionGrid data={processedData} shape={shape} />
          <Legend colorScheme={colorScheme} />
        </>
      )}
    </motion.div>
  );
};

export default GitHubContributionMap;