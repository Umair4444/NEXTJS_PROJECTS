import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/(shared)/header";
import { Footer } from "@/components/(shared)/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopCo Store | Modern Headless E-Commerce with Next.js & Sanity",
  description:
    "ShopCo Store is a modern headless e-commerce platform built with Next.js 14, Tailwind CSS, Sanity CMS, and Shadcn UI. Explore a sleek shopping experience with dynamic product pages, responsive design, and scalable architecture..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
