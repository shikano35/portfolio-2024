import React, { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  showBorder?: boolean;
};

export function SkillCard<T extends ElementType = "div">({
  as,
  children,
  className,
  showBorder = true,
}: CardProps<T> & ComponentPropsWithoutRef<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        "p-2 transition",
        showBorder
          ? "shadow-sm border-2 border-muted hover:border-border hover:shadow-md bg-popover rounded-xl active:shadow-sm"
          : "",
        className
      )}
    >
      {children}
    </Component>
  );
}
