import React, { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

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
  const borderClasses = showBorder
    ? "transition-shadow shadow-sm border-2 border-muted hover:border-border hover:shadow-md bg-popover rounded-xl active:shadow-sm"
    : "dark:transition-shadow dark:shadow-sm dark:border-2 dark:border-muted dark:hover:border-border dark:hover:shadow-md dark:bg-popover dark:rounded-xl dark:active:shadow-sm dark:block";

  return (
    <Component className={cn("p-2 transition", borderClasses, className)}>
      {children}
    </Component>
  );
}
