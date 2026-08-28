import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { LineNumbers } from "./components/LineNumbers";
import Header from "./components/Header";
import { BackendWaker } from "./components/BackendWaker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mykhailo Loniak | Junior Full-Stack Developer",

  description:
    "Portfolio of Mykhailo Loniak, a Junior Full-Stack JavaScript Developer based in Madrid, building responsive web applications with Next.js, Node.js, Express, and PostgreSQL.",

  keywords: [
    "Mykhailo Loniak",
    "Junior Full-Stack Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "PostgreSQL",
    "Web Developer Madrid",
  ],

  authors: [
    {
      name: "Mykhailo Loniak",
    },
  ],

  creator: "Mykhailo Loniak",

  openGraph: {
    title: "Mykhailo Loniak | Junior Full-Stack Developer",
    description:
      "Full-stack developer portfolio featuring Next.js, React, Node.js, Express, and PostgreSQL projects.",
    type: "website",
    locale: "en_US",
    siteName: "Mykhailo Loniak Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mykhailo Loniak | Junior Full-Stack Developer",
    description:
      "Full-stack developer portfolio featuring Next.js, React, Node.js, Express, and PostgreSQL projects.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
    >
      <body className="relative min-h-screen max-w-7xl m-auto">
        <BackendWaker />

        <div className="fixed top-0 bottom-0 left-0 z-2">
          <LineNumbers />
        </div>

        <div className="fixed top-0 right-0 left-0 md:px-10 z-1 bg-[var(--background)]">
          <Header />
        </div>

        <main className="mt-10 h-full ms-4  md:px-10 md:ms-[28px] relative p-2 w-[calc(100%-28px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
