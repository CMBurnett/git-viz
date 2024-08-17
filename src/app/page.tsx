"use client";

import GitHubContributionMap from "../components/github-contribution-map";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">GitHub Contribution Map</h1>
      <GitHubContributionMap
        username="CMBurnett"
        hexColor="#00aa66"
        shape="rounded-square"
        showStats={true}
        showLegend={true}
        initialDateRange="1year"
      />
    </main>
  );
}
