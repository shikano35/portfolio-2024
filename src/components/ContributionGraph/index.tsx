import {
  fetchContributions,
  Contribution,
  getColorClass,
  groupByWeek,
} from "@/lib/github";
import clsx from "clsx";
import React from "react";
import { FadeIn, FadeTransition } from "../FadeIn";
import { GithubIcon } from "../Icons/social/GithubIcon";
import { Heading } from "../Heading";
import Link from "next/link";

type ContributionGraphProps = {
  contributions: Contribution[];
  months: string[];
};

export async function ContributionGraph() {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  if (!token) {
    throw new Error("GitHub Token is not set.");
  }

  const { days, totalContributions } = await fetchContributions(token);

  const today = new Date();
  const cutoffDate = new Date(today);
  cutoffDate.setMonth(today.getMonth() - 3);
  cutoffDate.setDate(today.getDate() - 19);

  const contributions = days.filter((contribution) => {
    const contributionDate = new Date(contribution.date);
    return contributionDate >= cutoffDate && contributionDate <= today;
  });

  const months = Array.from({ length: 5 }, (_, i) => {
    const date = new Date(today.getFullYear(), today.getMonth() - 4 + i);
    return date.toLocaleString("en-US", { month: "short" });
  });

  return (
    <ContributionGraphContent
      contributions={contributions}
      months={months}
      totalContributions={totalContributions}
    />
  );
}

function ContributionGraphContent({
  contributions,
  months,
  totalContributions,
}: ContributionGraphProps & { totalContributions: number }) {
  const weeks = groupByWeek(contributions);

  return (
    <>
      <FadeIn>
        <header className="flex items-center justify-center p-1 rounded-lg w-32">
          <Link href="https://github.com/shikano35">
            <GithubIcon className="w-8 h-8 rounded-full hover:bg-hover" />
          </Link>
          <Link href="https://github.com/shikano35">
            <Heading
              as="h6"
              className="font-semibold text-primary ml-2 px-2 rounded-md hover:bg-hover"
            >
              Github
            </Heading>
          </Link>
        </header>
      </FadeIn>
      <FadeTransition>
        <div className="mt-4 px-4 overflow-x-hidden">
          {contributions.length > 0 ? (
            <table className="flex flex-col">
              <thead>
                <tr className="flex text-sm gap-x-[3.25rem]">
                  {months.map((month, index) => (
                    <th
                      key={index}
                      className="font-normal text-muted-foreground"
                    >
                      {month}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="grid grid-cols-[repeat(16,_minmax(0,_1fr))] mt-1">
                {weeks.map((week, weekIndex) => (
                  <tr key={weekIndex} className="flex flex-col gap-y-1">
                    {Array.from({ length: 7 }).map((_, dayIndex) => (
                      <td
                        key={dayIndex}
                        aria-label={`${week[dayIndex]?.date || "No data"} contributions`}
                        className={clsx(
                          "h-4 w-4 rounded-sm",
                          getColorClass(week[dayIndex]?.level || "NONE")
                        )}
                        title={
                          week[dayIndex]
                            ? `${week[dayIndex].date}: ${week[dayIndex].count} contributions`
                            : "No data"
                        }
                      ></td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="flex justify-end mt-2 mr-1">
                  <td
                    colSpan={months.length}
                    className="text-center text-muted-foreground text-sm"
                  >
                    Total Contributions: {totalContributions}
                  </td>
                </tr>
              </tfoot>
            </table>
          ) : (
            <div className="h-[164px]"></div>
          )}
        </div>
      </FadeTransition>
    </>
  );
}
