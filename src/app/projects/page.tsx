import React from "react";
import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { Container } from "@/components/Container";
import { FadeTransition } from "@/components/FadeIn";
import { PersonalProjects } from "@/components/Projects";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Projects",
  description: "制作物一覧です。",
};

export default function ProjectsPage() {
  return (
    <div>
      <Container>
        <HeadGroup>
          <Heading>Projects</Heading>
          <FadeTransition>
            <p className="text-center md:text-start text-muted-foreground text-base leading-8 md:leading-10">
              制作物一覧です。
            </p>
          </FadeTransition>
        </HeadGroup>
        <Heading as="h2" className="mt-48 mb-8">
          PersonalProjects
        </Heading>
        <PersonalProjects />
      </Container>
    </div>
  );
}
