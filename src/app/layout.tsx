import WindowLayer from "@/components/raptor-os/system/WindowLayer";
import WindowProvider from "@/context/WindowProvider/window-provider";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Viewport, type Metadata } from "next";

export const metadata: Metadata = {
  title: "RaptorOS",
  description: "My personal website as a desktop enviroment.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// Prevents the (mobile) browser to expand if a window overflows the <html> tag
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
      <body>
        <WindowProvider>
          <WindowLayer></WindowLayer>
          {children}
        </WindowProvider>
      </body>
    </html>
  );
}
