import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "About",
  description: "自己紹介です。",
};

export default function AboutPage() {
  return (
    <HeadGroup>
      <Heading>About</Heading>
    </HeadGroup>
  );
}
