# Usage Guide

## Installation

To install the GitHub Contribution Map component in your project, run:

```bash
npm install github-contribution-map
```

or if you're using yarn:

```bash
yarn add github-contribution-map
```

## Setup

1. Ensure you have Tailwind CSS and Framer Motion set up in your project.

2. Import the component in your React file:

```javascript
import GitHubContributionMap from 'github-contribution-map';
```

3. Use the component in your JSX:

```jsx
<GitHubContributionMap
  username="octocat"
  initialDateRange={{ start: '2023-01-01', end: '2023-12-31' }}
  initialColorScheme={['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']}
  initialShape="rounded-square"
/>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| username | string | GitHub username to display contributions for |
| initialDateRange | object | Object with start and end dates for the initial contribution range |
| initialColorScheme | array | Array of colors for different contribution levels |
| initialShape | string | 'rounded-square' or 'circle' for day representations in grid view |

## Features

### View Modes

The component supports two view modes:

1. Grid View: The traditional GitHub-style contribution graph
2. Heatmap View: A heatmap representation of contribution intensity

You can toggle between these views using the "Toggle View" button.

### Date Range Selection

You can select custom date ranges or use the preset date range options:

- Last 7 days
- Last 30 days
- Last 3 months
- Last 6 months
- Last year

### Contribution Statistics

The component displays key contribution statistics:

- Total Contributions
- Days Contributed
- Longest Streak

### Customization

You can customize the appearance of the component using the provided controls:

- Color scheme selection
- Shape toggle (for grid view)

## Examples

Here are a few examples of how to use the component with different configurations:

```jsx
// Basic usage
<GitHubContributionMap username="octocat" />

// Custom initial settings
<GitHubContributionMap
  username="octocat"
  initialDateRange={{ start: '2023-01-01', end: '2023-12-31' }}
  initialColorScheme={['#ebedf0', '#79b8ff', '#2188ff', '#0366d6', '#005cc5']}
  initialShape="circle"
/>
```

## Styling

You can further customize the appearance using Tailwind classes:

```jsx
<GitHubContributionMap
  username="octocat"
  className="p-4 bg-gray-100 rounded-lg shadow-md"
/>
```

## API Token

To fetch contribution data, you need to provide a GitHub API token. Create a `.env.local` file in your project root and add:

```
GITHUB_API_TOKEN=your_token_here
```

The component will automatically use this token for API requests.

## Troubleshooting

If you encounter any issues, please check the following:

1. Ensure you have a valid GitHub API token set in your environment variables.
2. Check that the username is correct and the user has public contributions.
3. Verify that your project has the required dependencies (React, Framer Motion, Tailwind CSS).

For more detailed information or if you encounter any issues, please refer to our [GitHub repository](https://github.com/your-repo/github-contribution-map) or open an issue.
