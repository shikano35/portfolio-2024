import { NavItem } from "@/layouts/Nav/NavItem";
import { CosenseIcon } from "@/components/Icons/social/CosenseIcon";
import { ZennIcon } from "@/components/Icons/social/ZennIcon";
import { GithubIcon } from "@/components/Icons/social/GithubIcon";
import { navList } from "@/layouts/Nav";
import Link from "next/link";
import { FadeIn } from "../FadeIn";

export type LinksNavProps = {
  label: string;
  href: string;
  icon: React.FC<{ width: number; height: number; className?: string }>;
};

const linksList: LinksNavProps[] = [
  {
    label: "Cosense",
    href: "https://scrapbox.io/5hintakemura/",
    icon: CosenseIcon,
  },
  {
    label: "Zenn",
    href: "https://zenn.dev/shiitake05",
    icon: ZennIcon,
  },
  {
    label: "Github",
    href: "https://github.com/shiitake05",
    icon: GithubIcon,
  },
];

export function LinksNav({ activeClassName = "font-medium text-primary" }) {
  return (
    <div className="flex justify-between w-full flex-col md:flex-row">
      <div className="flex items-center justify-center md:justify-start">
        {navList.map((item) => (
          <FadeIn key={item.label}>
            <NavItem
              label={item.label}
              href={item.href}
              className="text-base  px-2 mx-3"
              activeClassName={activeClassName}
              hoverClassName="hover:text-primary"
            />
          </FadeIn>
        ))}
      </div>

      <div className="flex mt-6 md:mt-0 justify-center md:justify-start">
        {linksList.map((item) => (
          <Link key={item.label} href={item.href} className="px-2 py-2 mx-3">
            <FadeIn>
              <item.icon
                width={32}
                height={32}
                className="md:w-8 md:h-8 w-6 h-6"
              />
            </FadeIn>
          </Link>
        ))}
      </div>
    </div>
  );
}
