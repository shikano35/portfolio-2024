import { NavItem } from "@/layouts/Nav/NavItem";
import { CosenseIcon } from "@/components/Icons/social/CosenseIcon";
import { ZennIcon } from "@/components/Icons/social/ZennIcon";
import { GithubIcon } from "@/components/Icons/social/GithubIcon";
import { navList } from "@/layouts/Nav";
import { FadeIn } from "@/components/FadeIn";
import { ThemeDependentLinks } from "./ThemeDependentLinks";

type LinksNavProps = {
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
              className="text-sm lg:text-base px-2 mx-3"
              activeClassName={activeClassName}
              hoverClassName="hover:text-primary"
            />
          </FadeIn>
        ))}
      </div>
      <ThemeDependentLinks linksList={linksList} />
    </div>
  );
}
