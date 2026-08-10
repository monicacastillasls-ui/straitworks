import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/content/site";

const display = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Strait Works | Web Design, Shopify & Brand Identity",
    template: "%s | Strait Works",
  },
  description:
    "Strait Works creates professional websites, Shopify stores and visual identities for businesses and entrepreneurs.",
  keywords: [
    "web design studio",
    "Shopify development",
    "brand identity design",
    "website design agency",
    "logo design",
  ],
  authors: [{ name: "Strait Works" }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Strait Works | Web Design, Shopify & Brand Identity",
    description:
      "Strait Works creates professional websites, Shopify stores and visual identities for businesses and entrepreneurs.",
    siteName: "Strait Works",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strait Works | Web Design, Shopify & Brand Identity",
    description:
      "Strait Works creates professional websites, Shopify stores and visual identities for businesses and entrepreneurs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#04060B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-electric focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
