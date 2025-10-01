import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SoulMate - Find Your Perfect Match",
  description:
    "Discover meaningful connections with verified profiles, AI-powered matchmaking, and secure conversations. Your journey to finding true love starts here.",
  generator: "v0.app",
  keywords: "matrimonial, dating, marriage, relationships, matchmaking, love",
  authors: [{ name: "SoulMate Team" }],
  openGraph: {
    title: "SoulMate - Find Your Perfect Match",
    description: "Discover meaningful connections with verified profiles and AI-powered matchmaking.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
