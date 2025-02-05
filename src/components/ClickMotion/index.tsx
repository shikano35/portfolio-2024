"use client";

import { motion } from "motion/react";
import React, { ComponentPropsWithoutRef } from "react";

type ClickMotionProps = ComponentPropsWithoutRef<typeof motion.div> & {
  smallAnimation?: boolean;
};

export function ClickMotion({
  smallAnimation = false,
  ...rest
}: ClickMotionProps) {
  return (
    <motion.div
      transition={{
        duration: smallAnimation ? 0.15 : 0.225,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: smallAnimation ? 1 : 1.01,
        y: smallAnimation ? -0.5 : -1.5,
      }}
      whileTap={{ scale: 0.99, y: smallAnimation ? 0.5 : 1 }}
      {...rest}
    />
  );
}
