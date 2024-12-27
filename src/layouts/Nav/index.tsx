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

export function Nav({
  activeClassName = "font-semibold text-highlight",
  hoverClassName = "hover:text-highlight",
}) {
  return (
    <div className="hidden md:block">
      <div className="flex">
        {navList.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            href={item.href}
            className="text-lg"
            activeClassName={activeClassName}
            hoverClassName={hoverClassName}
          />
        ))}
      </div>
    </div>
  );
}
