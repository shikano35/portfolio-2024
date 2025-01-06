import { Providers } from "@/layouts/Provider";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { Container } from "@/components/Container";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Container className="relative flex flex-col min-h-screen">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </Container>
    </Providers>
  );
}
