import Image from "next/image";
import React from "react";
import { FadeInWithStagger, FadeTransition } from "@/components/FadeIn";
import { Heading } from "@/components/Heading";
import { SkillList } from "@/components/Skill";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

type WorkCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  devType: string;
  status: string;
  duration: string;
  link: string;
  skills: string[];
};

export default function PersonalProjectCard({
  imageSrc,
  title,
  description,
  devType,
  status,
  duration,
  link,
  skills,
}: WorkCardProps) {
  return (
    <FadeTransition>
      <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/15 h-full">
        <div className="relative h-80 shrink-0">
          <Image
            alt={`${title}'s thumbnail`}
            className="absolute inset-x-0 top-0 w-full h-full object-cover"
            fill
            priority
            sizes="50vw"
            src={imageSrc}
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-10% dark:from-gray-800 dark:from-[-25%]" />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background ring-1 ring-inset ring-border from-55%"
        />
        <figure className="relative p-10">
          <blockquote className="font-semibold">
            <Heading
              as="h4"
              className="relative justify-items-center sm:line-clamp-1"
            >
              {title}
            </Heading>
          </blockquote>
          <figcaption className="mt-4 border-t border-border pt-4 h-52 sm:h-48 lg:h-56">
            <FadeTransition>
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
                  {link && (
                    <div className=" font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      {duration}
                    </div>
                  )}
                </div>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-muted-foreground underline"
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      View Project
                    </span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 inline-block ml-1" />
                  </a>
                ) : (
                  <div className=" font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {duration}
                  </div>
                )}
              </div>
            </FadeTransition>
            <FadeTransition>
              <div
                className="mt-4 mb-8 max-w-[600px] text-sm text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </FadeTransition>
          </figcaption>
          <FadeInWithStagger>
            <SkillList
              className="grid-cols-5 gap-2 mt-0 md:mt-14 lg:mt-0"
              iconSize="size-6 sm:size-7 md:size-6 lg:size-7"
              showAllLevels
              showBorder={false}
              showClickMotion={false}
              showName={false}
              showStars={false}
              skills={skills}
            />
          </FadeInWithStagger>
        </figure>
      </div>
    </FadeTransition>
  );
}
