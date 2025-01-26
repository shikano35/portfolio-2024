import { Client } from "@notionhq/client";
import {
  QueryDatabaseResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type Article = {
  id: string;
  title: string;
  date: string;
  url: string;
  cover?: string;
};

type NameProperty = {
  type: string;
  title: {
    type: string;
    text: {
      content: string;
    };
  }[];
};

type CoverProperty = {
  type: string;
  external: {
    url: string;
  };
};

export async function fetchNotionArticles(): Promise<Article[]> {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    throw new Error("データベースIDが設定されていません。");
  }

  try {
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: databaseId,
    });

    const articles: Article[] = response.results.map((item) => {
      if (!("properties" in item) || !("url" in item)) {
        throw new Error("Item is not a valid page object.");
      }

      const page = item as PageObjectResponse;
      const properties = page.properties;
      const nameProperty = properties.Name as NameProperty;
      const CoverProperty = page.cover as CoverProperty;

      const id = page.id;
      const title = nameProperty?.title?.[0].text.content || "No Title";
      const date = page.created_time;
      const cover = CoverProperty?.external?.url || "No Cover";
      const url = page.url;

      return {
        id,
        title,
        date,
        cover,
        url,
      };
    });

    return articles;
  } catch (error) {
    console.error("Notion APIのデータ取得に失敗しました:", error);
    throw new Error("データ取得中にエラーが発生しました。");
  }
}
