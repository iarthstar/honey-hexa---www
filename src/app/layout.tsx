import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ORIGIN } from "@/constants";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


// TODO: Add metadata
export const metadata: Metadata = {
  title: "Honey Hexa - Your Partner in Digital Universe",
  description: "We leverage AI-First strategies and cutting edge tech-stack to craft purpose-built solutions that scale your business from zero to hero.",
  metadataBase: new URL(ORIGIN),
  openGraph: {
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? <GoogleTagManager gtmId="GTM-PZN7WMHL" /> : null}
      </body>
    </html>
  );
}
