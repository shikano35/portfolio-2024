import React from "react";
import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Works",
  description: "制作物一覧です。",
};

export default function WorksPage() {
  return (
    <div>
      <Container>
        <HeadGroup>
          <Heading>Works</Heading>
        </HeadGroup>
      </Container>
    </div>
  );
}
