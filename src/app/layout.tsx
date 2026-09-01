import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";

import "./globals.css";

const SITE_URL = "https://room-homepage.abdelrhman-ahmed8881.workers.dev";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: "swap",
});

const name = "room";
const title = `${name} | Modern furniture for every space`;
const description =
  "Furniture that brings quality, comfort and style to any property. Browse the collection, work with our specialists, and create a space that reflects you.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "A bright dining room furnished in white and pale wood, beside the line “Modern furniture for every space”.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} antialiased`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:px-6 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
