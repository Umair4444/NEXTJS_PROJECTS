"use client";

import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Menu,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { usePathname } from "next/navigation";
import SearchFilter from "../(filters)/SearchFilter";
import { useEffect, useMemo, useState } from "react";
import { useSanityStore } from "@/hooks/useSanityStore";

export function Header() {
  const { items: cartItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  // for fetching data from sanity store
  const { products, fetchAll } = useSanityStore();
  useEffect(() => {
    fetchAll(); // Fetch all data on mount
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  return (
    <>
      {pathname && !pathname.startsWith("/studio") ? (
        <>
          {/* Top Banner */}
          <div className="w-full bg-black text-white py-2 px-4 ">
            <div className="max-w-7xl mx-auto flex items-center justify-center text-sm">
              <span>Sign up and get 20% off to your first order.</span>
              <Button
                variant="link"
                className="text-white underline ml-2 p-0 h-auto"
              >
                Sign Up Now
              </Button>
            </div>
          </div>

          {/* Main Header */}
          <header className="w-full sticky top-0 z-50 backdrop-blur-lg bg-white/70">
            <div className="border-b">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-8">
                  {/* Logo */}
                  <Link href="/" className="text-2xl font-bold">
                    SHOP.CO
                  </Link>

                  {/* Navigation (Desktop) */}
                  <nav className="hidden lg:flex items-center gap-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-600">
                        Shop <ChevronDown className="w-4 h-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                          <Link href="/products">All Products</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/products">Men&apos;s Clothing</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/products">Women&apos;s Clothing</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/products">Accessories</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Link
                      href="/products?isonsale=true"
                      className="hover:text-gray-600"
                    >
                      On Sale
                    </Link>
                    <Link
                      href="/products?isnew=true"
                      className="hover:text-gray-600"
                    >
                      New Arrivals
                    </Link>
                    <Link href="/brands" className="hover:text-gray-600">
                      Brands
                    </Link>
                  </nav>

                  {/* Search Bar (Desktop) */}
                  <div className="flex-1 max-w-md relative hidden md:block">
                    <SearchFilter
                      placeholder="Search products..."
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      products={filteredProducts}
                      variant="desktop"
                      showDropdown={true}
                    />
                  </div>

                  {/* Action Icons */}
                  <div className="flex items-center gap-4">
                    <Link href="/wishlist" className="relative">
                      <Heart className="w-6 h-6" />
                      {wishlistItems.length > 0 && (
                        <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                          {wishlistItems.length}
                        </Badge>
                      )}
                    </Link>
                    <Link href="/cart" className="relative">
                      <ShoppingCart className="w-6 h-6" />
                      {cartItems.length > 0 && (
                        <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                          {cartItems.length}
                        </Badge>
                      )}
                    </Link>
                    <Link href="/user">
                      <User className="w-6 h-6" />
                    </Link>

                    {/* Mobile Menu */}
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="sm" className="lg:hidden">
                          <Menu className="w-6 h-6" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-72">
                        <nav className="flex flex-col gap-4 mt-8">
                          <Link href="/products">All Products</Link>
                          <Link href="/products?isonsale=true">On Sale</Link>
                          <Link href="/products?isnew=true">New Arrivals</Link>
                          <Link href="/brands">Brands</Link>

                          {/* Mobile Search */}
                          <div className="mt-4">
                            <SearchFilter
                              placeholder="Search products..."
                              searchQuery={searchQuery}
                              setSearchQuery={setSearchQuery}
                              products={filteredProducts}
                              variant="mobile"
                              showDropdown={true}
                            />
                          </div>
                        </nav>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
      ) : null}
    </>
  );
}
