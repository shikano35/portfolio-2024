"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";

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
    <Link
      href={href}
      className={cn(
        "relative block py-2 transition-colors delay-50",
        className,
        isActive ? activeClassName : `text-muted-foreground ${hoverClassName}`
      )}
      onClick={handleClick}
    >
      <span>{label}</span>
    </Link>
  );
}
