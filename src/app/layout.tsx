import WindowLayer from "@/components/raptor-os/system/WindowLayer";
import DeviceProvider from "@/context/DeviceProvider/device-provider";
import SettingsProvider from "@/context/SettingsProvider/settings-provider";
import WallpaperProvider from "@/context/WallpaperProvider/wallpaper-provider";
import WindowProvider from "@/context/WindowProvider/window-provider";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Viewport, type Metadata } from "next";
import { headers } from "next/headers";
import UAParser from "ua-parser-js";

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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Get user agent and determine device type using UAParser
  const headersList = await headers()
  const userAgent = headersList.get('user-agent')
  const device = new UAParser(userAgent ?? '').getDevice();
  const isMobile: boolean = device.type == 'mobile';

  return (
    <html lang="en" className={`${GeistSans.variable} overflow-hidden`}>
      <body>
        <DeviceProvider isMobile={isMobile}>
          <SettingsProvider>
            <WallpaperProvider>
              <WindowProvider>
                <WindowLayer></WindowLayer>
                {children}
              </WindowProvider>
            </WallpaperProvider>
          </SettingsProvider>
        </DeviceProvider>
      </body>
    </html>
  );
}
