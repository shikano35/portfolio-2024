import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { SkillList } from "@/components/Skill";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Skills",
  description: "スキル一覧です。",
};

export default function SkillsPage() {
  return (
    <div>
      <HeadGroup className="mb-16">
        <Heading>Skills</Heading>
      </HeadGroup>
      <SkillList />
    </div>
  );
}
