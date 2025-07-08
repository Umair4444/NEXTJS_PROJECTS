import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/(shared)/header"
import { Footer } from "@/components/(shared)/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "ShopHub - Your One-Stop Shopping Destination",
  description: "Discover amazing products at unbeatable prices with fast shipping and excellent customer service.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
