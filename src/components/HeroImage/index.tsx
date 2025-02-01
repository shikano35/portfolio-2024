import React from "react";
import { cn } from "@/lib/cn";
import { FadeTransition } from "@/components/FadeIn";

type HeroImageProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeroImage({ children, className }: HeroImageProps) {
  return (
    <div className="relative -z-30 md:col-span-5 md:flex md:items-center">
      <div className={cn("absolute transform -translate-y-1/2", className)}>
        <FadeTransition slow={true}>{children}</FadeTransition>
      </div>
    </div>
  );
}
