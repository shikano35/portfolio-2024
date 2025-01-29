import React from "react";

export function SkeletonCard() {
  return (
    <div className=" w-96 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse">
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
      <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
    </div>
  );
}
