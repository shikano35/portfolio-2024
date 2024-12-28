"use client";

import React, {
  ComponentPropsWithoutRef,
  createContext,
  ElementType,
  useContext,
} from "react";
import { motion, useReducedMotion, Variants, MotionProps } from "framer-motion";

const StaggerContext = createContext<boolean>(false);

interface FadeInProps extends MotionProps {
  as?: ElementType;
}

export function FadeIn({ as: Component = "div", ...props }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const isStagger = useContext(StaggerContext);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
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
            viewport: { once: true, amount: 0.2 },
          })}
      {...props}
    />
  );
}

export const StaggerProvider = StaggerContext.Provider;

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
        viewport={{ once: true, margin: "0px 0px -120px" }}
        transition={{
          staggerChildren: speed ?? (slow ? 0.2 : 0.1),
          ease: "easeInOut",
        }}
        {...props}
      />
    </StaggerContext.Provider>
  );
}
