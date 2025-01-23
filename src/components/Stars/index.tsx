import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { FadeIn } from "../FadeIn";

type StarsProps = {
  level: number;
  className?: string;
};

const message = [
  "触れたことあり",
  "興味あり",
  "ちょっとわかる",
  "それなりにわかる",
  "結構わかってきた",
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
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon
          key={index}
          className={cn(
            "h-3 w-3 mx-0.5",
            className,
            index < level ? starColor : "text-gray-300 dark:text-gray-700"
          )}
        />
      ))}
    </div>
  );
}

export function StarMessage() {
  return (
    <div className="grid grid-cols-3">
      {message.map((msg, index) => (
        <div key={index} className="flex flex-col items-center mb-8">
          <FadeIn className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-1">{msg}</p>
            <Stars level={index} />
          </FadeIn>
        </div>
      ))}
    </div>
  );
}
