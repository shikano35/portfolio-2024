import React from "react";
import { ZennCard } from "@/components/Card/ZennCard";
import { fetchZennArticles } from "@/lib/zenn";

export async function Zenn() {
  const username = "shikano35";
  let articles;

  try {
    articles = await fetchZennArticles(username);
  } catch (error) {
    return (
      <div className="text-destructive text-center">
        記事データの取得中にエラーが発生しました
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="text-muted-foreground text-center">記事がありません</div>
    );
  }

  return (
    <article className="grid grid-cols-1 gap-y-16 md:gap-y-16 lg:gap-y-16 gap-4 md:gap-6 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ZennCard key={article.id} {...article} />
      ))}
    </article>
  );
}
