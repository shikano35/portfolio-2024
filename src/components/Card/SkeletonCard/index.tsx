import React from "react";

export function SkeletonCard() {
  return (
    <div className=" w-96 p-4 bg-primary-foreground rounded-lg animate-pulse">
      <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
      <div className="h-40 bg-muted rounded mb-2"></div>
    </div>
  );
}
