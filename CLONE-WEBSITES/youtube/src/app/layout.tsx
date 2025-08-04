import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { SidebarProvider } from "@/components/sidebar-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Clone",
  description:
    "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex flex-col min-h-screen overflow-x-hidden bg-white">
            <Header />
            <div className="flex flex-1 relative pt-14">
              <Sidebar />
              <main className="flex-1 transition-all duration-300 ease-in-out">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
