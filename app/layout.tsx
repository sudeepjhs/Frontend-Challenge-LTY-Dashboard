import { Navbar } from "@/components/Header/navbar";
import { Sidebar } from "@/components/Header/sidebar";
import { fontAeonik } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";

import clsx from "clsx";
import type { Viewport } from "next";

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
      <body
        className={clsx(
          "min-h-screen antialiased",
          fontAeonik.className
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "light",
            children: children,
          }}
        >
          <div className="relative flex">
            <aside className="md:w-1/6 xs:w-1/4 max-w-xs min-w-52 hidden sm:block">
              <Sidebar />
            </aside>
            <main className="mx-auto max-w-screen-2xl flex-grow">
              <Navbar />
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
