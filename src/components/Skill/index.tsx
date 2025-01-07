import React, { cache } from "react";
import Link from "next/link";
import { MySQLIcon } from "@/components/Icons/skills/MySQLIcon";
import { CIcon } from "@/components/Icons/skills/CIcon";
import { GithubActionsIcon } from "@/components/Icons/skills/GithubActionsIcon";
import { NodejsIcon } from "@/components/Icons/skills/NodejsIcon";
import { JSIcon } from "@/components/Icons/skills/JSIcon";
import { HTMLIcon } from "@/components/Icons/skills/HTMLIcon";
import { CSSIcon } from "@/components/Icons/skills/CSSicon";
import { TailwindIcon } from "@/components/Icons/skills/TailwindIcon";
import { RustIcon } from "@/components/Icons/skills/RustIcon";
import { ReactIcon } from "@/components/Icons/skills/ReactIcon";
import { PrismaIcon } from "@/components/Icons/skills/PrismaIcon";
import { NextjsIcon } from "@/components/Icons/skills/NextjsIcon";
import { DockerIcon } from "@/components/Icons/skills/DockerIcon";
import { GoIcon } from "@/components/Icons/skills/GoIcon";
import { TSIcon } from "@/components/Icons/skills/TSIcon";
import { getSkills } from "@/lib/microcms";
import { FadeIn } from "@/components/FadeIn";
import { Stars } from "@/components/Stars";
import { SkillCard } from "@/components/Card/SkillCard";

type Skill = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const Skills: Skill[] = [
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "JavaScript", icon: JSIcon },
  { name: "TypeScript", icon: TSIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Prisma", icon: PrismaIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Go", icon: GoIcon },
  { name: "Rust", icon: RustIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Github Actions", icon: GithubActionsIcon },
  { name: "C", icon: CIcon },
  { name: "MySQL", icon: MySQLIcon },
];

type MergedSkill = {
  id: string;
  name: string;
  level: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isFavorite: boolean;
};

const fetchSkills = cache(async (): Promise<MergedSkill[]> => {
  const cmsSkills = await getSkills({
    limit: 50,
    fields: "id,name,level,isFavorite",
  });

  return cmsSkills.map((cmsSkill) => {
    const skill = Skills.find((s) => s.name === cmsSkill.name);

    return {
      id: cmsSkill.id,
      name: cmsSkill.name,
      level: cmsSkill.level,
      icon:
        skill?.icon ||
        (() => (
          <div
            className="w-16 h-16 bg-gray-200 rounded-full"
            aria-hidden="true"
          />
        )),
      isFavorite: cmsSkill.isFavorite,
    };
  });
});

const fetchMergedSkills = cache(async (): Promise<MergedSkill[]> => {
  const allSkills = await fetchSkills();
  return allSkills;
});

export async function SkillList() {
  const allSkills = await fetchMergedSkills();

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-16 mb-16 justify-items-center">
      {allSkills.map((skill) => (
        <FadeIn key={skill.id}>
          <Link
            href={`/skills/${skill.id}`}
            aria-label={`View details about ${skill.name}`}
          >
            <div className="flex flex-col items-center">
              <SkillCard>
                <skill.icon className="w-16 h-16" />
              </SkillCard>
              <span className="mt-2 text-sm font-medium">{skill.name}</span>
              <Stars level={skill.level} />
            </div>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}

export const fetchFavoriteSkills = cache(async (): Promise<MergedSkill[]> => {
  const allSkills = await fetchSkills();
  return allSkills.filter((skill) => skill.isFavorite);
});
