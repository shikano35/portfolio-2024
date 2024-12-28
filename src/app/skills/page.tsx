import { FadeInWithStagger } from "@/components/FadeIn";
import { SkillList } from "@/components/Skill";
import React from "react";

export default function Page() {
  return (
    <div>
      <h1>Skill Page</h1>
      <FadeInWithStagger speed={0.1}>
        <SkillList />
      </FadeInWithStagger>
    </div>
  );
}
