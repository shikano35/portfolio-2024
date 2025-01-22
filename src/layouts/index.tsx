import { Providers } from "@/layouts/Provider";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      <main className="flex-auto overflow-hidden">{children}</main>
      <Footer />
    </Providers>
  );
}
