"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Nav } from "@/layouts/Nav";
import { NavDrawer } from "@/layouts/Nav/NavDrawer";
import { FadeInWithStagger } from "@/components/FadeIn";
import { Container } from "@/components/Container";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { MyIcon } from "@/components/Icons/MyIcon";

export function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <Container as="header" className="mt-24">
      <nav>
        <FadeInWithStagger>
          <div className="flex items-center w-full justify-between">
            <Link
              href="/"
              className="flex items-center gap-8"
              aria-label="Home"
            >
              <MyIcon className="size-12" />
            </Link>
            <Nav />
            <NavDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
            <button
              className="md:hidden z-0 inline-flex items-center rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
              type="button"
              onClick={toggleDrawer}
              aria-label="Open navigation"
            >
              <Bars3Icon
                className="size-6 text-muted-foreground"
                aria-hidden="true"
              />
            </button>
          </div>
        </FadeInWithStagger>
      </nav>
    </Container>
  );
}
