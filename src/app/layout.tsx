import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: '--font-noto-sans'
});
const notoSansMono = Noto_Sans_Mono({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-mono'
});

export const metadata: Metadata = {
  title: "RaptorOS",
  description: "Raptor's personal website, now in Next.js",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSansMono.variable} ${notoSans.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
