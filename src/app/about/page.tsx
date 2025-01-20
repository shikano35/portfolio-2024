import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { Blackhole } from "@/components/Icons/Blackhole";
import React from "react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Border } from "@/components/Border";
import { FavoriteSkills } from "@/components/Skill/FavoriteSkills";
import { GithubCard } from "@/components/Card/GithubCard";
import { ContributionGraph } from "@/components/ContributionGraph";
import { HeroImage } from "@/components/HeroImage";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "About",
  description: "自己紹介です。",
};

type TimelineItem = {
  id: number;
  year: string;
  month?: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  { id: 1, year: "2017", description: "CADで情報技術に興味を持つ" },
  { id: 2, year: "2019", month: "5月", description: "C言語を始める" },
  { id: 3, year: "2020", month: "6月", description: "情報技術検定1級合格" },
  {
    id: 4,
    year: "2021",
    month: "4月 - 12月",
    description:
      "UnrealEngine4とC++を使用して、卒業研究「3Dゲーム開発とゲームAIの制作」を行う",
  },
  {
    id: 5,
    year: "2024",
    month: "6月 - 9月",
    description:
      "UnityとC#を使用して、東京ゲームショウに向けたゲーム開発を行う",
  },
  {
    id: 6,
    year: "2024",
    month: "10月",
    description: "Webプログラミングに興味を持ち、本格的に勉強し始める",
  },
];

export default function AboutPage() {
  return (
    <>
      <Container className="mb-16">
        <div className="md:grid md:grid-cols-12">
          <HeadGroup className="relative z-10 md:col-span-12">
            <Heading>About</Heading>
            <FadeIn>
              <p className="text-start text-muted-foreground text-base leading-8 md:leading-10">
                駆け出しエンジニアです。
                <br />
                Next.jsやTypeScriptなど、Web技術を学んでいます。
                <br />
                CI/CDの構築やバックエンドの技術も少しずつ勉強しています。
              </p>
            </FadeIn>
            <FadeIn>
              <p className="text-start text-muted-foreground text-base leading-8 md:leading-10 mt-8">
                シンプルなデザイン、アニメーションが好きです。
                <br />
              </p>
            </FadeIn>
          </HeadGroup>
        </div>
        <HeroImage className="absolute -translate-y-[80%] md:-translate-y-[60%] translate-x-5 sm:translate-x-40 md:translate-x-80 lg:translate-x-[32rem] opacity-5 md:opacity-10 -rotate-12 scale-150">
          <Blackhole className="h-96 w-96" />
        </HeroImage>
        <Border className="my-16" />
        <Heading as="h3" className="my-16">
          Experience
        </Heading>
        <section
          className="relative h-full ml-32"
          aria-labelledby="timeline-heading"
        >
          <div
            className="absolute h-full border-l border-border"
            aria-hidden="true"
          />
          <Heading as="h2" className="sr-only">
            Timeline
          </Heading>
          <ol className="grid grid-cols-1 gap-16">
            {timelineData.map((item, index) => (
              <li key={index} className="flex items-center">
                <span
                  className="absolute z-20 h-2 w-2 rounded-full bg-border -ml-[3.5px] inline-block"
                  aria-hidden="true"
                />
                <time
                  className="flex items-center justify-center -ml-28 md:-ml-32 font-bold text-4xl primary-foreground opacity-15"
                  dateTime={item.year}
                >
                  <FadeIn>{item.year}</FadeIn>
                </time>

                <div className="flex flex-col ml-12 md:ml-16">
                  <FadeIn>
                    <h3 className="text-sm font-semibold text-primary text-left">
                      {item.month}
                    </h3>
                    <p className="text-muted-foreground text-left">
                      {item.description}
                    </p>
                  </FadeIn>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <Border className="my-16" />
        <Heading as="h3" className="my-16">
          Tech
        </Heading>
        <div className="flex flex-1 justify-center">
          <div className="md:grid md:grid-cols-12 md:mr-8">
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
        <Border className="my-16" />
        <Heading as="h4" className="mt-16 mb-4">
          Hobbies
        </Heading>
        <FadeIn>
          <p className="text-start text-muted-foreground text-sm leading-6">
            趣味は読書、プログラミング、勉強です。
            <br />
            長期的な休みは、一人旅やキャンプなどのアウトドアも楽しみます。
          </p>
        </FadeIn>
      </Container>
    </>
  );
}
