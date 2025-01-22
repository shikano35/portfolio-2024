"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { ClickMotion } from "@/components/ClickMotion";

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

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <ClickMotion smallAnimation={true}>
      <Link
        href={href}
        className={cn(
          "block py-2 px-4 transition",
          className,
          isActive ? activeClassName : `text-muted-foreground ${hoverClassName}`
        )}
        onClick={handleClick}
      >
        <span>{label}</span>
      </Link>
    </ClickMotion>
  );
}
