import { Container } from "@/components/Container";
import { FadeTransition } from "@/components/FadeIn";
import { HeadGroup } from "@/components/HeadGroup";
import { Heading } from "@/components/Heading";
import React from "react";

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
