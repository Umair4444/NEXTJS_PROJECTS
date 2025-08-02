import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umair's Portfolio | Full-Stack Developer",
  description:
    "Explore Umair's projects and expertise in Next.js, React, and modern web development.",
  icons: {
    icon: "/favicon.png", // Path to your favicon inside the `public` folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
