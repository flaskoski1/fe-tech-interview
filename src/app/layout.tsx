import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const monument = localFont({
  src: [
    {
      path: "../../public/fonts/MonumentExtended_Regular.woff2",
      weight: "100",
    },
  ],
  variable: "--font-monument",
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "200",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Creon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monument.variable} ${satoshi.variable}`}>
      <body className={inter.className}>
        <AppRouterCacheProvider>{children} </AppRouterCacheProvider>
      </body>
    </html>
  );
}
