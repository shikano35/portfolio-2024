import React, { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { ClickMotion } from "@/components/ClickMotion";

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
    <ClickMotion>
      <Component
        className={cn(
          "p-2 border-2 shadow-sm hover:shadow-md border-muted hover:border-border bg-popover rounded-xl transition active:shadow-sm",
          className
        )}
      >
        {children}
      </Component>
    </ClickMotion>
  );
}
