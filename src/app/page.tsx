import React from "react";
import { MyIcon } from "@/components/Icons/MyIcon";
import { FadeIn } from "@/components/FadeIn";
import { Heading } from "@/components/Heading";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <Container className="overflow-hidden py-24 md:py-32 md:pb-32">
      <div className="md:grid md:grid-cols-12 md:gap-y-10 md:pt-6">
        <div className="relative z-10 md:col-span-6">
          <Heading className="md:text-start">Profile</Heading>
          <FadeIn>
            <p className="text-center md:text-start mt-16 text-muted-foreground text-sm leading-8 md:text-base md:leading-10">
              深く考えながら、少しずつ学びを積み重ねるエンジニアです。
            </p>
          </FadeIn>
          <FadeIn>
            <p className="text-center md:text-start text-muted-foreground text-sm leading-8 md:text-base md:leading-10">
              私の作った作品が、少しでも誰かの生活に寄り添えたら嬉しいです。
            </p>
          </FadeIn>
        </div>
        <div className="relative z-0 md:col-span-5 md:flex md:items-center">
          <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-60 sm:-translate-x-32 md:-translate-x-64 lg:-translate-x-40 opacity-30 md:opacity-50">
            <MyIcon />
          </div>
        </div>
        <div className="relative z-10 md:col-span-6 md:py-16 py-32">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <p className="text-center md:text-start text-base font-semibold text-primary">
                My Favorite Tech Stack
              </p>
              {/* <FavoriteSkills /> */}
            </FadeIn>
          </div>
        </div>
      </div>
    </Container>
  );
}
