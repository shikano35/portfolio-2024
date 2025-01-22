import React from "react";
import { Metadata } from "next";
import { SkillList } from "@/components/Skill";
import { getSkill, getSkills } from "@/lib/microcms";
import { Heading } from "@/components/Heading";
import { FadeIn } from "@/components/FadeIn";
import { baseMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { HeadGroup } from "@/components/HeadGroup";

export async function generateMetadata({
  params,
}: {
  params: { skillId: string };
}): Promise<Metadata> {
  // paramsを非同期的に解決
  const { skillId } = await params;
  const skill = await getSkill(skillId, { fields: "name,description" });

  return {
    ...baseMetadata,
    title: skill.name,
    description: skill.description,
  };
}

// Static Paramsの生成
export async function generateStaticParams() {
  const skills = await getSkills({ fields: "id" });
  return skills.map((skill) => ({
    skillId: skill.id,
  }));
}

// ページのメインコンポーネント
export default async function SkillDetailPage({
  params,
}: {
  params: { skillId: string };
}) {
  // params.skillId を直接使用せず変数に代入
  const { skillId } = await params;

  const skill = await getSkill(skillId);
  return (
    <Container>
      <HeadGroup>
        <Heading>{skill.name}</Heading>
        <FadeIn>
          <p className="text-muted-foreground text-base leading-7">
            {skill.description}
          </p>
        </FadeIn>
      </HeadGroup>
      <section className="mt-32">
        <Heading as="h2" className="mb-8">
          Skills
        </Heading>
        <SkillList className="grid-cols-3 md:grid-cols-5 gap-16 justify-items-center" />
      </section>
    </Container>
  );
}
