import React from "react";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "motion/react";
import { navList } from "@/layouts/Nav";
import { NavItem } from "@/layouts/Nav/NavItem";
import { Border } from "@/components/Border";
import { ThemeSwitcher } from "@/components/Theme";
import { MyIcon } from "@/components/Icons/MyIcon";

type NavDrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

export function NavDrawer({ isOpen, toggleDrawer }: NavDrawerProps) {
  return (
    <div className="fixed z-50 md:hidden flex justify-center">
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
            onClick={toggleDrawer}
          >
            <motion.div
              className="absolute top-0 pt-24 px-6 w-full bg-background shadow-md rounded-b-lg"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center sm:px-6">
                <Link
                  href="/"
                  className="flex items-center rounded-full"
                  aria-label="Home"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MyIcon className="size-12" />
                </Link>
                <button
                  className="z-50 rounded-lg -mr-2 sm:mr-0 p-2 hover:bg-input "
                  aria-label="Close site navigation"
                  type="button"
                  onClick={toggleDrawer}
                >
                  <ChevronUpIcon
                    className="size-6 text-muted-foreground"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <motion.nav
                className="flex flex-col gap-3 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {navList.map((item) => (
                  <NavItem
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    className="text-base sm:mx-4"
                    activeClassName="font-semibold text-highlight"
                    onClick={toggleDrawer}
                  />
                ))}
                <Border />

                <div className="flex items-center space-x-8 mb-2">
                  <p className="my-4 sm:ml-4 px-4 text-muted-foreground">
                    Theme
                  </p>
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
