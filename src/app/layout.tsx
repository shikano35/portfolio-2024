import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/cn";
import { baseMetadata } from "@/lib/metadata";
import { Layout } from "@/layouts";
import "@/style/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased")}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
