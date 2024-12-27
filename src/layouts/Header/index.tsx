import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Nav } from "@/layouts/Nav";
import { NavDrawer } from "@/layouts/Nav/NavDrawer";

export function Header() {
  return (
    <header>
      <nav>
        <div className="flex justify-between items-center mx-auto max-w-7xl py-16 px-16 md:px-32">
          <Link href="/" className="flex items-center gap-8" aria-label="Home">
            <Logo alt="My Logo" width={44} height={44} />
          </Link>
          <Nav />
          <div className="md:hidden">
            <NavDrawer />
          </div>
        </div>
      </nav>
    </header>
  );
}
