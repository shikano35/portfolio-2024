interface Article {
  id: string;
  title: string;
  date?: string;
  description?: string;
}

export default function NotionCard({ article }: { article: Article }) {
  return (
    <div className="border rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
      {/* <p className="text-sm text-gray-500 mb-4">{new Date(article.date).toLocaleDateString()}</p> */}
      <p className="text-gray-700">{article.description}</p>
    </div>
  );
}
