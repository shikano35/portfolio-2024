import { FadeIn } from "@/components/FadeIn";
import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Log",
  description: "記事と学習記録一覧です。",
};

export default function AboutPage() {
  return (
    <div>
      <HeadGroup className="mb-16">
        <Heading>About</Heading>
        <FadeIn>
          <p className="text-center md:text-start text-muted-foreground text-sm leading-8 md:leading-10">
            こんにちは。エンジニアです。
            <br />
          </p>
        </FadeIn>
      </HeadGroup>
    </div>
  );
}
