import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 pb-6 pt-12">
        {/* Large screens (xl+): All in one line */}
        <div className="hidden xl:flex xl:items-start xl:justify-between xl:gap-8 2xl:gap-12">
          {/* Company Info */}
          <div className="space-y-4 flex-shrink-0 w-full max-w-xs min-w-0">
            <h2 className="text-2xl font-bold text-foreground">Furniro</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover the finest collection of modern furniture and home decor.
              Quality craftsmanship meets contemporary design.
            </p>

            <div className="flex space-x-3">
              <div className="w-11 h-11 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-all duration-200 cursor-pointer group flex-shrink-0">
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary/30 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </div>
              <div className="w-11 h-11 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-all duration-200 cursor-pointer group flex-shrink-0">
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary/30 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </div>
              <div className="w-11 h-11 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-all duration-200 cursor-pointer group flex-shrink-0">
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary/30 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex gap-12 lg:gap-16 xl:gap-20 min-w-0">
            {/* Quick Links */}
            <div className="space-y-6 min-w-0">
              <h4 className="font-semibold text-lg tracking-wide whitespace-nowrap">
                Quick Links
              </h4>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Categories */}
            <div className="space-y-6 min-w-0">
              <h3 className="font-semibold  text-lg tracking-wide whitespace-nowrap">
                Categories
              </h3>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/category/furniture"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Furniture
                </Link>
                <Link
                  href="/category/lighting"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Lighting
                </Link>
                <Link
                  href="/category/decor"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Home Decor
                </Link>
                <Link
                  href="/category/textiles"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Textiles
                </Link>
                <Link
                  href="/category/accessories"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Accessories
                </Link>
              </nav>
            </div>

            {/* Help */}
            <div className="space-y-6 min-w-0">
              <h4 className="font-semibold text-lg tracking-wide whitespace-nowrap">
                Customer Care
              </h4>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/shipping"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Payment Options
                </Link>
                <Link
                  href="/returns"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Returns & Exchanges
                </Link>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/support"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Support Center
                </Link>
              </nav>
            </div>
          </div>

          <div className="space-y-6 flex-shrink-0 w-full max-w-sm min-w-0 overflow-hidden">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20"></div>
              <div className="relative bg-secondary rounded-lg p-5 border border-border overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="font-bold text-base tracking-wide truncate">
                    Stay in the Loop
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Join 10,000+ design enthusiasts and get exclusive access to
                  new collections and design tips.
                </p>
                <div className="space-y-3">
                  <div className="relative min-w-0">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500 pl-10 h-11 w-full min-w-0"
                    />
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold h-11 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 text-sm whitespace-nowrap">
                    Get Exclusive Access
                  </Button>
                  <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground pt-1">
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-green-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="whitespace-nowrap">No spam</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-green-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="whitespace-nowrap">
                        Unsubscribe anytime
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet layout (lg) */}
        <div className="hidden lg:block xl:hidden">
          <div className="flex justify-between items-start gap-6 mb-10">
            <div className="space-y-5 flex-shrink-0 max-w-xs min-w-0">
              <h2 className="text-2xl font-bold  whitespace-nowrap">Furniro</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Discover the finest collection of modern furniture and home
                decor.
              </p>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-all duration-200 cursor-pointer group flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-primary/30 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-all duration-200 cursor-pointer group flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-primary/30 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-all duration-200 cursor-pointer group flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-primary/30 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex gap-8 lg:gap-12 min-w-0">
              <div className="space-y-5 min-w-0">
                <h4 className="font-semibold  text-base tracking-wide whitespace-nowrap">
                  Quick Links
                </h4>
                <nav className="flex flex-col space-y-3">
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    Home
                  </Link>
                  <Link
                    href="/shop"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    Shop
                  </Link>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              <div className="space-y-5 min-w-0">
                <h3 className="font-semibold  text-base tracking-wide whitespace-nowrap">
                  Categories
                </h3>
                <nav className="flex flex-col space-y-3">
                  <Link
                    href="/category/furniture"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    Furniture
                  </Link>
                  <Link
                    href="/category/lighting"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    Lighting
                  </Link>
                  <Link
                    href="/category/decor"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    Home Decor
                  </Link>
                  <Link
                    href="/category/textiles"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    Textiles
                  </Link>
                  <Link
                    href="/category/accessories"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    Accessories
                  </Link>
                </nav>
              </div>

              <div className="space-y-5 min-w-0">
                <h4 className="font-semibold  text-base tracking-wide whitespace-nowrap">
                  Customer Care
                </h4>
                <nav className="flex flex-col space-y-3">
                  <Link
                    href="/shipping"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    Payment Options
                  </Link>
                  <Link
                    href="/returns"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    Returns & Exchanges
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/support"
                    className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    Support Center
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-3xl min-w-0 overflow-hidden">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20"></div>
                <div className="relative bg-secondary rounded-lg p-5 border border-border text-center overflow-hidden">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <svg
                      className="w-5 h-5 text-blue-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <h3 className="font-bold  text-base tracking-wide whitespace-nowrap">
                      Stay in the Loop
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Join 10,000+ design enthusiasts for exclusive access to new
                    collections and design tips.
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="relative flex-1 min-w-0">
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500 pl-10 h-11 w-full min-w-0"
                        />
                        <svg
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold h-11 px-5 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 text-sm flex-shrink-0 whitespace-nowrap">
                        Subscribe
                      </Button>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="whitespace-nowrap">No spam</span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="whitespace-nowrap">
                          Unsubscribe anytime
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layouts */}
        <div className="block lg:hidden">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold  mb-3 whitespace-nowrap">
              Furniro
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Discover the finest collection of modern furniture and home decor.
              Quality craftsmanship meets contemporary design for your perfect
              living space.
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-all duration-200 cursor-pointer group flex-shrink-0">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-primary/30 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </div>
              <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-all duration-200 cursor-pointer group flex-shrink-0">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-primary/30 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </div>
              <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-all duration-200 cursor-pointer group flex-shrink-0">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-primary/30 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="space-y-3 min-w-0">
              <h4 className="font-semibold  text-xs tracking-wide whitespace-nowrap">
                Quick Links
              </h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div className="space-y-3 min-w-0">
              <h3 className="font-semibold  text-xs tracking-wide whitespace-nowrap">
                Categories
              </h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/category/furniture"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  Furniture
                </Link>
                <Link
                  href="/category/lighting"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  Lighting
                </Link>
                <Link
                  href="/category/decor"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  Home Decor
                </Link>
                <Link
                  href="/category/textiles"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  Textiles
                </Link>
                <Link
                  href="/category/accessories"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  Accessories
                </Link>
              </nav>
            </div>

            <div className="space-y-3 min-w-0">
              <h4 className="font-semibold  text-xs tracking-wide whitespace-nowrap">
                Customer Care
              </h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/shipping"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  Payment Options
                </Link>
                <Link
                  href="/returns"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  Returns
                </Link>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/support"
                  className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 text-xs font-medium whitespace-nowrap"
                >
                  Support Center
                </Link>
              </nav>
            </div>
          </div>

          <div className="space-y-4 overflow-hidden">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20"></div>
              <div className="relative bg-secondary rounded-lg p-4 border border-border overflow-hidden">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="font-bold  text-center text-xs tracking-wide whitespace-nowrap">
                    Stay in the Loop
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs text-center leading-relaxed mb-3">
                  Join 10,000+ design enthusiasts for exclusive access to new
                  collections and design tips.
                </p>
                <div className="space-y-3">
                  <div className="relative min-w-0">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500 pl-8 h-9 w-full min-w-0 text-xs"
                    />
                    <svg
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-muted-foreground flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold h-9 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 text-xs whitespace-nowrap">
                    Get Exclusive Access
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <svg
                        className="w-2 h-2 text-green-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="whitespace-nowrap">No spam</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <svg
                        className="w-2 h-2 text-green-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="whitespace-nowrap">
                        Unsubscribe anytime
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border" />
        {/* Footer Note */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-muted-foreground whitespace-nowrap">
            &copy; 2024 Furniro. All rights reserved.
          </p>
          <p className="text-blue-400 font-semibold whitespace-nowrap">
            Developed By Umair
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 whitespace-nowrap"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary/30 transition-colors duration-200 whitespace-nowrap"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
