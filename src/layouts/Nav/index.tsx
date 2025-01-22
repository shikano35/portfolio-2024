import { FadeIn } from "@/components/FadeIn";
import { NavItem, NavItemProps } from "./NavItem";
import { ThemeButton } from "@/components/Theme";

export const navList: NavItemProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Log",
    href: "/log",
  },
];

export function Nav({ activeClassName = "font-semibold text-highlight" }) {
  return (
    <div className="hidden md:block">
      <div className="flex items-center">
        {navList.map((item) => (
          <FadeIn key={item.label}>
            <NavItem
              label={item.label}
              href={item.href}
              className="text-base px-3 mx-3"
              activeClassName={activeClassName}
            />
          </FadeIn>
        ))}
        <div className="border-l border-border ml-2 pl-6">
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
