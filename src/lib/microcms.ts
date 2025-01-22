import {
  createClient,
  type MicroCMSQueries,
  MicroCMSImage,
} from "microcms-js-sdk";

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

export type Work = {
  id: string;
  title: string;
  thumbnail: MicroCMSImage;
  description: string;
  category: string[];
  devType: string[];
  skills: string[];
  status: string[];
  link: string;
  duration: string;
};

export async function getSkills(queries?: MicroCMSQueries): Promise<Skill[]> {
  const data = await client.getList<Skill>({
    endpoint: "skills",
    queries,
  });
  return data.contents;
}

export async function getSkill(
  id: string,
  queries?: MicroCMSQueries
): Promise<Skill> {
  const data = await client.get<Skill>({
    endpoint: "skills",
    contentId: id,
    queries,
  });
  return data;
}

export async function getWorks(queries?: MicroCMSQueries): Promise<Work[]> {
  const data = await client.getList<Work>({
    endpoint: "projects",
    queries,
  });
  return data.contents;
}
