"use client";

import React, { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type GithubCardProps<T extends ElementType = "div"> = {
  children: ReactNode;
  as?: T;
  className?: string;
};

const viewport = { once: true, margin: "0px 0px -100px" };

export function GithubCard<T extends ElementType = "div">({
  as,
  children,
  className,
}: GithubCardProps<T> & ComponentPropsWithoutRef<T>) {
  const Component = as || "div";
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      clipPath: shouldReduceMotion
        ? "inset(0% 0% 0% 0%)"
        : "inset(0% 100% 100% 0%)",
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
    },
  };

  return (
    <motion.div
      className={cn(
        "p-4 border border-border bg-background rounded-xl md:mx-0 h-[278px]",
        className
      )}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={viewport}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}
