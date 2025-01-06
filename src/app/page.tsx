import React from "react";
import { MyIcon } from "@/components/Icons/MyIcon";
import { FadeIn } from "@/components/FadeIn";
import { Heading } from "@/components/Heading";
import { FavoriteSkills } from "@/components/Skill/FavoriteSkills";
import { HeadGroup } from "@/components/HeadGroup";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="md:grid md:grid-cols-12">
        <HeadGroup className="relative z-10 md:col-span-6">
          <Heading>Profile</Heading>
          <FadeIn>
            <p className="text-center md:text-start text-muted-foreground text-sm leading-8 md:leading-10">
              こんにちは。エンジニアです。
              <br />
              深く考えながら、少しずつ学んでいます。
            </p>
          </FadeIn>
        </HeadGroup>
        <div className="relative z-0 md:col-span-5 md:flex md:items-center">
          <div className="absolute top-2/3 transform -translate-y-1/2 -translate-x-48 sm:-translate-x-32 md:-translate-x-64 lg:-translate-x-48 opacity-30 md:opacity-50">
            <MyIcon />
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-12 pt-6">
        <div className="relative z-20 md:col-span-6 mt-32 md:mt-16">
          <FadeIn>
            <p className="text-center md:text-start text-base font-semibold text-primary">
              My Favorite Tech Stack
            </p>
            <FavoriteSkills className="mt-4" />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
