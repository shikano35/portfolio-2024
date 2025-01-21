"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import React from "react";

const viewport = { once: true, margin: "0px 0px -100px" };

type BorderProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof motion.div>;

export function Border({ className }: BorderProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      width: shouldReduceMotion ? "100%" : 0,
    },
    visible: {
      width: "100%",
    },
  };

  return (
    <motion.div
      className={cn("h-px bg-border", className)}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={viewport}
    />
  );
}
