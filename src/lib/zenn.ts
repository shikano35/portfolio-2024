type ZennUser = {
  id: number;
  username: string;
  name: string;
  avatar_small_url: string;
};

export type ZennArticle = {
  id: number;
  post_type: string;
  title: string;
  slug: string;
  comments_count: number;
  liked_count: number;
  bookmarked_count: number;
  body_letters_count: number;
  article_type: string;
  emoji: string;
  is_suspending_private: boolean;
  published_at: string;
  body_updated_at: string;
  source_repo_updated_at: string | null;
  pinned: boolean;
  path: string;
  user: ZennUser;
  publication: null | {
    id: number;
    name: string;
    slug: string;
  };
};

type ZennArticlesResponse = {
  articles: ZennArticle[];
};

export async function fetchZennArticles(): Promise<ZennArticle[]> {
  const response = await fetch(
    `https://zenn.dev/api/articles?username=shikano35&order=latest`,
    {
      next: { revalidate: 86400 },
    }
  );
  if (!response.ok) {
    throw new Error("Zennの記事データの取得に失敗しました");
  }
  const data: ZennArticlesResponse = await response.json();
  return data.articles;
}
