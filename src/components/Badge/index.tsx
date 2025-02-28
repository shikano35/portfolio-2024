import { cn } from "@/lib/cn";
import React from "react";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-xs font-medium text-muted-foreground border border-muted-foreground rounded-full px-2 tracking-tighter",
        className
      )}
    >
      {children}
    </div>
  );
}
