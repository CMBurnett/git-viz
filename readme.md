# GitViz: A Dynamic GitHub Contribution Visualizer

Elevate your portfolio with GitViz, a sleek and customizable React component that brings GitHub contribution data to life. Perfect for designers and developers who want to add a touch of data-driven aesthetics to their online presence.

## Features

- Stunning Visualization: Transform GitHub contribution data into an eye-catching, responsive grid
- Flexible Styling: Seamlessly integrate with your design system using customizable colors and shapes
- Responsive Design: Looks great on any device, from mobile to desktop
- Animation Magic: Smooth, attention-grabbing animations powered by [Framer Motion](https://www.framer.com/motion/)

- Designer-Friendly: Easy to implement with minimal coding required
- Dark Mode Ready: Automatically adapts to light and dark themes
- Accessibility Focus: Designed with keyboard navigation and screen reader support in mind
- Performance Optimized: Fast loading and rendering, even for large datasets
- Tailwind CSS Integration: Easily customizable using utility classes

Crafted with React, Next.js, and Tailwind CSS, GitViz is the perfect tool for builders looking to add a dynamic, data-driven element to their projects without compromising on aesthetics or performance.


## Tech Stack

- React 18+
- Next.js 14.2.5
- Tailwind CSS 3.4.1
- Framer Motion 11.3.24
- TypeScript 5+

## Installation

```bash
npm install gitviz-react
```

or if you're using yarn:

```bash
yarn add gitviz-react
```

## Usage

```jsx
import GitViz from 'gitviz-react';

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
| username | string | - | GitHub username to display contributions for |
| hexColor | string | '#4ac671' | Base color for generating the contribution color scheme |
| shape | 'rounded-square' \| 'circle' | 'rounded-square' | Shape of the contribution cells |
| showStats | boolean | true | Whether to display contribution statistics |
| showLegend | boolean | true | Whether to display the color legend |
| dateRange | PredefinedDateRange | '1year' | Predefined date range for contributions |
| onColorSchemeChange | function | - | Callback function when color scheme changes |

## MIT License

[MIT License](/LICENSE)

