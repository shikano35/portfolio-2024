import React from "react";
import { MyIcon } from "@/components/Icons/MyIcon";
import { FadeIn } from "@/components/FadeIn";
import { Heading } from "@/components/Heading";
import { FavoriteSkills } from "@/components/Skill/FavoriteSkills";
import { HeadGroup } from "@/components/HeadGroup";
import { GithubCard } from "@/components/Card/GithubCard";
import { ContributionGraph } from "@/components/ContributionGraph";
import { Border } from "@/components/Border";
import { HeroImage } from "@/components/HeroImage";
import { WorkProjects } from "@/components/WorkProjects";
import { PersonalProjects } from "@/components/PersonalProjects";
import { Zenn } from "@/components/Log/Zenn";
import { Notion } from "@/components/Log/Notion";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <>
      <Container className="relative flex flex-col">
        <div className="md:grid md:grid-cols-12">
          <HeadGroup className="relative z-10 md:col-span-7">
            <Heading>Profile</Heading>
            <FadeIn>
              <p className="text-center md:text-start text-muted-foreground text-base leading-8 md:leading-10">
                エンジニアです。
                <br />
                深く考えながら、少しずつ学んでいます。
              </p>
            </FadeIn>
          </HeadGroup>
          <HeroImage className="absolute -translate-x-[14rem] sm:-translate-x-24 md:-translate-x-80 lg:-translate-x-64 opacity-30 md:opacity-50">
            <MyIcon />
          </HeroImage>
        </div>
        <div className="flex flex-1 justify-center mt-24">
          <div className="md:grid md:grid-cols-12 mt-32 md:mr-8">
            <div className="md:col-span-5 lg:mx-0">
              <FadeIn>
                <Heading as="h6">My Favorite Tech Stack</Heading>
                <FavoriteSkills className="mt-8" />
              </FadeIn>
            </div>
            <div className="md:flex md:flex-auto md:-ml-8 lg:ml-0 md:col-start-7 lg:col-start-8 mt-32 md:mt-0 ">
              <GithubCard>
                <ContributionGraph />
              </GithubCard>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <Container>
          <Border className="my-24" />
          <div>
            <FadeIn>
              <Heading as="h2" className="mb-8">
                WorkProjects
              </Heading>
            </FadeIn>
            <WorkProjects />
            <FadeIn>
              <Heading as="h2" className="mt-16 mb-8">
                PersonalProjects
              </Heading>
            </FadeIn>
            <PersonalProjects />
            <Border className="my-16" />
          </div>
          <div className="mb-16">
            <FadeIn>
              <Heading as="h4" className="mt-16 mb-4">
                Zenn
              </Heading>
            </FadeIn>
            <Zenn />
            <FadeIn>
              <Heading as="h4" className="mt-16 mb-4">
                Notion
              </Heading>
            </FadeIn>
            <Notion />
          </div>
        </Container>
      </div>
    </>
  );
}
