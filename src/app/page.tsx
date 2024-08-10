"use client";

import GitHubContributionMap from "../components/github-contribution-map";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">GitHub Contribution Map</h1>
      <GitHubContributionMap
        username="CMBurnett"
        initialDateRange={{
          start: "2023-01-01T00:00:00Z",
          end: "2023-12-31T23:59:59Z",
        }}
        initialColorScheme={[
          "#ebedf0",
          "#9be9a8",
          "#40c463",
          "#30a14e",
          "#216e39",
        ]}
        initialShape="circle"
        showColorSchemeSelector={true}
        showShapeToggle={true}
        showDateRangeSelector={true}
        showDateRangePresetSelector={true}
        onDateRangeChange={(newRange) =>
          console.log("Date range changed:", newRange)
        }
        onColorSchemeChange={(newScheme) =>
          console.log("Color scheme changed:", newScheme)
        }
        onShapeChange={(newShape) => console.log("Shape changed:", newShape)}
      />
    </main>
  );
}
