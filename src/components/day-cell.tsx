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
  const cellDate = new Date(date);
  const formattedDate = `${cellDate.getUTCFullYear()}-${String(cellDate.getUTCMonth() + 1).padStart(2, '0')}-${String(cellDate.getUTCDate()).padStart(2, '0')}`;
  const cellShape = shape === 'circle' ? 'rounded-full' : 'rounded-sm';

  const cellStyle = count === 0 ? {} : { backgroundColor: color };
  const cellClass = count === 0 ? color : ''; // color will be 'bg-white dark:bg-black' for 0 count

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`w-3 h-3 ${cellShape} ${cellClass} relative group`}
      style={cellStyle}
      role="gridcell"
      tabIndex={0}
      whileHover={{ scale: 1.2 }}
      aria-label={`${formattedDate}: ${count} contribution${count !== 1 ? 's' : ''}`}
    >
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none mb-2 whitespace-nowrap z-10">
        {`${formattedDate}: ${count} contribution${count !== 1 ? 's' : ''}`}
      </div>
    </motion.div>
  );
};

export default DayCell;
