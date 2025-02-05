import { Border } from "@/components/Border";
import { Container } from "@/components/Container";
import { FadeTransition } from "@/components/FadeIn";
import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import Notion from "@/components/Log/Notion";
import { Zenn } from "@/components/Log/Zenn";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Log",
  description: "記事と学習記録一覧です。",
};

export default function LogPage() {
  return (
    <div>
      <Container>
        <HeadGroup>
          <Heading>Log</Heading>
          <FadeTransition>
            <p className="text-center md:text-start text-muted-foreground text-base leading-8 md:leading-10">
              記事と学習記録一覧です。
            </p>
          </FadeTransition>
        </HeadGroup>
        <Heading as="h2" className="mt-48 mb-8">
          Zenn
        </Heading>
        <Zenn />
        <Border className="my-24" />
        <Heading as="h2" className="mb-8">
          Notion
        </Heading>
        <Notion />
      </Container>
    </div>
  );
}
