import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export type Skill = {
  id: string;
  name: string;
  level: number;
  description: string;
  isFavorite: boolean;
};

export async function getSkills(queries?: MicroCMSQueries): Promise<Skill[]> {
  const data = await client.getList<Skill>({
    endpoint: "skills",
    queries,
  });
  return data.contents;
}
