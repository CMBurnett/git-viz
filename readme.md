# GitViz: A Dynamic GitHub Contribution Visualizer

Elevate your work with GitViz, a sleek and customizable React component that brings GitHub contribution data to life. Perfect for designers and developers who want to add a touch of data-driven aesthetics to their online presence.

## Features

- **Stunning Visualization:** Transform GitHub contribution data into an eye-catching, responsive grid
- **Flexible Styling:** Seamlessly integrate with your design system using customizable colors and shapes
- **Responsive Design:** Looks great on any device, from mobile to desktop
- **Animation Magic:** Smooth, attention-grabbing animations powered by [Framer Motion](https://www.framer.com/motion/)
- **Designer-Friendly:** Easy to implement with minimal coding required
- **Dark Mode Ready:** Automatically adapts to light and dark themes
- **Accessibility Focus:** Designed with keyboard navigation and screen reader support in mind
- **Performance Optimized:** Fast loading and rendering, even for large datasets
- **Tailwind CSS Integration:** Easily customizable using utility classes

Crafted with React, Next.js, Tailwind CSS and Framer Motion, GitViz is the perfect tool for builders looking to add a dynamic, data-driven element to their projects without compromising on aesthetics or performance.


## Tech Stack

- React 18+
- Next.js 14.2.5
- Tailwind CSS 3.4.1
- Framer Motion 11.3.24

## Installation

```bash
npm install git-viz
```

or if you're using yarn:

```bash
yarn add git-viz
```

## Usage

```jsx
import GitViz from 'git-viz';

function App() {
  return (
    <GitViz
      username="octocat"
      hexColor="#4ac671"
      shape="rounded-square"
      showStats={true}
      showLegend={true}
      dateRange="1year"
    />
  );
}
```
## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| username | string | octocat | The GitHub username to display contributions for |
| hexColor | string | '#4ac671' | Base color for generating the contribution color scheme |
| shape | 'rounded-square' \| 'circle' | 'rounded-square' | Shape of the contribution cells |
| showStats | boolean | true | Whether to display contribution statistics |
| showLegend | boolean | true | Whether to display the color legend |
| dateRange  | '7days' \| '30days' \| '3months' \| '6months' \| '1year' | Predefined date range for contributions | Some predefined date ranges for contributions           |

## GitHub Personal Access Token

Before using GitViz, you'll need to obtain a GitHub personal access token. Follow these steps:

1. Go to your GitHub account settings
2. Navigate to Developer settings > [Personal access tokens](https://github.com/settings/tokens)
3. Generate a new token with 'read:user' scope
4. Copy the generated token

Then, add the token your environment:

```bash
GITHUB_API_TOKEN=your_api_key_here
```

