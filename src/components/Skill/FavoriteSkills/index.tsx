import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { fetchFavoriteSkills } from "@/components/Skill";
import { FadeIn } from "@/components/FadeIn";
import { SkillCard } from "@/components/Card/SkillCard";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export async function FavoriteSkills({ className = "" }) {
  const favoriteSkills = await fetchFavoriteSkills();

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "grid grid-cols-3 gap-6 justify-items-center md:justify-items-start",
          className
        )}
      >
        {favoriteSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <FadeIn key={skill.id}>
              <Link
                href={`/skills/${skill.id}`}
                aria-label={`View details about ${skill.name}`}
              >
                <div className="flex flex-col items-center">
                  <SkillCard>
                    <Icon className="w-12 h-12" />
                  </SkillCard>
                </div>
              </Link>
            </FadeIn>
          );
        })}
      </div>
      <FadeIn>
        <div className="flex justify-end m-5">
          <Link
            href="/skills"
            className="flex items-center text-sm p-1 text-muted-foreground hover:text-highlight transition"
          >
            その他のスキルを見る
            <ArrowLongRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
