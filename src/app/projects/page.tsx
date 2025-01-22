import React from "react";
import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { PersonalProjects } from "@/components/Projects";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Projects",
  description: "制作物一覧です。",
};

export default function ProjectsPage() {
  return (
    <div>
      <Container className="mb-16">
        <HeadGroup>
          <Heading>Projects</Heading>
          <FadeIn>
            <p className="text-center md:text-start text-muted-foreground text-base leading-8 md:leading-10">
              制作物一覧です。
            </p>
          </FadeIn>
        </HeadGroup>
        <FadeIn>
          <Heading as="h2" className="mt-64 mb-8">
            PersonalProjects
          </Heading>
        </FadeIn>
        <PersonalProjects />
      </Container>
    </div>
  );
}
