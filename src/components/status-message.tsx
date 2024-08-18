import React from 'react';
import { motion } from 'framer-motion';

interface StatusMessageProps {
  loading: boolean;
  error: Error | null;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ loading, error }) => {
  if (!loading && !error) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mb-4 p-4 rounded-md"
    >
      {loading && (
        <div className="flex items-center justify-center text-black dark:text-white">
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <strong>Loading contributions...</strong>
        </div>
      )}
      {error && (
        <div className="flex items-center justify-center text-red-500">
          <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="red">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <strong>Uh Oh - we hit a snag:&nbsp;</strong> {error.message}
        </div>
      )}
    </motion.div>
  );
};

export default StatusMessage;
