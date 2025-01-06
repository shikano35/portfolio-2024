"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { navList } from "@/layouts/Nav";
import { NavItem } from "@/layouts/Nav/NavItem";
import { Logo } from "@/components/Logo";
import { Border } from "@/components/Border";
import { ThemeSwitcher } from "@/components/Theme";

export function NavDrawer({
  activeClassName = "font-semibold text-highlight",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative z-50 md:hidden flex justify-center">
      {/* トグルボタン */}
      <button
        className="relative z-50 -m-2 inline-flex items-center rounded-lg p-2 hover:bg-gray-200/50"
        aria-label="Toggle site navigation"
        type="button"
        aria-expanded={isOpen}
        onClick={toggleDrawer}
      >
        {isOpen ? (
          <ChevronUpIcon
            className="h-6 w-6 text-muted-foreground"
            aria-hidden="true"
          />
        ) : (
          <Bars3Icon
            className="h-6 w-6 text-muted-foreground"
            aria-hidden="true"
          />
        )}
      </button>

      {/* NavDrawer本体 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              backdropFilter: "blur(0px)",
            }}
            animate={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(4px)",
            }}
            exit={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              backdropFilter: "blur(0px)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="absolute top-0 pt-24 px-6 w-full bg-background shadow-md rounded-b-lg"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href="/"
                className="flex items-center rounded-full"
                aria-label="Home"
                onClick={() => setIsOpen(false)}
                style={{ maxWidth: "44px" }}
              >
                <Logo
                  alt="My Logo"
                  width={44}
                  height={44}
                  className="dark:hidden"
                />
                <Logo
                  alt="My Logo"
                  width={44}
                  height={44}
                  src="/my-icon-dark.webp"
                  className="hidden dark:block"
                />
              </Link>

              {/* ナビゲーションリンク */}
              <motion.nav
                className="flex flex-col gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {navList.map((item) => (
                  <NavItem
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    className="text-base"
                    activeClassName={activeClassName}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
                <Border />

                {/* テーマスイッチャー */}
                <div className="flex items-center space-x-8">
                  <p className="my-4 text-muted-foreground">Theme</p>
                  <ThemeSwitcher />
                </div>
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
