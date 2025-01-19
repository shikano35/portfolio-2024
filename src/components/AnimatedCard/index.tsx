"use client";

import { ComponentPropsWithoutRef } from "react";
import { motion } from "motion/react";
import React from "react";

export function AnimatedCard(
  props: ComponentPropsWithoutRef<typeof motion.div>
) {
  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -1.5 }}
      whileTap={{ scale: 0.99, y: 1.5 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      {...props}
    />
  );
}
