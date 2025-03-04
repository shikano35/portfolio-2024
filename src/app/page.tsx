import React from "react";
import { FadeInWithStagger, FadeTransition } from "@/components/FadeIn";
import { Heading } from "@/components/Heading";
import { HeadGroup } from "@/components/HeadGroup";
import { GithubCard } from "@/components/Card/GithubCard";
import { ContributionGraph } from "@/components/ContributionGraph";
import { Border } from "@/components/Border";
import { PersonalProjects } from "@/components/Projects";
import { Zenn } from "@/components/Log/Zenn";
import { Container } from "@/components/Container";
import { HeroImage } from "@/components/HeroImage";
import { HeroMyIcon } from "@/components/Icons/HeroMyIcon";
import { SkillList } from "@/components/Skill";
import Notion from "@/components/Log/Notion";

export default function Home() {
  return (
    <>
      <Container className="flex flex-col">
        <div className="md:grid md:grid-cols-12 mb-40">
          <HeadGroup className="relative z-10 md:col-span-7">
            <Heading>Profile</Heading>
            <FadeTransition>
              <p className="text-center md:text-start text-muted-foreground text-sm md:text-base leading-8 md:leading-10">
                『面白い』を創るエンジニアです。
                <br />
                深く考え、視野を広く持つことを大切にしています。
              </p>
            </FadeTransition>
          </HeadGroup>
          <HeroImage className="absolute top-2/3 -translate-y-1/2 -translate-x-[15rem] sm:-translate-x-24 md:-translate-x-80 lg:-translate-x-64 opacity-20 md:opacity-30">
            <HeroMyIcon />
          </HeroImage>
        </div>
      </Container>
      <div>
        <Container>
          <div>
            <FadeTransition>
              <Heading as="h2" className="mt-32 md:mt-16 mb-8">
                PersonalProjects
              </Heading>
            </FadeTransition>
            <PersonalProjects />
            <Border className="my-16" />
          </div>
          <FadeTransition>
            <Heading as="h3" className="mt-16 mb-4">
              Zenn
            </Heading>
          </FadeTransition>
          <Zenn />
          <FadeTransition>
            <Heading as="h3" className="mt-16 mb-4">
              Notion
            </Heading>
          </FadeTransition>
          <Notion />
        </Container>
        <Container>
          <Border className="my-16" />
          <div className="flex flex-1 justify-center mt-16">
            <div className="md:grid md:grid-cols-12 md:mr-8">
              <div className="md:col-span-5 lg:mx-0">
                <Heading as="h6">My Favorite Tech Stack</Heading>
                <FadeInWithStagger>
                  <SkillList
                    className="mt-8 grid grid-cols-3 gap-6 justify-items-center md:justify-items-start"
                    showName={false}
                    showStars={false}
                    iconSize="w-12 h-12"
                    useFavorite={true}
                  />
                </FadeInWithStagger>
              </div>
              <div className="md:flex md:flex-auto md:-ml-8 lg:ml-0 md:col-start-7 lg:col-start-8 mt-32 md:mt-0 ">
                <GithubCard>
                  <ContributionGraph />
                </GithubCard>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
