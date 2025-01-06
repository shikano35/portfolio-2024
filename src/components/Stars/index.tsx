import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

type StarsProps = {
  level: number;
};

export function Stars({ level }: StarsProps) {
  const totalStars = 5;
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-4 w-4 mx-0.5 ${index < level ? "text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}
