import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/(shared)/Header";
import Footer from "@/components/(shared)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emma & James Wedding Website",
  description:
    "Celebrate the wedding of Emma and James. Find event details, RSVP, and more.",
  keywords: ["Wedding", "Emma", "James", "RSVP", "Wedding Website"],
  authors: [{ name: "Umair Khan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
