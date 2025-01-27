"use client";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import React, { useState } from "react";

export const AnimatedTooltip = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-50, 50], [-45, 45]), springConfig);

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  return (
    <AnimatePresence mode="wait">
      <div
        className="relative flex flex-col items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <motion.div
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 240,
                damping: 16,
              },
            }}
            className="absolute -top-8 rounded-md bg-highlight px-3 py-1 text-sm font-semibold text-background"
            exit={{ opacity: 0, y: 20, scale: 0.2 }}
            initial={{ opacity: 0, y: 20, scale: 0.2 }}
            style={{
              translateX,
              rotate,
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </motion.div>
        )}
        {children}
      </div>
    </AnimatePresence>
  );
};
