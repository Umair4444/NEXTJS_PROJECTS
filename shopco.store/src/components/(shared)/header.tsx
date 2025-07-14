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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { usePathname } from "next/navigation";

export function Header() {
  const { items: cartItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const pathname = usePathname();

  return (
    <>
      {pathname && !pathname.startsWith("/studio") ? (
        <header className="w-full">
          {/* Top Banner */}
          <div className="bg-black text-white py-2 px-4">
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
          <div className="border-b">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between gap-8">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                  SHOP.CO
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-600">
                      Shop <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem asChild>
                        <Link href="/products">All Products</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Men&apos;s Clothing</DropdownMenuItem>
                      <DropdownMenuItem>Women&apos;s Clothing</DropdownMenuItem>
                      <DropdownMenuItem>Accessories</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link
                    href="/products?sale=true"
                    className="hover:text-gray-600"
                  >
                    On Sale
                  </Link>
                  <Link
                    href="/products?new=true"
                    className="hover:text-gray-600"
                  >
                    New Arrivals
                  </Link>
                  <Link href="/brands" className="hover:text-gray-600">
                    Brands
                  </Link>
                </nav>

                {/* Search Bar */}
                <div className="flex-1 max-w-md relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search for products..."
                    className="pl-10 bg-gray-100 border-none rounded-full"
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
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : null}
    </>
  );
}
