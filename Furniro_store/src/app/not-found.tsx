"use client";
import Link from "next/link";
import Header from "@/components/(Shared)/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft, ShoppingBag } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12">
            <CardContent className="space-y-8">
              {/* 404 Illustration */}
              <div className="space-y-4">
                <div className="text-8xl font-bold text-primary/20">404</div>
                <h1 className="text-4xl font-bold text-foreground">
                  Page Not Found
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Oops! The page you&apos;re looking for doesn&apos;t exist. It might have
                  been moved, deleted, or you entered the wrong URL.
                </p>
              </div>

              {/* Suggested Actions */}
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Here are some helpful links instead:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button className="h-auto p-4">
                    <Link href="/" className="flex flex-col items-center gap-2">
                      <Home className="h-6 w-6" />
                      <span>Go Home</span>
                    </Link>
                  </Button>

                  <Button variant="outline" className="h-auto p-4">
                    <Link
                      href="/shop"
                      className="flex flex-col items-center gap-2"
                    >
                      <ShoppingBag className="h-6 w-6" />
                      <span>Browse Products</span>
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline">
                    <Link href="/about">About Us</Link>
                  </Button>

                  <Button variant="outline">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </div>

              {/* Back Navigation */}
              <div className="pt-6 border-t border-border">
                <Button variant="ghost" onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>
              </div>

              {/* Search Suggestion */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Looking for something specific? Try searching:
                </p>
                <div className="flex gap-2 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <input
                      type="search"
                      placeholder="Search our products..."
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          window.location.href = `/shop?search=${encodeURIComponent(
                            (e.target as HTMLInputElement).value
                          )}`;
                        }
                      }}
                    />
                  </div>
                  <Button variant="outline">Search</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Furniro.</h3>
              <p className="text-muted-foreground leading-relaxed">
                400 University Drive Suite 200 Coral Gables,
                <br />
                FL 33134 USA
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-muted-foreground">Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-muted-foreground">Help</h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/shipping"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  Shipping Info
                </Link>
                <Link
                  href="/returns"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  Returns
                </Link>
                <Link
                  href="/privacy"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  Privacy Policies
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-muted-foreground">
                Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1 border-b border-foreground bg-transparent py-2 text-sm focus:outline-none"
                />
                <button className="border-b border-foreground py-2 text-sm font-semibold">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-foreground">2023 furniro. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
