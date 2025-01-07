"use client";

import React, {
  createContext,
  useContext,
  ComponentPropsWithoutRef,
} from "react";
import { motion, useReducedMotion } from "motion/react";

const StaggerContext = createContext<boolean>(false);

const viewportSettings = { once: true, margin: "0px 0px -100px" };

export function FadeIn(props: ComponentPropsWithoutRef<typeof motion.div>) {
  const shouldReduceMotion = useReducedMotion();
  const isStagger = useContext(StaggerContext);

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      {...(isStagger
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport: viewportSettings,
          })}
      {...props}
    />
  );
}

export function FadeInWithStagger({
  slow = false,
  speed,
  ...props
}: ComponentPropsWithoutRef<typeof motion.div> & {
  slow?: boolean;
  speed?: number;
}) {
  return (
    <StaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        transition={{
          staggerChildren: speed ?? (slow ? 0.2 : 0.1),
          ease: "easeInOut",
        }}
        {...props}
      />
    </StaggerContext.Provider>
  );
}
