import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://tally.so" />
      </head>
      <body>
        {children}
        <Analytics />
        {process.env.VERCEL_ENV === "production" ? (
          <GoogleTagManager gtmId="GTM-PZN7WMHL" />
        ) : null}
      </body>
    </html>
  );
}
