import { useState, useEffect, useRef } from 'react';
import { fetchGitHubContributions } from '../services/github-api';
import { DateRange, GitHubData } from '../types';

const useGitHubData = (username: string, dateRange: DateRange) => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const cache = useRef<Map<string, GitHubData>>(new Map());

  useEffect(() => {
    const fetchData = async () => {
      const cacheKey = `${username}-${dateRange.start}-${dateRange.end}`;
      
      if (cache.current.has(cacheKey)) {
        setData(cache.current.get(cacheKey)!);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const contributionsData = await fetchGitHubContributions(username, dateRange);
        cache.current.set(cacheKey, contributionsData);
        setData(contributionsData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, dateRange]);

  return { data, loading, error };
};

export default useGitHubData;
