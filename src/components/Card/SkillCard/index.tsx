import React, { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
};

export function SkillCard<T extends ElementType = "div">({
  as,
  children,
  className,
}: CardProps<T> & ComponentPropsWithoutRef<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        "p-2 border-2 border-muted hover:border-border bg-popover hover:bg-input rounded-xl transition",
        className
      )}
    >
      {children}
    </Component>
  );
}
