import React from "react";
import { ZennCard } from "@/components/Card/ZennCard";
import { fetchZennArticles } from "@/lib/zenn";
import { FadeTransition } from "@/components/FadeIn";

export async function Zenn() {
  let articles;

  try {
    articles = await fetchZennArticles();
  } catch (error) {
    console.error(error);
    return (
      <FadeTransition className="text-destructive text-center">
        記事データの取得中にエラーが発生しました
      </FadeTransition>
    );
  }

  if (articles.length === 0) {
    return (
      <FadeTransition className="text-muted-foreground text-center">
        まだ記事を投稿していません
      </FadeTransition>
    );
  }

  if (!articles) {
    return (
      <FadeTransition className="text-muted-foreground text-center">
        記事がありません
      </FadeTransition>
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
