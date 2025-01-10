export type Contribution = {
  date: string;
  count: number;
  level: ContributionLevel;
};

type ContributionLevel =
  | "FIRST_QUARTILE"
  | "FOURTH_QUARTILE"
  | "NONE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE";

type ContributionDay = {
  date: string;
  contributionLevel: ContributionLevel;
  contributionCount: number;
};

type Week = {
  contributionDays: ContributionDay[];
};

type ContributionCalendar = {
  months: { name: string }[];
  totalContributions: number;
  weeks: Week[];
};

type UserContributions = {
  contributionsCollection: {
    contributionCalendar: ContributionCalendar;
  };
};

type Result = {
  data: {
    user: UserContributions;
  };
};

const query = `
  query {
    user(login: "shikano35") {
      contributionsCollection {
        contributionCalendar {
          months {
            name
          }
          totalContributions
          weeks {
            contributionDays {
              date
              contributionLevel
              contributionCount
            }
          }
        }
      }
    }
  }
`;

export const fetchContributions = async (
  token: string
): Promise<{
  days: Contribution[];
  totalContributions: number;
}> => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = (await response.json()) as Result;

  const contributionCalendar =
    data.data.user.contributionsCollection.contributionCalendar;

  const days = contributionCalendar.weeks
    .flatMap((week: Week) => week.contributionDays)
    .map((day: ContributionDay) => ({
      date: day.date,
      count: day.contributionCount,
      level: day.contributionLevel,
    }));

  return {
    days,
    totalContributions: contributionCalendar.totalContributions,
  };
};

export const getColorClass = (level: ContributionLevel): string => {
  switch (level) {
    case "FIRST_QUARTILE":
      return "bg-[#9be9a8] dark:bg-[#0e4429]";
    case "SECOND_QUARTILE":
      return "bg-[#40c463] dark:bg-[#006d32]";
    case "THIRD_QUARTILE":
      return "bg-[#30a14e] dark:bg-[#26a641]";
    case "FOURTH_QUARTILE":
      return "bg-[#216e39] dark:bg-[#39d353]";
    case "NONE":
    default:
      return "bg-[#ebedf0] dark:bg-[#161b22]";
  }
};

export const groupByWeek = (contributions: Contribution[]) => {
  const weeks: Contribution[][] = [];
  let week: Contribution[] = [];

  contributions.forEach((contribution) => {
    week.push(contribution);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });

  if (week.length > 0) {
    weeks.push(week); // 余った日を追加
  }

  return weeks;
};
