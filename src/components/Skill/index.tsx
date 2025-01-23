import React, { cache } from "react";
import Link from "next/link";
import { MySQLIcon } from "@/components/Icons/skills/MySQLIcon";
import { PostgreSQLIcon } from "@/components/Icons/skills/PostgreSQLIcon";
import { CIcon } from "@/components/Icons/skills/CIcon";
import { SassIcon } from "@/components/Icons/skills/SassIcon";
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
import { MicroCMSIcon } from "@/components/Icons/skills/microCMSIcon";
import { getSkills } from "@/lib/microcms";
import { Stars } from "@/components/Stars";
import { SkillCard } from "@/components/Card/SkillCard";
import { cn } from "@/lib/utils";
import { ClickMotion } from "../ClickMotion";
import { CPlusIcon } from "../Icons/skills/CPlusIcon";
import { CSharpIcon } from "../Icons/skills/CSharpIcon";
import { UnityIcon } from "../Icons/skills/UnityIcon";
import { ArduinoIcon } from "../Icons/skills/ArduinoIcon";
import { FadeIn } from "../FadeIn";

type Skill = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const Skills: Skill[] = [
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "Sass", icon: SassIcon },
  { name: "JavaScript", icon: JSIcon },
  { name: "TypeScript", icon: TSIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Prisma", icon: PrismaIcon },
  { name: "microCMS", icon: MicroCMSIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Go", icon: GoIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Github Actions", icon: GithubActionsIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "Rust", icon: RustIcon },
  { name: "C", icon: CIcon },
  { name: "C++", icon: CPlusIcon },
  { name: "C#", icon: CSharpIcon },
  { name: "Unity", icon: UnityIcon },
  { name: "Arduino", icon: ArduinoIcon },
];

type MergedSkill = {
  id: string;
  name: string;
  level: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isFavorite: boolean;
};

function DefaultIcon() {
  return (
    <div className="w-16 h-16 bg-popover rounded-full" aria-hidden="true" />
  );
}

async function fetchSkills(): Promise<MergedSkill[]> {
  const cmsSkills = await getSkills({
    limit: 50,
    fields: "id,name,level,isFavorite",
  });

  const skillMap = new Map(Skills.map((s) => [s.name, s]));

  return cmsSkills
    .filter((cmsSkill) => skillMap.has(cmsSkill.name))
    .map((cmsSkill) => {
      const skill = skillMap.get(cmsSkill.name);

      return {
        ...cmsSkill,
        icon: skill?.icon || DefaultIcon,
      };
    });
}

const fetchMergedSkills = cache(
  async ({ skills }: { skills?: string[] } = {}): Promise<MergedSkill[]> => {
    const allSkills = await fetchSkills();

    if (skills && skills.length > 0) {
      return allSkills.filter((skill) => skills.includes(skill.name));
    }

    return allSkills;
  }
);

export const fetchFavoriteSkills = cache(async (): Promise<MergedSkill[]> => {
  const allSkills = await fetchMergedSkills();
  return allSkills.filter((skill) => skill.isFavorite);
});

export async function SkillList({
  skills,
  showName = true,
  showStars = true,
  showBorder = true,
  iconSize = "w-16 h-16",
  className = "",
  showClickMotion = true,
  useFavorite = false,
}: {
  skills?: string[];
  showName?: boolean;
  showStars?: boolean;
  showBorder?: boolean;
  iconSize?: string;
  className?: string;
  showClickMotion?: boolean;
  useFavorite?: boolean;
}) {
  const allSkills = useFavorite
    ? await fetchFavoriteSkills()
    : await fetchMergedSkills({ skills });
  return (
    <div className={cn("grid gap-2", className)}>
      {allSkills.map((skill) => (
        <div key={skill.id} className="flex flex-col items-center">
          <FadeIn>
            <Link
              href={`/skills/${skill.id}`}
              aria-label={`View details about ${skill.name}`}
              className="rounded-lg text-center"
            >
              {showClickMotion ? (
                <ClickMotion>
                  <SkillCard showBorder={showBorder}>
                    <skill.icon className={iconSize} />
                  </SkillCard>
                </ClickMotion>
              ) : (
                <SkillCard showBorder={showBorder}>
                  <skill.icon className={iconSize} />
                </SkillCard>
              )}
              {showName && (
                <span className="mt-2 text-sm text-muted-foreground font-medium">
                  {skill.name}
                </span>
              )}
              {showStars && <Stars level={skill.level} />}
            </Link>
          </FadeIn>
        </div>
      ))}
    </div>
  );
}
