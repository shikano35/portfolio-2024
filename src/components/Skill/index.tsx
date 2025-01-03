import React, { cache } from "react";
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
import Link from "next/link";
import clsx from "clsx";
import { FadeIn } from "../FadeIn";

type Skill = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const Skills: Skill[] = [
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "JavaScript", icon: JSIcon },
  { name: "TypeScript", icon: TSIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "Prisma", icon: PrismaIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Go", icon: GoIcon },
  { name: "Rust", icon: RustIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Github Actions", icon: GithubActionsIcon },
  { name: "C", icon: CIcon },
  { name: "MySQL", icon: MySQLIcon },
];

async function fetchSkills({ skills }: { skills: string[] }) {
  const contents = await getSkills({
    limit: 50,
    fields: ["id", "name", "level"],
  });

  const filtered = Skills.filter((skill) => skills.includes(skill.name));

  const result = filtered.map((skill) => {
    const find = contents.find((s) => s.name === skill.name);
    return { ...skill, id: find?.id ?? "", level: find?.level ?? 0 };
  });

  return result;
}

const selectedSkills = cache(fetchSkills);

export async function SkillList() {
  const allSkills = await selectedSkills({
    skills: Skills.map((skill) => skill.name),
  });

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {allSkills.map((skill) => (
        <FadeIn key={skill.name}>
          <div className="flex flex-col items-center">
            <Link
              href={`/skills/${skill.id}`}
              className={clsx(
                "relative block aspect-[9/10] flex-none overflow-hidden rounded-xl bg-white/50 shadow-lg ring ring-gray-100 transition-all duration-300 hover:scale-105 hover:ring-gray-300 sm:rounded-2xl dark:bg-gray-600"
              )}
              aria-label={`${skill.name}へのリンク`}
            >
              <skill.icon className="h-full w-full object-cover p-2" />
              <span className="sr-only">{skill.name}へのリンク</span>
            </Link>
            <div className="mt-2 text-center">
              <p className="text-xs font-semibold">{skill.name}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
