import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { SkillList } from "@/components/Skill";
import React from "react";

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
