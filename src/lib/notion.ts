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
  type: "title";
  title: {
    type: "text";
    text: {
      content: string;
    };
  }[];
};

type CoverProperty = {
  type: "external";
  external: {
    url: string;
  };
};

function isPageObjectResponse(item: unknown): item is PageObjectResponse {
  return (
    typeof item === "object" &&
    item !== null &&
    "object" in item &&
    item.object === "page" &&
    "properties" in item &&
    "id" in item &&
    "created_time" in item &&
    "url" in item
  );
}

function isNameProperty(property: unknown): property is NameProperty {
  return (
    typeof property === "object" &&
    property !== null &&
    "type" in property &&
    property.type === "title" &&
    "title" in property &&
    Array.isArray(property.title) &&
    property.title.length > 0 &&
    "text" in property.title[0] &&
    "content" in property.title[0].text
  );
}

function isCoverProperty(cover: unknown): cover is CoverProperty {
  return (
    typeof cover === "object" &&
    cover !== null &&
    "type" in cover &&
    cover.type === "external" &&
    "external" in cover &&
    typeof (cover as CoverProperty).external.url === "string"
  );
}

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
      if (!isPageObjectResponse(item)) {
        throw new Error("Notion APIのデータ形式が正しくありません。");
      }

      const { id, created_time: date, url, properties, cover } = item;

      if (!isNameProperty(properties.Name)) {
        throw new Error("Notion APIのNameプロパティの形式が正しくありません。");
      }

      const title = properties.Name.title[0].text.content || "No Title";
      const coverUrl = isCoverProperty(cover) ? cover.external.url : "No Cover";

      return { id, title, date, url, cover: coverUrl };
    });

    return articles;
  } catch (error) {
    console.error("Notion APIのデータ取得に失敗しました:", error);
    throw new Error("データ取得中にエラーが発生しました。");
  }
}
