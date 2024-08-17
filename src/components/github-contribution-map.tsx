"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useGitHubData from "../hooks/use-github-data";
import useContributionCalculations from '../hooks/use-contribution-calculations';
import ContributionGrid from './contribution-grid';
import ContributionStats from './contribution-stats';
import Legend from './legend';
import StatusMessage from './status-message';
import { ColorScheme, DateRange, Shape, PredefinedDateRange } from "../types";
import { getDateRange } from '../utils/date-utils';
import { generatePaletteFromHex } from '../utils/color-utils';

export interface GitHubContributionMapProps {
  username: string;
  hexColor?: string;
  shape?: Shape;
  showStats?: boolean;
  showLegend?: boolean;
  initialDateRange?: PredefinedDateRange;
  onDateRangeChange?: (newDateRange: DateRange) => void;
  onColorSchemeChange?: (newColorScheme: ColorScheme) => void;
}

const GitHubContributionMap: React.FC<GitHubContributionMapProps> = ({
  username,
  hexColor = '#4ac671',
  shape = 'rounded-square',
  showStats = true,
  showLegend = true,
  initialDateRange = '1year',
  onDateRangeChange,
  onColorSchemeChange
}) => {
  const [currentPresetRange, setCurrentPresetRange] = useState<PredefinedDateRange>(initialDateRange);
  const [colorScheme, setColorScheme] = useState<ColorScheme>(generatePaletteFromHex(hexColor));

  const { data, loading, error } = useGitHubData(username, getDateRange(currentPresetRange));
  const processedData = useContributionCalculations(data, colorScheme);

  useEffect(() => {
    const newColorScheme = generatePaletteFromHex(hexColor);
    setColorScheme(newColorScheme);
    onColorSchemeChange?.(newColorScheme);
  }, [hexColor, onColorSchemeChange]);

  const handleDateRangeChange = (newPresetRange: PredefinedDateRange) => {
    setCurrentPresetRange(newPresetRange);
    onDateRangeChange?.(getDateRange(newPresetRange));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-4"
    >
      <StatusMessage loading={loading} error={error} />
      {processedData && (
        <>
          {showStats && <ContributionStats data={processedData} />}
          <ContributionGrid data={processedData} shape={shape} colorScheme={colorScheme} />
          {showLegend && <Legend colorScheme={colorScheme} shape={shape} />}
        </>
      )}
    </motion.div>
  );
};

export default GitHubContributionMap;
