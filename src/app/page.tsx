"use client";

import GitViz from "../components/git-viz";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="px-8 py-4 rounded-lg">
        <GitViz
        username="CMBurnett"
        hexColor="#00aa66"
        shape="rounded-square"
        showStats={true}
        showLegend={true}
        dateRange="1year"
      />
      </div>
    </main>
  );
}
