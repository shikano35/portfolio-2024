import React, { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps<T extends ElementType = "div"> {
  as?: T;
  children: ReactNode;
  className?: string;
}

export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  ...rest
}: ContainerProps<T> & ComponentPropsWithoutRef<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cn("mx-auto max-w-5xl px-6 lg:px-12", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
