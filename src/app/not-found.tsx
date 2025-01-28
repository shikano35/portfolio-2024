import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import React from "react";

export default function NotFound() {
  return (
    <Container>
      <HeadGroup className="mb-24">
        <Heading>404</Heading>
        <FadeIn>
          <p className="flex items-center justify-center md:justify-start">
            お探しのページが見つかりませんでした。
          </p>
        </FadeIn>
      </HeadGroup>
    </Container>
  );
}
