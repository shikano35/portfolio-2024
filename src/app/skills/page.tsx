import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { SkillList } from "@/components/Skill";
import { StarMessage } from "@/components/Stars";
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
      <HeadGroup className="mb-24">
        <Heading className="mb-12">Skills</Heading>
        <StarMessage />
      </HeadGroup>
      <SkillList className="grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-16 mb-16 justify-items-center" />
    </div>
  );
}
