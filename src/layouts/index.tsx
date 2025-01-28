import React from "react";
import { Providers } from "@/layouts/Provider";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
// import { Pattern } from "@/components/Pattern";
import { Background } from "@/components/Background";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      {/* <Pattern /> */}
      <Background />
      <main className="flex-auto overflow-hidden">{children}</main>
      <Footer />
    </Providers>
  );
}
