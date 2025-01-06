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
      </HeadGroup>
    </div>
  );
}
