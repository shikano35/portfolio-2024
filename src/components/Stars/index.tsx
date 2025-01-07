import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

type StarsProps = {
  level: number;
};

export function Stars({ level }: StarsProps) {
  const totalStars = 5;
  const starColor =
    level <= 2
      ? "text-yellow-400"
      : level <= 4
        ? "text-orange-400"
        : "text-red-400";
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-3 w-3 mx-0.5 ${index < level ? starColor : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}
