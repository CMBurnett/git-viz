import { DateRange, GitHubData } from '../types';

const API_BASE_URL = 'https://api.github.com/graphql';

export const fetchGitHubContributions = async (username: string, dateRange: DateRange): Promise<GitHubData> => {
  const token = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;
  if (!token) {
    throw new Error('GitHub API token is not set');
  }

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    username,
    from: dateRange.start,
    to: dateRange.end,
  };

  try {
    console.log('Sending request to GitHub API with variables:', variables);
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log('Received data from GitHub API:', data);

    if (data.errors) {
      throw new Error(`GraphQL Errors: ${JSON.stringify(data.errors)}`);
    }

    if (!data.data || !data.data.user) {
      throw new Error('Unexpected response structure from GitHub API');
    }

    return data.data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    throw error;
  }
};