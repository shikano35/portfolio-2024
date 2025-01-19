import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { Blackhole } from "@/components/Icons/Blackhole";
import React from "react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "About",
  description: "自己紹介です。",
};

export default function AboutPage() {
  return (
    <>
      <Container>
        <div className="md:grid md:grid-cols-12">
          <HeadGroup className="relative z-10 md:col-span-12">
            <Heading>About</Heading>
            <p className="text-start text-muted-foreground text-base leading-8 md:leading-10">
              駆け出しエンジニアです。
              <br />
              Next.jsやTypeScriptなど、Web技術を学んでいます。
              <br />
              また、CI/CDの構築やバックエンドの知識も学んでいます。
            </p>
            <p className="text-start text-muted-foreground text-base leading-8 md:leading-10 mt-8">
              シンプルなデザイン、アニメーションが好きです。
              <br />
              好きなことに没頭する際の集中力と、新しい技術や知識を学び続ける探究心は自信があります。
            </p>
          </HeadGroup>
        </div>
        <div className="relative -z-50 md:col-span-5 md:flex md:items-center">
          <div className="absolute transform -translate-y-3/4 sm:-translate-y-2/3 md:-translate-y-1/2 -translate-x-5 sm:translate-x-32 md:translate-x-96 lg:translate-x-[32rem] opacity-5 md:opacity-10 -rotate-12 scale-150">
            <Blackhole className="h-96 w-96" />
          </div>
        </div>

        <Heading as="h3" className="mt-16">
          <FadeIn>Experience</FadeIn>
        </Heading>
      </Container>
    </>
  );
}
