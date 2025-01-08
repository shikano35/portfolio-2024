import React from "react";
import { MyIcon } from "@/components/Icons/MyIcon";
import { FadeIn } from "@/components/FadeIn";
import { Heading } from "@/components/Heading";
import { FavoriteSkills } from "@/components/Skill/FavoriteSkills";
import { HeadGroup } from "@/components/HeadGroup";
import { Card } from "@/components/Card";
import { GithubIcon } from "@/components/Icons/social/GithubIcon";
import { ContributionGraph } from "@/components/ContributionGraph";
import Link from "next/link";
import { Border } from "@/components/Border";
import { HeroImage } from "@/components/HeroImage";
import { WorkProjects } from "@/components/WorkProjects";
import { PersonalProjects } from "@/components/PersonalProjects";
import { Cosense } from "@/components/Log/Cosense";
import { Zenn } from "@/components/Log/Zenn";
import { Notion } from "@/components/Log/Notion";

export default function Home() {
  return (
    <>
      <div className="md:grid md:grid-cols-12">
        <HeadGroup className="relative z-10 md:col-span-6">
          <Heading>Profile</Heading>
          <p className="text-center md:text-start text-muted-foreground text-base leading-8 md:leading-10">
            こんにちは。エンジニアです。
            <br />
            深く考えながら、少しずつ学んでいます。
          </p>
        </HeadGroup>
        <HeroImage className="-translate-x-48 sm:-translate-x-32 md:-translate-x-64 lg:-translate-x-48 opacity-30 md:opacity-50">
          <MyIcon />
        </HeroImage>
      </div>

      <div className="md:grid md:grid-cols-12 mt-32">
        <div className="md:col-span-5 mx-16 md:mx-0 md:my-6">
          <FadeIn>
            <Heading as="h6">My Favorite Tech Stack</Heading>
            <FavoriteSkills className="mt-8" />
          </FadeIn>
        </div>
        <div className="md:col-span-12 md:col-start-8 mt-32 md:mt-0">
          <Link href="https://github.com/shikano35">
            <Card className="mx-16 md:mx-0 h-[278px] hover:bg-input">
              <FadeIn>
                <header className="flex items-center justify-center p-1 rounded-lg w-32">
                  <GithubIcon className="w-8 h-8" />
                  <Heading as="h6" className="font-semibold text-primary ml-4">
                    Github
                  </Heading>
                </header>
              </FadeIn>
              <ContributionGraph />
            </Card>
          </Link>
        </div>
      </div>
      <Border className="my-16" />
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
          <Heading as="h4" className="mb-4">
            Cosense
          </Heading>
        </FadeIn>
        <Cosense />
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
    </>
  );
}
