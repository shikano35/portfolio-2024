import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Nav } from "@/layouts/Nav";
import { NavDrawer } from "@/layouts/Nav/NavDrawer";
import { FadeInWithStagger } from "@/components/FadeIn";
import { Container } from "@/components/Container";

export function Header() {
  return (
    <Container>
      <header className="mt-24">
        <nav>
          <FadeInWithStagger>
            <div className="flex items-center w-full justify-between">
              <Link
                href="/"
                className="flex items-center gap-8"
                aria-label="Home"
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
              <Nav />
              <NavDrawer />
            </div>
          </FadeInWithStagger>
        </nav>
      </header>
    </Container>
  );
}
