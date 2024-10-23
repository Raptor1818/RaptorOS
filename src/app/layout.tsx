import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Viewport, type Metadata } from "next";

export const metadata: Metadata = {
  title: "RaptorOS",
  description: "My personal website as a desktop enviroment.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} overflow-hidden`}>
      <body>{children}</body>
    </html>
  );
}
