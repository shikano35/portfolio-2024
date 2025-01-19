import React, { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type HeadGroupProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
};

export function HeadGroup<T extends ElementType = "div">({
  as,
  children,
  className,
}: HeadGroupProps<T> & ComponentPropsWithoutRef<T>) {
  const Component = as || "div";

  return <Component className={cn("mt-40 ", className)}>{children}</Component>;
}
