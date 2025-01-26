import { Metadata } from "next";

const url = "https://example.com";

export const baseMetadata: Metadata = {
  title: "Shin Takemura's Portfolio",
  description: "This is Shin Takemura's portfolio.",
  keywords: "Shin Takemura, Portfolio",
  authors: [{ name: "Shin Takemura", url: url }],
  generator: "Next.js, TypeScript, Tailwind CSS",
  applicationName: "Shin Takemura's Portfolio",
  openGraph: {
    title: "Shin Takemura's Portfolio",
    description: "This is Shin Takemura's portfolio.",
    type: "website",
    url: url,
    siteName: "Shin Takemura's Portfolio",
    locale: "ja_JP",
    images: [
      {
        url: url,
        width: 1200,
        height: 630,
        alt: "Shin Takemura's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Shin Takemura's Portfolio",
    description: "This is Shin Takemura's portfolio.",
  },
};
