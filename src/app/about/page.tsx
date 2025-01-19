import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { Blackhole } from "@/components/Icons/Blackhole";
import React from "react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Border } from "@/components/Border";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "About",
  description: "自己紹介です。",
};

type TimelineItem = {
  id: number;
  year: string;
  title?: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2024",
    title: "10月",
    description: "本格的にプログラミングを勉強し始める",
  },
  {
    id: 2,
    year: "2024",
    title: "6月 - 9月",
    description: "東京ゲームショウに向けたゲーム開発を行う",
  },
  {
    id: 3,
    year: "2023",
    title: "4月",
    description: "Javaからオブジェクト指向を学ぶ",
  },
  {
    id: 4,
    year: "2022",
    title: "10月",
    description: "Webプログラミングを学ぶ",
  },
  {
    id: 5,
    year: "2021",
    title: "4月 - 12月",
    description:
      "UnrealEngine4とC++を使用して、卒業研究「3Dゲーム開発とゲームAIの制作」を行う",
  },
  { id: 6, year: "2020", title: "6月", description: "情報技術検定1級合格" },
  { id: 7, year: "2019", title: "5月", description: "C言語を始める" },
  { id: 8, year: "2017", description: "3DCADで情報技術に興味を持つ" },
];

export default function AboutPage() {
  return (
    <>
      <Container>
        <div className="md:grid md:grid-cols-12">
          <HeadGroup className="relative z-10 md:col-span-12">
            <Heading>About</Heading>
            <FadeIn>
              <p className="text-start text-muted-foreground text-base leading-8 md:leading-10">
                エンジニアです。
                <br />
                Next.jsやTypeScriptなど、Web技術を学んでいます。
                <br />
                CI/CDの構築やバックエンドの知識も少しずつ勉強しています。
              </p>
            </FadeIn>
            <FadeIn>
              <p className="text-start text-muted-foreground text-base leading-8 md:leading-10 mt-8">
                シンプルなデザイン、アニメーションが好きです。
                <br />
                好きなことに没頭する集中力と、新しい技術や知識を学び続ける探究心は自信があります。
              </p>
            </FadeIn>
          </HeadGroup>
        </div>
        <div className="relative -z-50 md:col-span-5 md:flex md:items-center">
          <div className="absolute transform -translate-y-3/4 sm:-translate-y-2/3 md:-translate-y-1/2 -translate-x-5 sm:translate-x-32 md:translate-x-96 lg:translate-x-[32rem] opacity-5 md:opacity-10 -rotate-12 scale-150">
            <Blackhole className="h-96 w-96" />
          </div>
        </div>
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
                      {item.title}
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
      </Container>
    </>
  );
}
