import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/cn";
import { FadeIn } from "../FadeIn";

type StarsProps = {
  level: number;
  className?: string;
};

const message = [
  "触れたことあり",
  "興味あり",
  "少しだけわかる",
  "ちょっとわかる",
  "それなりにわかる",
  "ちょっとできる",
];

export function Stars({ level, className }: StarsProps) {
  const totalStars = 5;
  const starColor =
    level <= 2
      ? "text-yellow-400 dark:text-yellow-500"
      : level <= 4
        ? "text-orange-400 dark:text-orange-500"
        : "text-red-500";
  return (
    <div
      role="img"
      aria-label={`Skill level: ${level} out of ${totalStars}`}
      className="flex"
    >
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon
          key={index}
          className={cn(
            "size-3 mx-0.5",
            className,
            index < level ? starColor : "text-gray-300 dark:text-gray-700"
          )}
          aria-hidden={index >= level ? "true" : "false"}
        />
      ))}
    </div>
  );
}

export function StarMessage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {message.map((message, index) => (
        <div key={index} className="flex flex-col items-center mb-8">
          <FadeIn className="flex flex-col items-center">
            <p
              className="text-xs md:text-sm text-muted-foreground mb-1"
              aria-label={`Skill description: ${message}`}
            >
              {message}
            </p>
            <Stars level={index} className="md:h-3.5 w-3.5" />
          </FadeIn>
        </div>
      ))}
    </div>
  );
}
