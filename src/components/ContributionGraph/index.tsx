"use client";

import React, { useEffect, useState } from "react";
import {
  fetchContributions,
  Contribution,
  getColor,
  groupByWeek,
  getStartOfWeek,
} from "@/lib/github";
import { FadeIn } from "@/components/FadeIn";

export function ContributionGraph(): React.ReactElement {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
      if (!token) {
        setError("GitHub Token is not set.");
        return;
      }

      try {
        const data = await fetchContributions(token);
        setContributions(data);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const today = new Date();
  const startOfWeek = getStartOfWeek(today);
  const twoMonthsAndTwoWeeksAgo = new Date(startOfWeek);
  twoMonthsAndTwoWeeksAgo.setMonth(twoMonthsAndTwoWeeksAgo.getMonth() - 2);
  twoMonthsAndTwoWeeksAgo.setDate(twoMonthsAndTwoWeeksAgo.getDate() - 17);

  const filteredContributions = contributions.filter((contribution) => {
    const contributionDate = new Date(contribution.date);
    return contributionDate >= twoMonthsAndTwoWeeksAgo;
  });

  // 月の名前を英語で表示するための変換
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // 月ごとの貢献データをまとめる
  const months = Array.from(
    new Set(filteredContributions.map((c) => c.date.slice(0, 7)))
  ); // 月のユニークなリスト
  const weeks = groupByWeek(filteredContributions); // 週ごとにデータをグループ化

  return (
    <div className="mt-8">
      {filteredContributions.length > 0 ? (
        <div>
          <FadeIn>
            <div className="flex justify-between mb-2">
              {months.map((month, index) => (
                <div
                  key={index}
                  className="text-center text-muted-foreground text-sm"
                >
                  {monthNames[parseInt(month.slice(5, 7), 10) - 1]}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-12">
              {weeks.map((week, index) => (
                <div key={index} className="flex flex-col gap-1">
                  {week.map((contribution, dayIndex) => (
                    <div
                      key={dayIndex}
                      className="w-4 h-4 rounded"
                      style={{
                        backgroundColor: getColor(contribution.count),
                      }}
                      title={`${contribution.date}: ${contribution.count} contributions`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      ) : (
        <div className="h-[164px]"></div>
      )}
    </div>
  );
}
