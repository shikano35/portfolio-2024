import Image from "next/image";
import React from "react";
import { FadeInWithStagger, FadeTransition } from "@/components/FadeIn";
import { Heading } from "@/components/Heading";
import { SkillList } from "@/components/Skill";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { Badge } from "@/components/Badge";

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
      <div className="group relative flex flex-col overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/15 h-full">
        <div className="relative h-80 shrink-0">
          <Image
            alt={`${title}のサムネイル`}
            className="absolute inset-x-0 top-0 w-full h-full object-cover"
            fill
            priority
            sizes="50vw"
            src={imageSrc}
            style={{ objectFit: "cover" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-white to-10% dark:from-gray-800 dark:from-[-25%]"
            aria-hidden="true"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background ring-1 ring-inset ring-border from-55%"
        />
        <figure className="relative p-10 flex flex-col h-full">
          <div className="flex-grow">
            <blockquote className="font-semibold">
              <Heading
                as="h4"
                className="relative justify-items-center sm:line-clamp-1"
              >
                {title}
              </Heading>
            </blockquote>
            <figcaption className="mt-4 border-t border-border pt-4">
              <FadeTransition>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <Badge>{devType}</Badge>
                    {status && <Badge>{status}</Badge>}
                    {link && (
                      <div className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                        {duration}
                      </div>
                    )}
                  </div>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary underline"
                      aria-label={`${title}のプロジェクトページへ`}
                    >
                      <span className="text-xs font-medium text-muted-foreground">
                        View
                      </span>
                      <ArrowTopRightOnSquareIcon
                        className="w-4 h-4 inline-block ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <div className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      {duration}
                    </div>
                  )}
                </div>
              </FadeTransition>
              <FadeTransition>
                <div
                  className="mt-4 max-w-[600px] text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </FadeTransition>
            </figcaption>
          </div>
          <div className="mt-6 min-h-[100px] -mb-8">
            <FadeInWithStagger>
              <SkillList
                className="grid grid-cols-5 gap-2 place-items-start"
                iconSize="size-6 sm:size-7 md:size-6 lg:size-7"
                showAllLevels
                showBorder={false}
                showClickMotion={false}
                showName={false}
                showStars={false}
                skills={skills}
              />
            </FadeInWithStagger>
          </div>
        </figure>
      </div>
    </FadeTransition>
  );
}
