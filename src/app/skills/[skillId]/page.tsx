import React from "react";
import { Metadata } from "next";
import { SkillList } from "@/components/Skill";
import { getSkill, getSkills } from "@/lib/microcms";
import { Heading } from "@/components/Heading";
import { FadeTransition } from "@/components/FadeIn";
import { baseMetadata } from "@/lib/metadata";
import { HeadGroup } from "@/components/HeadGroup";
import { Border } from "@/components/Border";
import { StarMessage } from "@/components/Stars";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ skillId: string }>;
}): Promise<Metadata> {
  const { skillId } = await params;
  const skill = await getSkill(skillId, { fields: "name,description" });

  return {
    ...baseMetadata,
    title: `${baseMetadata.title} - ${skill.name}`,
    description: skill.description,
  };
}

export async function generateStaticParams() {
  const skills = await getSkills({ fields: "id" });
  return skills.map((skill) => ({
    skillId: skill.id,
  }));
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ skillId: string }>;
}) {
  const { skillId } = await params;

  const skill = await getSkill(skillId);
  return (
    <>
      <HeadGroup>
        <Heading as="h2" className="mb-8 tracking-wide">
          {skill.name}
        </Heading>
        <FadeTransition>
          <p className="text-center md:text-start text-muted-foreground text-sm md:text-base leading-7">
            {skill.description}
          </p>
        </FadeTransition>
      </HeadGroup>
      <Border className="my-24" />
      <StarMessage />
      <section className="mt-16">
        <Heading as="h2" className="mb-8">
          Skills
        </Heading>
        <SkillList className="grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-16 justify-items-center" />
      </section>
    </>
  );
}
