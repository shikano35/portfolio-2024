import { fetchNotionArticles } from "@/lib/notion";
import NotionCard from "@/components/Card/NotionCard";

export default async function Notion() {
  const articles = await fetchNotionArticles();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notion Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {articles.map((article) => (
          <NotionCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
