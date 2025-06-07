"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input"; // ← ShadCN Input
import ThemeProvider from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Blooming Narratives
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between space-x-2">
          <ul className="flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <Input
            type="text"
            placeholder="Search articles..."
            className="w-64 text-sm border-gray-300 dark:border-gray-700"
          />
          <ThemeProvider />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block py-1 hover:text-blue-600 dark:hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Optional: Add search input on mobile too */}
          <li>
            <Input
              type="text"
              placeholder="Search..."
              className="w-full text-sm border-gray-300 dark:border-gray-700"
            />
          </li>
        </ul>
      )}
    </header>
  );
}
