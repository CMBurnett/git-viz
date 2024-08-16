import React from 'react';
import { ProcessedData, Shape, ColorScheme } from '../types';
import DayCell from './day-cell';

interface ContributionGridProps {
  data: ProcessedData;
  shape: Shape;
  colorScheme: ColorScheme;
}

const ContributionGrid: React.FC<ContributionGridProps> = ({ data, shape, colorScheme }) => {
  const getColorIndex = (count: number): number => {
    if (count === 0) return 0;
    if (count >= 1 && count <= 3) return 1;
    if (count >= 4 && count <= 6) return 2;
    if (count >= 7 && count <= 9) return 3;
    if (count >= 10 && count <= 12) return 4;
    return 5; // 13+
  };

  return (
    <div className="">
      <div 
        className="grid grid-flow-row auto-rows-auto gap-1"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(14px, 1fr))',
        }}
        role="grid" 
        aria-label="GitHub contribution graph"
      >
{data.map((day, index) => {
  console.log(`Grid cell ${index}: date ${day.date}, color ${day.color}`);
  return (
    <DayCell
      key={`day-${index}`}
      date={day.date}
      count={day.count}
      color={day.color}
      shape={shape}
    />
  );
})}
      </div>
    </div>
  );
};

export default ContributionGrid;
