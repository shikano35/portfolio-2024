"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FadeIn } from "@/components/FadeIn";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="float-end md:block"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      whileTap={{ scale: 0.9 }}
    >
      <SunIcon
        className="fill-muted-foreground hover:fill-highlight h-6 w-6 dark:hidden"
        aria-hidden={theme === "dark" ? "true" : "false"}
      />
      <MoonIcon
        className="fill-muted-foreground hover:fill-highlight h-6 w-6 hidden dark:block"
        aria-hidden={theme === "light" ? "true" : "false"}
      />
    </motion.button>
  );
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleClasses = "flex items-center justify-center w-9 h-9 rounded-full";

  return (
    <FadeIn
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "0px 0px -100px" }}
    >
      <div
        role="group"
        aria-label="Theme switcher"
        className="flex items-center space-x-1 p-1 border-border border rounded-full"
      >
        <motion.button
          aria-label="Switch to light mode"
          className={`${toggleClasses} ${
            theme === "light"
              ? "bg-border text-muted-foreground"
              : "text-muted-foreground"
          }`}
          onClick={() => setTheme("light")}
          whileTap={{ scale: 0.9 }}
        >
          <SunIcon className="h-5 w-5" />
        </motion.button>

        <motion.button
          aria-label="Switch to dark mode"
          className={`${toggleClasses} ${
            theme === "dark" ? "bg-muted-foreground text-background" : ""
          }`}
          onClick={() => setTheme("dark")}
          whileTap={{ scale: 0.9 }}
        >
          <MoonIcon className="h-5 w-5" />
        </motion.button>
      </div>
    </FadeIn>
  );
}
