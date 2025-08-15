import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Resume Builder - Create Professional ATS-Friendly Resumes",
  description:
    "Build professional, ATS-friendly resumes with multiple templates and export options. Download as PDF, JPG, or Word document.",
  keywords:
    "resume builder, CV maker, ATS friendly, professional resume, job application",
  authors: [{ name: "Resume Builder Team" }],
  creator: "Resume Builder",
  publisher: "Resume Builder",
  openGraph: {
    title: "Resume Builder - Create Professional ATS-Friendly Resumes",
    description:
      "Build professional, ATS-friendly resumes with multiple templates and export options.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume Builder - Create Professional ATS-Friendly Resumes",
    description:
      "Build professional, ATS-friendly resumes with multiple templates and export options.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
