"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { usePathname } from "next/navigation"; // ✅ Use this instead of useLocation

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ Correct hook for App Router

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/story" },
    { name: "Gallery", path: "/gallery" },
    { name: "Details", path: "/details" },
    { name: "RSVP", path: "/rsvp" },
    { name: "About-Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sage/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="w-4 h-4 text-white fill-current" />
            </div>
            <span className="font-playfair text-xl font-semibold text-primary">
              Emma & James
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path} // ✅ Use href instead of to
                className={`font-medium transition-colors hover:text-sage ${
                  isActive(item.path)
                    ? "text-sage border-b-2 border-sage pb-1"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-sage transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-sage/20 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path} // ✅
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors hover:text-sage ${
                    isActive(item.path) ? "text-sage" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
