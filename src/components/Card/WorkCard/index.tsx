// src/components/Card/WorkCard/index.tsx
import { FadeIn } from "@/components/FadeIn";
import { Heading } from "@/components/Heading";
import { SkillList } from "@/components/Skill";
import Image from "next/image";
import React from "react";

type WorkCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  devType: string;
  status: string;
  duration: string;
  skills: string[];
};

export default function WorkCard({
  imageSrc,
  title,
  description,
  devType,
  status,
  duration,
  skills,
}: WorkCardProps) {
  return (
    <FadeIn>
      <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/15">
        <div className="relative h-80 shrink-0">
          <Image
            alt={`${title}'s thumbnail`}
            src={imageSrc}
            layout="fill"
            objectFit="cover"
            className="absolute inset-x-0 top-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-10% dark:from-gray-800 dark:from-[-25%]"></div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background ring-1 ring-inset ring-border from-50%"
        ></div>
        <figure className="relative p-10">
          <blockquote className="font-semibold">
            <Heading as="h4" className="relative justify-items-center">
              {title}
            </Heading>
          </blockquote>
          <figcaption className="mt-4 border-t border-border pt-4">
            <FadeIn>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="text-xs font-medium text-muted-foreground border border-muted-foreground rounded-full px-2 tracking-tighter">
                    {devType}
                  </div>
                  {status && (
                    <div className="text-xs font-medium text-muted-foreground border border-muted-foreground rounded-full px-2 tracking-tighter">
                      {status}
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  {duration}
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div
                className="mt-4 mb-8 max-w-[600px] text-sm text-gray-600 dark:text-gray-400 h-20"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </FadeIn>
            <SkillList
              skills={skills}
              showName={false}
              showStars={false}
              showBorder={false}
              showClickMotion={false}
              iconSize="h-7 w-7"
              className="grid-cols-5 gap-2"
            />
          </figcaption>
        </figure>
      </div>
    </FadeIn>
  );
}
