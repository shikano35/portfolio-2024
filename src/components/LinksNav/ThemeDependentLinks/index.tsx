"use client";

import React from "react";
import { SkillCard } from "@/components/CardContainer";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { useTheme } from "next-themes";

type ThemeDependentLinksProps = {
  linksList: {
    label: string;
    href: string;
    icon: React.FC<{ width: number; height: number; className?: string }>;
  }[];
};

export function ThemeDependentLinks({ linksList }: ThemeDependentLinksProps) {
  const { theme } = useTheme();

  return (
    <div className="flex mt-6 md:mt-0 justify-center md:justify-start">
      {linksList.map((item) => (
        <Link key={item.label} href={item.href} className="px-2 py-2 mx-3">
          <FadeIn>
            {theme === "dark" ? (
              <SkillCard>
                <item.icon
                  width={32}
                  height={32}
                  className="md:w-8 md:h-8 w-6 h-6"
                />
              </SkillCard>
            ) : (
              <item.icon
                width={32}
                height={32}
                className="md:w-8 md:h-8 w-6 h-6"
              />
            )}
          </FadeIn>
        </Link>
      ))}
    </div>
  );
}
