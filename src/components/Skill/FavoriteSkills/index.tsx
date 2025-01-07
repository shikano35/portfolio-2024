import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { fetchFavoriteSkills } from "@/components/Skill";
import { FadeIn } from "@/components/FadeIn";
import { SkillCard } from "@/components/Card/SkillCard";

export async function FavoriteSkills({ className = "" }) {
  const favoriteSkills = await fetchFavoriteSkills();

  return (
    <div
      className={clsx(
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
  );
}
