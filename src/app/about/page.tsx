import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/Container";
import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { FadeIn, FadeInWithStagger, FadeTransition } from "@/components/FadeIn";
import { Border } from "@/components/Border";
import { GithubCard } from "@/components/Card/GithubCard";
import { ContributionGraph } from "@/components/ContributionGraph";
import { Logo } from "@/components/Logo";
import { SkillList } from "@/components/Skill";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "About",
  description: "Shin Takemuraの自己紹介ページです。",
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
      "UnrealEngine4を使用して、卒業研究「3Dゲーム開発とゲームAIの制作」を行う",
  },
  {
    id: 5,
    year: "2024",
    month: "6月 - 9月",
    description: "UnityとC#でゲーム開発を行い東京ゲームショウに出展",
  },
  {
    id: 6,
    year: "2024",
    month: "10月 -",
    description: "Web技術に興味を持ち、プログラミングを本格的に学習し始める",
  },
];

export default function AboutPage() {
  return (
    <Container>
      <header>
        <HeadGroup>
          <Heading>About</Heading>
          <div className="flex items-center justify-center md:justify-start mb-8">
            <FadeTransition>
              <Logo
                alt="My Logo"
                width={96}
                height={96}
                className="flex-shrink-0 dark:hidden h-12 w-12 md:h-16 md:w-16 border border-border rounded-full"
              />
              <Logo
                alt="My Logo"
                width={96}
                height={96}
                src="/my-icon-dark.webp"
                className="flex-shrink-0 hidden dark:block h-12 w-12 md:h-16 md:w-16 border border-border rounded-full"
              />
            </FadeTransition>
            <Heading as="h3" className="tracking-wide m-4 whitespace-nowrap">
              Shin Takemura
            </Heading>
          </div>
          <FadeTransition>
            <p className="text-center md:text-start text-muted-foreground text-sm md:text-base leading-8 md:leading-10">
              エンジニアです。
              <br />
              モダンなWeb技術を中心に学んでいます。
              <br />
              CI/CDの構築やバックエンド開発も勉強しています。
              <br />
              シンプルなデザインとシンプルなアニメーションが好きです。
            </p>
          </FadeTransition>
        </HeadGroup>
      </header>

      <main>
        <Border className="my-16" />
        <section aria-labelledby="experience-heading">
          <Heading as="h3" className="my-16">
            Experience
          </Heading>
          <div className="relative h-full ml-32">
            <div
              className="absolute h-full border-l border-border"
              aria-hidden="true"
            />
            <ol className="grid grid-cols-1 gap-16">
              {timelineData.map((item) => (
                <li key={item.id} className="flex items-center">
                  <span
                    className="absolute z-20 h-2 w-2 rounded-full bg-border -ml-[3.5px] inline-block"
                    aria-hidden="true"
                  />
                  <time
                    className="flex items-center justify-center -ml-28 md:-ml-32 font-bold text-4xl text-gray-300 dark:text-gray-700"
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
          </div>
        </section>

        <Border className="my-16" />
        <section aria-labelledby="tech-heading">
          <Heading as="h3" className="my-12">
            Tech
          </Heading>
          <div className="flex flex-1 justify-center">
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
              <div className="md:flex md:flex-auto md:-ml-8 lg:ml-0 md:col-start-7 lg:col-start-8 mt-32 md:mt-0">
                <GithubCard>
                  <ContributionGraph />
                </GithubCard>
              </div>
            </div>
          </div>
        </section>

        <Border className="my-16" />
        <section aria-labelledby="hobbies-heading">
          <Heading as="h4" className="mt-16 mb-4">
            Hobbies
          </Heading>
          <FadeTransition>
            <p className="text-center md:text-start text-muted-foreground text-sm leading-6">
              趣味は読書とプログラミングです。
              <br />
              小説と技術書をよく読みます。
              <br />
              長期的な休みはアウトドアも楽しみます。多趣味です。
            </p>
          </FadeTransition>
        </section>

        <section aria-labelledby="curiosity-heading">
          <Heading as="h4" className="mt-12 mb-4">
            Curiosity
          </Heading>
          <FadeTransition>
            <p className="text-center md:text-start text-muted-foreground text-sm leading-6">
              知識を得たり、物事を深く考えることが好きです。
              <br />
              様々な学問分野に興味があります。
            </p>
          </FadeTransition>
        </section>
      </main>
    </Container>
  );
}
