"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > prevScrollY && latest > 100) {
      setHidden(true);
      setMobileMenuOpen(false);
    } else if (latest < prevScrollY) {
      setHidden(false);
    }
    setPrevScrollY(latest);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full border border-border/40 bg-background/80 backdrop-blur-md shadow-lg"
    >
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-sm text-muted-foreground hidden sm:inline">
            From Startup Dream to
          </span>
          <Link href="/" className="text-sm sm:text-base font-semibold">
            Reality
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="#videos"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Videos
          </Link>
          <Link
            href="#community"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Community
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
            Sign in
          </Button>
          <Button
            size="sm"
            className="bg-chart-2 hover:bg-chart-2/90 text-secondary hover:scale-105"
          >
            Get Started
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full h-9 w-9"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md rounded-b-3xl overflow-hidden"
        >
          <nav className="flex flex-col gap-1 p-4">
            <Link
              href="#videos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-accent"
            >
              Videos
            </Link>
            <Link
              href="#community"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-accent"
            >
              Community
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-accent"
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-border/40">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                Sign in
              </Button>
              <Button
                size="sm"
                className="w-full bg-chart-2 hover:bg-chart-2/70"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
