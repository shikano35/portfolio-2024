"use client";

import React from "react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";

export default function NotFound() {
  return (
    <Container>
      <HeadGroup className="mb-24">
        <Heading>Error</Heading>
        <FadeIn>
          <p className="flex items-center justify-center md:justify-start">
            エラーが発生しました。
          </p>
        </FadeIn>
      </HeadGroup>
    </Container>
  );
}
