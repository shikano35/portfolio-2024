import type React from "react";
import { cache } from "react";
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
import { cn } from "@/lib/cn";
import { ClickMotion } from "../ClickMotion";
import { CPlusIcon } from "../Icons/skills/CPlusIcon";
import { CSharpIcon } from "../Icons/skills/CSharpIcon";
import { UnityIcon } from "../Icons/skills/UnityIcon";
import { ArduinoIcon } from "../Icons/skills/ArduinoIcon";
import { FadeIn } from "../FadeIn";
import { StorybookIcon } from "../Icons/skills/StorybookIcon";
import { UnrealEngineIcon } from "../Icons/skills/UnrealEngineIcon";
import { AstroIcon } from "../Icons/skills/AstroIcon";
import { FirebaseIcon } from "../Icons/skills/FirebaseIcon";
import { AWSIcon } from "../Icons/skills/AWSIcon";
import { FlutterIcon } from "../Icons/skills/FlutterIcon";
import { DartIcon } from "../Icons/skills/DartIcon";
import { SupabaseIcon } from "../Icons/skills/SupabaseIcon";
import { GraphQLIcon } from "../Icons/skills/GraphQLIcon";
import { PlaywriteIcon } from "../Icons/skills/PlaywrightIcon";
import { PythonIcon } from "../Icons/skills/PythonIcon";
import { SwaggerIcon } from "../Icons/skills/SwaggerIcon";
import { VitestIcon } from "../Icons/skills/VitestIcon";
import { AnimatedTooltip } from "@/components/AnimatedTooltip";
import { BunIcon } from "../Icons/skills/Bun";
import { BiomeIcon } from "../Icons/skills/Biome";
import { HonoIcon } from "../Icons/skills/Hono";
import { DrizzleORMIcon } from "../Icons/skills/DrizzleORMIcon";
import { CloudflareWorkersIcon } from "../Icons/skills/CloudflareWorkersIcon";
import { GoogleCloudIcon } from "../Icons/skills/GoogleCloudIcon";
import { CloudRunIcon } from "../Icons/skills/CloudRunIcon";
import { VertexAIIcon } from "../Icons/skills/VertexAIIcon";
import { TanStackQueryIcon } from "../Icons/skills/TanStackQueryIcon";
import { ZustandIcon } from "../Icons/skills/ZustandIcon";
import { MSWIcon } from "../Icons/skills/MSW";

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
  { name: "Drizzle ORM", icon: DrizzleORMIcon },
  { name: "Astro", icon: AstroIcon },
  { name: "Biome", icon: BiomeIcon },
  { name: "Storybook", icon: StorybookIcon },
  { name: "Vitest", icon: VitestIcon },
  { name: "Playwright", icon: PlaywriteIcon },
  { name: "microCMS", icon: MicroCMSIcon },
  { name: "Swagger", icon: SwaggerIcon },
  { name: "GraphQL", icon: GraphQLIcon },
  { name: "Bun", icon: BunIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Go", icon: GoIcon },
  { name: "Hono", icon: HonoIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "Supabase", icon: SupabaseIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Github Actions", icon: GithubActionsIcon },
  { name: "AWS", icon: AWSIcon },
  { name: "Cloud Run", icon: CloudRunIcon },
  { name: "Vertex AI", icon: VertexAIIcon },
  { name: "Google Cloud", icon: GoogleCloudIcon },
  { name: "Cloudflare Workers", icon: CloudflareWorkersIcon },
  { name: "Dart", icon: DartIcon },
  { name: "Flutter", icon: FlutterIcon },
  { name: "Rust", icon: RustIcon },
  { name: "C", icon: CIcon },
  { name: "C++", icon: CPlusIcon },
  { name: "C#", icon: CSharpIcon },
  { name: "Unity", icon: UnityIcon },
  { name: "Unreal Engine", icon: UnrealEngineIcon },
  { name: "Arduino", icon: ArduinoIcon },
  { name: "Python", icon: PythonIcon },
  { name: "TanStack Query", icon: TanStackQueryIcon },
  { name: "Zustand", icon: ZustandIcon },
  { name: "MSW", icon: MSWIcon },
];

type MergedSkill = {
  id: string;
  name: string;
  level: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isFavorite: boolean;
};

type SkillItemProps = {
  skill: MergedSkill;
  showClickMotion?: boolean;
  showName?: boolean;
  showStars?: boolean;
  showBorder?: boolean;
  iconSize?: string;
};

function DefaultIcon() {
  return (
    <div className="w-16 h-16 bg-popover rounded-full" aria-hidden="true" />
  );
}

const fetchMergedSkills = cache(
  async ({ skills }: { skills?: string[] } = {}): Promise<MergedSkill[]> => {
    const cmsSkills = await getSkills({
      limit: 50,
      fields: "id,name,level,isFavorite",
    });

    const skillMap = new Map(Skills.map((s) => [s.name, s]));

    const allSkills = cmsSkills
      .filter((cmsSkill) => skillMap.has(cmsSkill.name))
      .map((cmsSkill) => {
        const skill = skillMap.get(cmsSkill.name);

        return {
          ...cmsSkill,
          icon: skill?.icon || DefaultIcon,
        };
      });

    if (skills && skills.length > 0) {
      return allSkills.filter((skill) => skills.includes(skill.name));
    }

    return allSkills;
  }
);

export const fetchFavoriteSkills = async (): Promise<MergedSkill[]> => {
  const allSkills = await fetchMergedSkills({});
  return allSkills.filter((skill) => skill.isFavorite);
};

const SkillItem = ({
  skill,
  showClickMotion = true,
  showName = true,
  showStars = true,
  showBorder = true,
  iconSize = "size-12 sm:size-14 md:size-16",
}: SkillItemProps) => {
  return (
    <>
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
        <span className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium line-clamp-1">
          {skill.name}
        </span>
      )}
      {showStars && <Stars level={skill.level} />}
    </>
  );
};

export async function SkillList({
  skills,
  showName = true,
  showStars = true,
  showBorder = true,
  iconSize = "size-12 sm:size-14 lg:size-16",
  className = "",
  showClickMotion = true,
  useFavorite = false,
  showAllLevels = false,
}: {
  skills?: string[];
  showName?: boolean;
  showStars?: boolean;
  showBorder?: boolean;
  iconSize?: string;
  className?: string;
  showClickMotion?: boolean;
  useFavorite?: boolean;
  showAllLevels?: boolean;
}) {
  const allSkills = useFavorite
    ? await fetchFavoriteSkills()
    : await fetchMergedSkills({ skills });

  const filteredSkills = allSkills.filter(
    (skill) => showAllLevels || skill.level > 0
  );

  return (
    <div className={cn("grid gap-2", className)}>
      {filteredSkills.map((skill) => (
        <div key={skill.id} className="flex flex-col items-center">
          <FadeIn>
            <Link
              href={`/skills/${skill.id}`}
              aria-label={`View details about ${skill.name}`}
              className="rounded-lg flex flex-col items-center"
            >
              {skills ? (
                <AnimatedTooltip name={skill.name}>
                  <SkillItem
                    skill={skill}
                    showClickMotion={showClickMotion}
                    showName={showName}
                    showStars={showStars}
                    showBorder={showBorder}
                    iconSize={iconSize}
                  />
                </AnimatedTooltip>
              ) : (
                <SkillItem
                  skill={skill}
                  showClickMotion={showClickMotion}
                  showName={showName}
                  showStars={showStars}
                  showBorder={showBorder}
                  iconSize={iconSize}
                />
              )}
            </Link>
          </FadeIn>
        </div>
      ))}
    </div>
  );
}
