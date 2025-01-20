"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "@/components/AnimatedCard";

export type NavItemProps = {
  label: string;
  href: string;
  className?: string;
  activeClassName?: string;
  hoverClassName?: string;
  onClick?: () => void;
};

export function NavItem({
  label = "",
  href,
  className,
  activeClassName = "font-semibold text-highlight",
  hoverClassName = "hover:text-highlight",
  onClick,
}: NavItemProps) {
  const segment = useSelectedLayoutSegment();
  const isActive =
    (segment === null && href === "/") ||
    segment === href.replace(/^\//, "").toLowerCase();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <AnimatedCard smallAnimation={true}>
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative inline-block"
      >
        <Link
          href={href}
          className={cn(
            "block py-2 px-4 transition",
            className,
            isActive
              ? activeClassName
              : `text-muted-foreground ${hoverClassName}`
          )}
          onClick={handleClick}
        >
          <span>{label}</span>
        </Link>
        {isHovered && (
          <motion.div
            layoutId="hoverBorder"
            className="-z-10 absolute inset-x-3 inset-y-0 bg-input rounded-lg pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </AnimatedCard>
  );
}
