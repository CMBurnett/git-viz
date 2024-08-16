import React from 'react';
import { ColorScheme, Shape } from '../types';

interface LegendProps {
  colorScheme: ColorScheme;
  shape: Shape;
}

const Legend: React.FC<LegendProps> = ({ colorScheme, shape }) => {
  console.log('Legend shape:', shape);
  const levels = ['0', '1-3', '4-6', '7-9', '10-12', '13+'];
  const cellShape = shape === 'circle' ? 'rounded-full' : 'rounded-sm';

  const displayColors = colorScheme.length === 6 ? colorScheme : ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39', '#00471b'];

  return (
    <div className="flex items-center justify-end mt-4 text-sm">
      {displayColors.map((color, index) => (
        <div key={index} className="flex flex-col items-center mx-1">
          <div
            className={`w-4 h-4 ${cellShape}`}
            style={{ backgroundColor: color }}
          />
          <span className="text-xs mt-1">{levels[index]}</span>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Legend, (prevProps, nextProps) => {
  return prevProps.shape === nextProps.shape && prevProps.colorScheme === nextProps.colorScheme;
});