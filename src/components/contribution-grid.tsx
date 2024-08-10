import React from 'react';
import { ProcessedData, Shape } from '../types';
import DayCell from "./day-cell";

interface ContributionGridProps {
  data: ProcessedData;
  shape: Shape;
}

const ContributionGrid: React.FC<ContributionGridProps> = ({ data, shape }) => {
  // Flatten the data array
  const flattenedData = data.flat();

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
        {flattenedData.map((day, index) => (
          <DayCell
            key={`day-${index}`}
            date={day.date}
            count={day.count}
            color={day.color}
            shape={shape}
          />
        ))}
      </div>
    </div>
  );
};

export default ContributionGrid;