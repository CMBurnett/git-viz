import { DateRange } from '../types';

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
};

export const getDateRange = (range: string): DateRange => {
  const today = new Date();
  const end = today.toISOString(); // This will include the time component
  let start: string;

  switch (range) {
    case '7days':
      start = new Date(today.setDate(today.getDate() - 7)).toISOString();
      break;
    case '30days':
      start = new Date(today.setDate(today.getDate() - 30)).toISOString();
      break;
    case '3months':
      start = new Date(today.setMonth(today.getMonth() - 3)).toISOString();
      break;
    case '6months':
      start = new Date(today.setMonth(today.getMonth() - 6)).toISOString();
      break;
    case '1year':
    default:
      start = new Date(today.setFullYear(today.getFullYear() - 1)).toISOString();
      break;
  }

  return { start, end };
};

export const isValidDateRange = (start: string, end: string): boolean => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return startDate <= endDate && endDate <= new Date();
};