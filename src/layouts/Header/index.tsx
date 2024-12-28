import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Nav } from "@/layouts/Nav";
import { NavDrawer } from "@/layouts/Nav/NavDrawer";
import { FadeInWithStagger } from "@/components/FadeIn";

export function Header() {
  return (
    <header>
      <nav>
        <FadeInWithStagger>
          <div className="flex justify-between items-center mx-auto max-w-7xl py-16 px-16 md:px-32">
            <div className="flex items-center w-full justify-between">
              <Link
                href="/"
                className="flex items-center gap-8"
                aria-label="Home"
              >
                <Logo alt="My Logo" width={44} height={44} />
              </Link>
              <Nav />
              <NavDrawer />
            </div>
          </div>
        </FadeInWithStagger>
      </nav>
    </header>
  );
}
