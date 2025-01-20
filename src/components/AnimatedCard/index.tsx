"use client";

import { ComponentPropsWithoutRef } from "react";
import { motion } from "motion/react";
import React from "react";

export function AnimatedCard(
  props: ComponentPropsWithoutRef<typeof motion.div> & {
    smallAnimation?: boolean;
  }
) {
  return (
    <motion.div
      whileHover={{
        scale: props.smallAnimation ? 1 : 1.01,
        y: props.smallAnimation ? -0.5 : -1.5,
      }}
      whileTap={{ scale: 0.99, y: props.smallAnimation ? 0.5 : 1 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      {...props}
    />
  );
}
