"use client";

import React, { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type CardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  slow?: boolean;
  speed?: number;
};

const viewport = { once: true, margin: "0px 0px -100px" };

export function Card<T extends ElementType = "div">({
  as,
  children,
  className,
  slow = false,
  speed,
}: CardProps<T> & ComponentPropsWithoutRef<T>) {
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
        "p-4 border border-border bg-popover rounded-xl",
        className
      )}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={{
        duration: speed ?? (slow ? 2 : 1),
        ease: "easeInOut",
      }}
      viewport={viewport}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}
