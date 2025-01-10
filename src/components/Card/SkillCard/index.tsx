import React, { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "@/components/AnimatedCard";

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
    <AnimatedCard>
      <Component
        className={cn(
          "p-2 border-2 shadow-sm hover:shadow-md border-muted hover:border-border bg-background rounded-xl transition",
          className
        )}
      >
        {children}
      </Component>
    </AnimatedCard>
  );
}
