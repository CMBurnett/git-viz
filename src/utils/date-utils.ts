import { DateRange } from '../types';

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
};

export const getDateRange = (range: string = '1year'): DateRange => {
  const now = new Date();
  const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 23, 59, 59, 999));
  let start: Date;

  switch (range) {
    case '7days':
      start = new Date(end);
      start.setUTCDate(end.getUTCDate() - 6);
      break;
    case '30days':
      start = new Date(end);
      start.setUTCDate(end.getUTCDate() - 29);
      break;
    case '3months':
      start = new Date(end);
      start.setUTCMonth(end.getUTCMonth() - 3);
      break;
    case '6months':
      start = new Date(end);
      start.setUTCMonth(end.getUTCMonth() - 6);
      break;
    case '1year':
    default:
      start = new Date(end);
      start.setUTCFullYear(end.getUTCFullYear() - 1);
      start.setUTCDate(start.getUTCDate() + 1); // Include full year
  }

  start.setUTCHours(0, 0, 0, 0);

  return {
    start: start.toISOString(),
    end: end.toISOString()
  };
};

export const isValidDateRange = (start: string, end: string): boolean => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return startDate <= endDate && endDate <= new Date();
};