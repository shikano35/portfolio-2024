export type Contribution = {
  date: string;
  count: number;
};

type Week = {
  contributionDays: ContributionDay[];
};

type ContributionDay = {
  date: string;
  contributionCount: number;
};

type ContributionCalendar = {
  weeks: Week[];
};

type UserContributions = {
  contributionsCollection: {
    contributionCalendar: ContributionCalendar;
  };
};

type Result = {
  data: {
    viewer: UserContributions;
  };
};

export const fetchContributions = async (
  token: string
): Promise<Contribution[]> => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query {
            viewer {
              contributionsCollection {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = (await response.json()) as Result;

  const days =
    data.data.viewer.contributionsCollection.contributionCalendar.weeks
      .flatMap((week: Week) => week.contributionDays)
      .map((day: ContributionDay) => ({
        date: day.date,
        count: day.contributionCount,
      }));

  return days;
};

// 色を設定するヘルパー関数
export const getColor = (count: number): string => {
  if (count === 0) return "#ebedf0";
  if (count < 5) return "#9be9a8";
  if (count < 10) return "#40c463";
  if (count < 20) return "#30a14e";
  return "#216e39";
};

// 週ごとにデータをグループ化する関数
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

// 週の始まり（月曜日）の日付を取得するヘルパー関数
export const getStartOfWeek = (date: Date): Date => {
  const startOfWeek = new Date(date);
  const day = startOfWeek.getDay();
  const diff = day === 0 ? 6 : day - 1; // 日曜日の場合は6, それ以外は月曜日までの日数
  startOfWeek.setDate(startOfWeek.getDate() - diff);
  startOfWeek.setHours(0, 0, 0, 0);
  return startOfWeek;
};
