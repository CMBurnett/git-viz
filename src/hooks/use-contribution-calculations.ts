import { useMemo } from 'react';
import { GitHubData, ProcessedData, ColorScheme } from '../types';

const useContributionCalculations = (data: GitHubData | null, colorScheme: ColorScheme): ProcessedData | null => {
  return useMemo(() => {
    if (!data) return null;

    const getColorIndex = (count: number): number => {
      if (count === 0) return 0;
      if (count >= 1 && count <= 3) return 1;
      if (count >= 4 && count <= 6) return 2;
      if (count >= 7 && count <= 9) return 3;
      if (count >= 10 && count <= 12) return 4;
      return 5; // 13+
    };

    // Ensure we have a valid color scheme
    const validColorScheme = colorScheme.length === 6 ? colorScheme : ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39', '#00471b'];

    // Flatten, process, and sort the data
    const processedData = data.weeks.flatMap(week => 
      week.contributionDays.map(day => ({
        date: day.date,
        count: day.contributionCount,
        color: validColorScheme[getColorIndex(day.contributionCount)]
      }))
    ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return processedData;
  }, [data, colorScheme]);
};

export default useContributionCalculations;