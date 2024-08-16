"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/tooltip";

import { TbBrandGithubIcon } from "../icons";

import DesignBlock from "./DesignBlock";

interface GitHubContributionGraphProps {
  username: string;
  filledColor?: string;
  emptyColor?: string;
}

interface ContributionDay {
  date: string;
  count: number;
  intensity: number;
}

const GitHubContributionGraph: React.FC<GitHubContributionGraphProps> = ({
  username,
}) => {
  const [contributionData, setContributionData] = useState<
    ContributionDay[] | null
  >(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributionData = async () => {
      try {
        const response = await axios.post(
          "https://api.github.com/graphql",
          {
            query: `
              query($username: String!) {
                user(login: $username) {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: { username },
          },
          {
            headers: {
              Authorization: `Bearer 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`,
            },
          },
        );
        const processedData = processContributionData(
          response.data.data.user.contributionsCollection.contributionCalendar,
        );

        setContributionData(processedData);
      } catch (error) {
        setError("Uh oh... we had an issue fetching the contribution data");
      }
    };

    fetchContributionData();
  }, [username]);

  const processContributionData = (data: any): ContributionDay[] => {
    const contributions = data.weeks.flatMap(
      (week: any) => week.contributionDays,
    );
    const maxContributions = Math.max(
      ...contributions.map((day: any) => day.contributionCount),
    );

    return contributions.map((day: any) => ({
      date: day.date,
      count: day.contributionCount,
      intensity: Math.ceil((day.contributionCount / maxContributions) * 4),
    }));
  };

  const renderContributionGraph = () => {
    if (!contributionData) return null;

    return (
      <div className="flex flex-wrap gap-1">
        {contributionData.map((day, index) => (
          <Tooltip
            key={day.date}
            content={
              <>
                <span style={{ fontWeight: "bold" }}>{day.count}</span>{" "}
                contributions on{" "}
                <span style={{ fontWeight: "bold" }}>{day.date}</span>
              </>
            }
          >
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className={`grid grid-flow-row auto-rows-auto gap-1 w-3 h-3 rounded-sm ${getColorClass(day.intensity)}`}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.24 }}
              whileHover={{ scale: 1.6 }}
            />
          </Tooltip>
        ))}
      </div>
    );
  };

  const getColorClass = (intensity: number) => {
    switch (intensity) {
      case 0:
        return "bg-github-0/60";
      case 1:
        return "bg-github-1";
      case 2:
        return "bg-github-2";
      case 3:
        return "bg-github-3";
      case 4:
        return "bg-github-4";
      default:
        return "bg-github-0";
    }
  };

  return (
    <DesignBlock className="p-4 md:p-6">
      <div className="text-2xl font-bold mb-4 md:mr-6 flex-col basis-auto md:basis-2/12">
        <div className="flex w-full justify-start md:justify-end">
          <TbBrandGithubIcon key="menu-icon" size={40} />
        </div>
        <div className="flex w-full justify-start md:justify-end">
          {username}
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {error && <p className="text-red-500">{error}</p>}
        {renderContributionGraph()}
      </div>
    </DesignBlock>
  );
};

export default GitHubContributionGraph;
