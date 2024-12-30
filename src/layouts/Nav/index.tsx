import { FadeIn } from "@/components/FadeIn";
import { NavItem, NavItemProps } from "./NavItem";

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
    label: "Works",
    href: "/works",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
];

export function Nav({ activeClassName = "font-semibold text-highlight" }) {
  return (
    <div className="hidden md:block">
      <div className="flex">
        {navList.map((item) => (
          <FadeIn key={item.label}>
            <NavItem
              label={item.label}
              href={item.href}
              className="text-lg px-2 mx-3"
              activeClassName={activeClassName}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
