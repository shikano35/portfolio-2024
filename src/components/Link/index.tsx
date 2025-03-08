import Link from "next/link";
import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

export type InternalLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export type ExternalLinkProps = {
  href: string;
  label: string;
  className?: string;
  ariaLabel?: string;
  target?: boolean;
};

export function InternalLink({ href, label, className }: InternalLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center text-sm font-normal text-muted-foreground hover:text-highlight transform",
        className
      )}
    >
      <span>{label}</span>
      <ChevronRightIcon className="size-4 ml-1" aria-hidden="true" />
    </Link>
  );
}

export function ExternalLink({
  href,
  label,
  className,
  ariaLabel,
  target,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target={target ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={clsx(
        "flex items-center text-xs md:text-sm font-normal text-muted-foreground hover:text-highlight transform hover:underline underline-offset-2",
        className
      )}
      aria-label={ariaLabel || label}
    >
      <span>{label}</span>
      <ChevronRightIcon className="size-4 ml-1" aria-hidden="true" />
    </a>
  );
}
