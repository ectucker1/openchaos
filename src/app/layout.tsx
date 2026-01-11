import type { Metadata } from "next";
import { Comic_Neue, LXGW_WenKai_Mono_TC } from "next/font/google";
import "./globals.css";

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  weight: "700",
  subsets: ["latin"],
});

const lxgwWenKaiMono = LXGW_WenKai_Mono_TC({
  variable: "--font-lxgw-wenkai-mono",
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenChaos.dev",
  description: "A self-evolving open source project. Vote on PRs. Winner gets merged every Sunday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comicNeue.variable} ${lxgwWenKaiMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
