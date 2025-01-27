import React from "react";
import { fetchNotionArticles } from "@/lib/notion";
import NotionCard from "@/components/Card/NotionCard";
import { FadeIn } from "@/components/FadeIn";

export default async function Notion() {
  const articles = await fetchNotionArticles();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4">
      {articles.map((article) => (
        <FadeIn key={article.id}>
          <NotionCard article={article} />
        </FadeIn>
      ))}
    </div>
  );
}

export const revalidate = 86400;
