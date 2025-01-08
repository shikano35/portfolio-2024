"use client";

import { ComponentPropsWithoutRef } from "react";
import { motion } from "motion/react";
import React from "react";

export function AnimatedCard(
  props: ComponentPropsWithoutRef<typeof motion.div>
) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      {...props}
    />
  );
}
