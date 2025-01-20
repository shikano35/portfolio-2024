import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

type StarsProps = {
  level: number;
};

export function Stars({ level }: StarsProps) {
  const totalStars = 5;
  const starColor =
    level <= 2
      ? "text-yellow-400 dark:text-yellow-500"
      : level <= 4
        ? "text-orange-400 dark:text-orange-500"
        : "text-red-400 dark:text-red-500";
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-3 w-3 mx-0.5 ${index < level ? starColor : "text-gray-300 dark:text-gray-700"}`}
        />
      ))}
    </div>
  );
}
