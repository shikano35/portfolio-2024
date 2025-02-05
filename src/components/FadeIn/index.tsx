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
          staggerChildren: 0.1,
          ease: "easeInOut",
        }}
        {...props}
      />
    </StaggerContext.Provider>
  );
}

export function FadeTransition({
  children,
  className,
  slow = false,
}: {
  children: React.ReactNode;
  className?: string;
  slow?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const duration = slow ? 2.0 : 0.6;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      viewport={{ once: true, margin: "0px 0px -100px" }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, ease: "easeInOut" }}
      variants={variants}
      aria-live="polite"
      className={className}
    >
      {children}
    </motion.div>
  );
}
