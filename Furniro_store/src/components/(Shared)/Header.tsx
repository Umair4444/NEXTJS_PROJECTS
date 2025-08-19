import Link from "next/link";
import { Search, ShoppingBag, User, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-border/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-medium text-foreground tracking-tight">
            Furniro
          </Link>

          {/* Deskhrefp Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <Link href="/" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
              Home
            </Link>
            <Link href="/shop" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
              Shop
            </Link>
            <Link href="/category" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
              Shop By Category
            </Link>
            <Link href="/about" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <User className="h-5 w-5 text-foreground" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <Search className="h-5 w-5 text-foreground" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <Heart className="h-5 w-5 text-foreground" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <ShoppingBag className="h-5 w-5 text-foreground" />
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden hover:bg-transparent">
              <Menu className="h-5 w-5 text-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
