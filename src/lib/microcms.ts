import { createClient } from "microcms-js-sdk";

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
  isFavorite?: boolean;
};

export const getSkills = async (isFavorite?: boolean): Promise<Skill[]> => {
  const response = await client.getList<Skill>({
    endpoint: "skills",
    queries: {
      fields: ["id", "name", "level", "description", "isFavorite"],
    },
    customRequestInit: {
      cache: "force-cache",
    },
  });

  let skills = response.contents;

  if (isFavorite !== undefined) {
    skills = skills.filter((skill) => skill.isFavorite === isFavorite);
  }

  return skills;
};
