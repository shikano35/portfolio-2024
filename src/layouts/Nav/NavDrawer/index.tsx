"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { navList } from "@/layouts/Nav";
import { NavItem } from "@/layouts/Nav/NavItem";
import { Logo } from "@/components/Logo";

export function NavDrawer({
  activeClassName = "font-semibold text-highlight",
  hoverClassName = "hover:text-highlight",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative z-50 md:hidden flex justify-center">
      <button
        className="relative z-50 -m-2 inline-flex items-center rounded-lg p-2 hover:bg-gray-200/50"
        aria-label="Toggle site navigation"
        type="button"
        aria-expanded={isOpen}
        onClick={toggleDrawer}
      >
        {isOpen ? (
          <ChevronUpIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-gray-900" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute top-0 pt-16 px-16 w-full bg-white shadow-md rounded-b-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/"
              className="flex items-center"
              aria-label="Home"
              onClick={() => setIsOpen(false)}
              style={{ maxWidth: "44px" }}
            >
              <Logo alt="My Logo" width={44} height={44} />
            </Link>
            <nav className="flex flex-col gap-4 mt-8 py-4">
              {navList.map((item) => (
                <NavItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  className="text-lg"
                  activeClassName={activeClassName}
                  hoverClassName={hoverClassName}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
