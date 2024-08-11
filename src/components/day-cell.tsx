import React from 'react';
import { motion } from 'framer-motion';
import { Shape } from '../types';

interface DayCellProps {
  date: string;
  count: number;
  color: string;
  shape: Shape;
}

const DayCell: React.FC<DayCellProps> = ({ date, count, color, shape }) => {
  const formattedDate = new Date(date).toLocaleDateString();
  const cellShape = shape === 'circle' ? 'rounded-full' : 'rounded-sm';

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`w-4 h-4 ${cellShape} relative group opacity-60`}
      style={{ backgroundColor: color }}
      role="gridcell"
      tabIndex={0}
      aria-label={`${formattedDate}: ${count} contribution${count !== 1 ? 's' : ''}`}
    >
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none mb-2 whitespace-nowrap z-10">
        {`${formattedDate}: ${count} contribution${count !== 1 ? 's' : ''}`}
      </div>
    </motion.div>
  );
};

export default DayCell;