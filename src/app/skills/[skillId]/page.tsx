import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { SkillList } from "@/components/Skill";
import React from "react";

export default function SkillsPage() {
  return (
    <div>
      <HeadGroup className="mb-32">
        <Heading>Skills</Heading>
        <p className="text-center md:text-start text-muted-foreground text-base leading-8 md:leading-10">
          disctiption
        </p>
      </HeadGroup>

      <SkillList />
    </div>
  );
}
