import React, { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
};

export function Card<T extends ElementType = "div">({
  as,
  children,
  className,
}: CardProps<T> & ComponentPropsWithoutRef<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        "p-4 border border-border bg-popover rounded-xl",
        className
      )}
    >
      {children}
    </Component>
  );
}
