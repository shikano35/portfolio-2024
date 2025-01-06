import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Contact",
  description: "お問い合わせページです。",
};

export default function BlogsPage() {
  return (
    <HeadGroup>
      <Heading>Contact</Heading>
    </HeadGroup>
  );
}
