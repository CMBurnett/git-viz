import React from 'react';
import { ColorScheme, Shape } from '../types';
import { motion } from 'framer-motion';

interface LegendProps {
  colorScheme: ColorScheme;
  shape: Shape;
}

const Legend: React.FC<LegendProps> = ({ colorScheme, shape }) => {
  const cellShape = shape === 'circle' ? 'rounded-full' : 'rounded-sm';

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="flex items-center justify-end mt-4 text-sm">
      <span className='mr-1 text-black dark:text-white'>Less</span>
      {colorScheme.slice(1).map((color, index) => (
        <div key={index} className="flex flex-col items-center mx-1">
          <div
            className={`w-4 h-4 ${cellShape}`}
            style={{ backgroundColor: color }}
          />
        </div>
      ))}
      <span className='ml-1 text-black dark:text-white'>More</span>
    </motion.div>
  );
};

export default React.memo(Legend);
