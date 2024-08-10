import React from 'react';
import { motion } from 'framer-motion';
import { ProcessedData } from '../types';

interface ContributionStatsProps {
  data: ProcessedData;
}

const ContributionStats: React.FC<ContributionStatsProps> = ({ data }) => {
  const calculateStats = (data: ProcessedData) => {
    const flatData = data.flat();
    const totalContributions = flatData.reduce((sum, day) => sum + day.count, 0);
    const daysWithContributions = flatData.filter(day => day.count > 0).length;
    
    let currentStreak = 0;
    let longestStreak = 0;
    
    flatData.forEach((day, index) => {
      if (day.count > 0) {
        currentStreak++;
        if (currentStreak > longestStreak) {
          longestStreak = currentStreak;
        }
      } else {
        currentStreak = 0;
      }
    });

    return {
      totalContributions,
      daysWithContributions,
      longestStreak
    };
  };

  const stats = calculateStats(data);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-lg p-4 mb-6"
    >
      <h3 className="text-lg font-semibold mb-4">Contribution Statistics</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-600">Total Contributions</p>
          <p className="text-2xl font-bold">{stats.totalContributions}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Days Contributed</p>
          <p className="text-2xl font-bold">{stats.daysWithContributions}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Longest Streak</p>
          <p className="text-2xl font-bold">{stats.longestStreak} days</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContributionStats;
