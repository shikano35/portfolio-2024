import { Metadata } from "next";

export const baseMetadata: Metadata = {
  title: "Shin Takemura's Portfolio",
  description: "This is Shin Takemura's portfolio.",
  keywords: "Shin Takemura, Portfolio",
  authors: [{ name: "Shin Takemura", url: "https://example.com" }],
  generator: "Next.js",
  applicationName: "Shin Takemura's Portfolio",
  openGraph: {
    title: "Shin Takemura's Portfolio",
    description: "This is Shin Takemura's portfolio.",
    type: "website",
    url: "https://example.com",
    siteName: "Shin Takemura's Portfolio",
    locale: "ja_JP",
    images: [
      {
        url: "https://example.com",
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
