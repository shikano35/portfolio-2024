import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { Blackhole } from "@/components/Icons/Blackhole";
import React from "react";
import { HeroImage } from "@/components/HeroImage";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "About",
  description: "自己紹介です。",
};

export default function AboutPage() {
  return (
    <>
      <div className="md:grid md:grid-cols-12">
        <HeadGroup className="relative z-10 md:col-span-6">
          <Heading>About</Heading>
          <p className="text-center md:text-start text-muted-foreground text-base leading-8 md:leading-10">
            駆け出しエンジニアです。
            <br />
          </p>
        </HeadGroup>
        <HeroImage className="translate-x-5 sm:translate-x-32 md:translate-x-0 lg:translate-x-10 opacity-5 md:opacity-15 -rotate-12 scale-150">
          <Blackhole className="h-96 w-96" />
        </HeroImage>
      </div>
      <div className="md:grid md:grid-cols-12 mt-32">
        <div className="md:col-span-5 mx-16 md:mx-0 md:my-6">
          <Heading as="h6">My Favorite Tech Stack</Heading>
        </div>
      </div>
    </>
  );
}
