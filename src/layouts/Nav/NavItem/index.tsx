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
};

export function NavItem({
  label = "",
  href,
  className,
  activeClassName = "font-semibold text-highlight",
  hoverClassName = "hover:text-highlight",
}: NavItemProps) {
  const segment = useSelectedLayoutSegment();
  const isActive =
    (segment === null && href === "/") ||
    segment === href.replace(/^\//, "").toLowerCase();

  return (
    <Link
      href={href}
      className={cn(
        "relative block px-2 py-2 mx-3 transition-colors delay-50",
        className,
        isActive ? activeClassName : `text-muted-foreground ${hoverClassName}`
      )}
    >
      <span>{label}</span>
    </Link>
  );
}
