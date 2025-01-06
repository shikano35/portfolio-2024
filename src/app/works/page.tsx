import React from "react";
import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Works",
  description: "制作物一覧です。",
};

export default function WorksPage() {
  return (
    <div>
      <HeadGroup>
        <Heading>Works</Heading>
      </HeadGroup>
    </div>
  );
}
