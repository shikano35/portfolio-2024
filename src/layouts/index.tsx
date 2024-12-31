import { Providers } from "@/layouts/Provider";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </Providers>
  );
}
