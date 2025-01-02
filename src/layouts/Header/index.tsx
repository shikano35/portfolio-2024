import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Nav } from "@/layouts/Nav";
import { NavDrawer } from "@/layouts/Nav/NavDrawer";
import { FadeInWithStagger } from "@/components/FadeIn";
import { Container } from "@/components/Container";

export function Header() {
  return (
    <header>
      <nav>
        <FadeInWithStagger>
          <Container className="py-16">
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
          </Container>
        </FadeInWithStagger>
      </nav>
    </header>
  );
}
