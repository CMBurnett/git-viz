export type DateRange = {
  start: string;
  end: string;
};

export type ColorScheme = string[];

export type Shape = 'rounded-square' | 'circle';

export type GitHubData = {
  weeks: {
    contributionDays: {
      date: string;
      contributionCount: number;
    }[];
  }[];
};

export type ProcessedData = {
  date: string;
  count: number;
  color: string;
}[];