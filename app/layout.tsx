import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontAeonik } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/Header/navbar";
import { Sidebar } from "@/components/Header/sidebar";

import { Link } from "@nextui-org/link";
import type { Viewport } from "next";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  height: "device-height",
  initialScale: 1.0,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx("min-h-screen antialiased", fontAeonik.className)}>
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "light",
            children: children,
          }}
        >
          <div className="relative flex h-screen">
            <aside className="md:w-1/6 xs:w-1/4">
              <Sidebar />
            </aside>
            <main className="container mx-auto max-w-7xl px-6 flex-grow">
              <Navbar />
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
