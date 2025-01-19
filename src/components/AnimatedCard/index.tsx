"use client";

import { ComponentPropsWithoutRef } from "react";
import { motion } from "motion/react";
import React from "react";

export function AnimatedCard(
  props: ComponentPropsWithoutRef<typeof motion.div>
) {
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      {...props}
    />
  );
}
