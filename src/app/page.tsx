import React from "react";
import { MyIcon } from "@/components/Icons/MyIcon";

export default function Home() {
  return (
    <div className="overflow-hidden px-16 py-24 md:px-32 md:py-32 md:pb-32 relative">
      <div className="mx-auto max-w-5xl md:grid md:grid-cols-12 md:gap-x-8 md:gap-y-10">
        <div className="relative z-10 mx-auto max-w-2xl md:col-span-6 md:pt-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary text-center md:text-start">
            Profile
          </h1>
          <p className="text-start md:text-start mt-16 text-muted-foreground text-sm leading-8 md:text-base md:leading-10">
            深く考えながら、少しずつ学びを積み重ねるエンジニアです。
            <br />
            私の作った作品が、少しでも誰かの生活に寄り添えたら嬉しいです。
          </p>
        </div>
        <div className="relative z-0 md:col-span-5 md:flex md:items-center">
          <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-60 sm:-translate-x-32 md:-translate-x-72 lg:-translate-x-40 opacity-30 md:opacity-50">
            <MyIcon />
          </div>
        </div>
        <div className="relative z-10 md:col-span-6 md:py-16 py-32">
          <div className="max-w-7xl mx-auto">
            <p className="text-center md:text-start text-base font-semibold text-primary">
              My Favorite Tech Stack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
