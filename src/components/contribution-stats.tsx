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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-lg p-4 mb-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="text-center bg-white/60 dark:bg-slate-900 px-8 py-4 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-white">Total Contributions</p>
          <p className="text-2xl text-gray-600 dark:text-white font-bold">{stats.totalContributions}</p>
        </div>
        <div className="text-center bg-white/60 dark:bg-slate-900 px-8 py-4 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-white">Days Contributed</p>
          <p className="text-2xl text-gray-600 dark:text-white font-bold">{stats.daysWithContributions}</p>
        </div>
        <div className="text-center bg-white/60 dark:bg-slate-900 px-8 py-4 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-white">Longest Streak</p>
          <p className="text-2xl text-gray-600 dark:text-white font-bold">{stats.longestStreak} days</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContributionStats;
