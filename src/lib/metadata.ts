import { Metadata } from "next";

export const baseMetadata: Metadata = {
  title: "Shikano's Portfolio",
  description: "This is Shikano's portfolio.",
  authors: [{ name: "Shikano", url: "https://shikano35.me" }],
  applicationName: "Shikano's Portfolio",
  openGraph: {
    title: "Shikano's Portfolio",
    description: "This is Shikano's portfolio.",
    type: "website",
    url: "https://shikano35.me",
    siteName: "Shikano's Portfolio",
    locale: "ja_JP",
    images: [
      {
        url: "https://shikano35.me",
        width: 1200,
        height: 630,
        alt: "Shikano's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Shikano's Portfolio",
    description: "This is Shikano's portfolio.",
  },
};
