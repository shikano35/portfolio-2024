"use client";

import { NavItem } from "@/layouts/Nav/NavItem";
import { CosenseIcon } from "@/components/Icons/social/CosenseIcon";
import { ZennIcon } from "@/components/Icons/social/ZennIcon";
import { GithubIcon } from "@/components/Icons/social/GithubIcon";
import { navList } from "@/layouts/Nav";
import { FadeIn } from "@/components/FadeIn";
import { useTheme } from "next-themes";
import Link from "next/link";
import { SkillCard } from "@/components/Card/SkillCard";
import { ClickMotion } from "../ClickMotion";

type LinksNavProps = {
  label: string;
  href: string;
  icon: React.FC<{ width: number; height: number; className?: string }>;
};

const linksList: LinksNavProps[] = [
  {
    label: "Cosense",
    href: "https://scrapbox.io/shikano35/",
    icon: CosenseIcon,
  },
  {
    label: "Zenn",
    href: "https://zenn.dev/shikano35",
    icon: ZennIcon,
  },
  {
    label: "Github",
    href: "https://github.com/shikano35",
    icon: GithubIcon,
  },
];

export function LinksNav({ activeClassName = "font-medium text-primary" }) {
  const { theme } = useTheme();

  return (
    <nav
      className="flex flex-col justify-between w-full  md:flex-row"
      aria-label="Main navigation"
    >
      <ul className="flex items-center justify-center md:justify-start">
        {navList.map((item) => (
          <li key={item.label}>
            <FadeIn>
              <NavItem
                label={item.label}
                href={item.href}
                className="text-sm lg:text-base px-2 mx-3"
                activeClassName={activeClassName}
                hoverClassName="hover:text-primary"
              />
            </FadeIn>
          </li>
        ))}
      </ul>
      <ul className="flex mt-6 md:mt-0 items-center justify-center">
        {linksList.map((item) => (
          <li key={item.label} className="px-2 py-2 mx-3 dark:mx-1">
            <Link href={item.href}>
              <FadeIn>
                {theme === "dark" ? (
                  <ClickMotion>
                    <SkillCard className="bg-background">
                      <item.icon
                        width={32}
                        height={32}
                        className="md:w-7 md:h-7 w-6 h-6"
                      />
                    </SkillCard>
                  </ClickMotion>
                ) : (
                  <item.icon
                    width={32}
                    height={32}
                    className="md:w-8 md:h-8 w-6 h-6"
                  />
                )}
              </FadeIn>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
