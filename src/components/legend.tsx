import React from 'react';
import { ColorScheme } from '../types';

interface LegendProps {
  colorScheme: ColorScheme;
}

const Legend: React.FC<LegendProps> = ({ colorScheme }) => {
  const levels = ['No contributions', '1-3', '4-6', '7-9', '10-12', '13+'];
  
  // Ensure we always have 6 colors
  const displayColors = colorScheme.length === 6 ? colorScheme : ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39', '#00471b'];

  return (
    <div className="flex items-center justify-end mt-4 text-sm">
      <span className="mr-2">Less</span>
      {displayColors.map((color, index) => (
        <div key={index} className="flex flex-col items-center mx-1">
          <div
            className="w-4 h-4"
            style={{ backgroundColor: color }}
          />
          <span className="text-xs mt-1">{levels[index]}</span>
        </div>
      ))}
      <span className="ml-2">More</span>
    </div>
  );
};

export default Legend;