import { Container } from "@/components/Container";
import { FadeTransition } from "@/components/FadeIn";
import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "404 Not Found",
  description: "お探しのページが見つかりませんでした。",
};

export default function NotFound() {
  return (
    <Container>
      <HeadGroup className="mb-24">
        <Heading>404</Heading>
        <FadeTransition>
          <p className="flex items-center justify-center md:justify-start">
            お探しのページが見つかりませんでした。
          </p>
        </FadeTransition>
      </HeadGroup>
    </Container>
  );
}
