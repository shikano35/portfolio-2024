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
        <div className="relative -z-50 md:col-span-5 md:flex md:items-center">
          <div className="absolute top-2/3 transform -translate-y-1/2 -translate-x-48 sm:-translate-x-32 md:-translate-x-64 lg:-translate-x-48 opacity-30 md:opacity-50">
            <MyIcon />
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-12 mt-32 mb-16">
        <div className="relative z-20 md:col-span-5 mt-32 md:mt-16">
          <FadeIn>
            <p className="text-center md:text-start text-base font-semibold text-primary">
              My Favorite Tech Stack
            </p>
            <FavoriteSkills className="mt-4" />
          </FadeIn>
        </div>
        <div className="relative z-20 md:col-span-5 mt-32 md:mt-[104px] md:col-start-8">
          <Card>
            <FadeIn>
              <Link href="https://github.com/shikano35">
                <header className="flex items-center justify-center p-1 rounded-lg w-32 hover:bg-input">
                  <GithubIcon className="w-8 h-8" />
                  <Heading as="h6" className="font-semibold text-primary ml-4">
                    Github
                  </Heading>
                </header>
              </Link>
            </FadeIn>
            <ContributionGraph />
          </Card>
        </div>
      </div>

      <Border className="mb-16" />
    </>
  );
}
