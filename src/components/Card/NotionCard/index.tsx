import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NotionIcon } from "@/components/Icons/social/NotionIcon";
import { Article } from "@/lib/notion";
import { ClickMotion } from "@/components/ClickMotion";

export default function NotionCard({ article }: { article: Article }) {
  return (
    <Link href={article.url}>
      <ClickMotion smallAnimation={true}>
        <div className="block border border-border rounded-xl shadow-sm bg-background hover:shadow-md active:shadow-sm transition-shadow h-full overflow-hidden">
          <div className="h-40">
            {article.cover && article.cover !== "No Cover" && (
              <Image
                src={article.cover}
                alt="Cover Image"
                width={500}
                height={300}
                className="h-full w-full object-cover mb-4"
              />
            )}
          </div>

          <div className="flex flex-col m-4 mb-2">
            <h2
              className="text-center font-semibold h-full text-ellipsis overflow-hidden whitespace-nowrap mb-4"
              title={article.title}
            >
              {article.title}
            </h2>
            <div className="flex items-center">
              <NotionIcon className="w-3.5 h-3.5 mr-2" />
              <p className="text-xs text-gray-500">
                {new Date(article.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </ClickMotion>
    </Link>
  );
}
