import { Zenn } from "@/components/Icons/social/Zenn";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ZennArticle } from "@/lib/zenn";
import { FadeIn } from "@/components/FadeIn";

export function ZennCard({
  title,
  emoji,
  published_at,
  liked_count,
  user,
}: ZennArticle) {
  const formattedDate = new Date(published_at).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <FadeIn className="flex flex-col rounded-xl bg-white overflow-hidden border border-border">
      <ZennCardHeader title={title} user={user} />
      <ZennCardFooter
        title={title}
        emoji={emoji}
        formattedDate={formattedDate}
        likedCount={liked_count}
      />
    </FadeIn>
  );
}

function ZennCardHeader({
  title,
  user,
}: {
  title: string;
  user: ZennArticle["user"];
}) {
  return (
    <header
      className="bg-gradient-to-br from-blue-400/70 from-50% via-indigo-400/70 via-75% to-purple-500/60 to-100%"
      aria-label="記事ヘッダー"
    >
      <div className="flex justify-center items-center p-3">
        <div className="flex flex-col justify-between h-44 w-full bg-white rounded-lg p-4 shadow-lg">
          <h2
            id={`zenn-card-title-${user.username}`}
            className="text-base text-black font-bold"
          >
            {title}
          </h2>
          <div className="flex justify-between items-center">
            <ZennUserInfo user={user} />
            <Zenn className="w-14" aria-hidden="true" />
          </div>
        </div>
      </div>
    </header>
  );
}

function ZennUserInfo({ user }: { user: ZennArticle["user"] }) {
  return (
    <div className="flex items-center" aria-label="ユーザー情報">
      <Image
        src="/my-icon.webp"
        alt={`${user.username}のアバター`}
        width={24}
        height={24}
        className="rounded-full"
      />
      <p className="text-sm text-black font-semibold ml-2">{user.name}</p>
    </div>
  );
}

function ZennCardFooter({
  title,
  emoji,
  formattedDate,
  likedCount,
}: {
  title: string;
  emoji: string;
  formattedDate: string;
  likedCount: number;
}) {
  return (
    <footer
      className="flex flex-col justify-end h-full bg-background py-2 px-3 border-t border-border"
      aria-label="記事フッター"
    >
      <h3 className="text-sm text-primary font-bold mb-2 h-full">{title}</h3>
      <div className="flex justify-between items-center text-xs text-muted-foreground border-t border-border pt-1">
        <p aria-label="記事カテゴリー">{emoji} zenn.dev</p>
        <div className="flex items-center">
          <time>{formattedDate}</time>
          <div
            className="flex items-center ml-4 sm:ml-2 md:ml-4"
            aria-label="いいね数"
          >
            <HeartIcon
              className="h-3 w-3 mr-0.5 fill-red-500"
              aria-hidden="true"
            />
            <span>{likedCount}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
