import React from "react";
import { MySQLIcon } from "@/components/Icons/skills/MySQLIcon";
import { PythonIcon } from "@/components/Icons/skills/PythonIcon";
import { CIcon } from "@/components/Icons/skills/CIcon";
import { GithubActionsIcon } from "@/components/Icons/skills/GithubActionsIcon";
import { NodejsIcon } from "@/components/Icons/skills/NodejsIcon";
import { JavaScriptIcon } from "@/components/Icons/skills/JSIcon";
import { HTMLIcon } from "@/components/Icons/skills/HTMLIcon";
import { CSSIcon } from "@/components/Icons/skills/CSSIcon";
import { TailwindIcon } from "@/components/Icons/skills/TailwindIcon";
import { RustIcon } from "@/components/Icons/skills/RustIcon";
import { ReactIcon } from "@/components/Icons/skills/ReactIcon";
import { PrismaIcon } from "@/components/Icons/skills/PrismaIcon";
import { NextjsIcon } from "@/components/Icons/skills/NextjsIcon";
import { DockerIcon } from "@/components/Icons/skills/DockerIcon";
import { GoIcon } from "@/components/Icons/skills/GoIcon";
import { TypescriptIcon } from "@/components/Icons/skills/TSIcon";

type Skill = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const Skills: Skill[] = [
  { name: "MySQL", icon: MySQLIcon },
  { name: "Python", icon: PythonIcon },
  { name: "C", icon: CIcon },
  { name: "Github Actions", icon: GithubActionsIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "Rust", icon: RustIcon },
  { name: "React", icon: ReactIcon },
  { name: "Prisma", icon: PrismaIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Go", icon: GoIcon },
  { name: "TypeScript", icon: TypescriptIcon },
];

export function FavoriteSkills() {
  return (
    <ul>
      {Skills.map((skill) => (
        <li key={skill.name}>{skill.name}</li>
      ))}
    </ul>
  );
}
