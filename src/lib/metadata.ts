import { Metadata } from "next";

const url = "https://example.com";

export const baseMetadata: Metadata = {
  title: "Shikano's Portfolio",
  description: "This is Shikano's portfolio.",
  authors: [{ name: "Shikano", url: url }],
  applicationName: "Shikano's Portfolio",
  openGraph: {
    title: "Shikano's Portfolio",
    description: "This is Shikano's portfolio.",
    type: "website",
    url: url,
    siteName: "Shikano's Portfolio",
    locale: "ja_JP",
    images: [
      {
        url: url,
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
