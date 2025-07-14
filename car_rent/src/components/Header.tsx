"use client";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import "@/app/globals.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 z-50 w-full shadow-sm border-b border-brand-gray-100 bg-transparent/10 backdrop-blur-lg">
      {/* Top bar */}
      <div className="bg-brand-blue text-white py-2 ">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>123 Car Street, Auto City, AC 12345</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Open 24/7 - Best Car Rental Service</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-brand-blue text-white p-2 rounded-lg">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 13h14v6c0 .55-.45 1-1 1s-1-.45-1-1v-3H7v3c0 .55-.45 1-1 1s-1-.45-1-1v-6zm-.5-8C3.67 5 3 5.67 3 6.5S3.67 8 4.5 8 6 7.33 6 6.5 5.33 5 4.5 5zm15 0c-.83 0-1.5.67-1.5 1.5S18.67 8 19.5 8 21 7.33 21 6.5 20.33 5 19.5 5zM7.5 9C6.12 9 5 10.12 5 11.5S6.12 14 7.5 14s2.5-1.12 2.5-2.5S8.88 9 7.5 9zm9 0c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S17.88 9 16.5 9z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-brand-gray-900">
              Car<span className="text-brand-blue">Rent</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className="text-brand-black hover:text-brand-blue font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="/cars"
              className="text-brand-black hover:text-brand-blue font-medium transition-colors"
            >
              Cars
            </a>
            <a
              href="/services"
              className="text-brand-black hover:text-brand-blue font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="/about"
              className="text-brand-black hover:text-brand-blue font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-brand-black hover:text-brand-blue font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              Sign In
            </Button>
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-brand-gray-700 hover:text-brand-blue"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-brand-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="/"
                className="text-brand-gray-700 hover:text-brand-blue font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/cars"
                className="text-brand-gray-700 hover:text-brand-blue font-medium transition-colors"
              >
                Cars
              </a>
              <a
                href="/services"
                className="text-brand-gray-700 hover:text-brand-blue font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="/about"
                className="text-brand-gray-700 hover:text-brand-blue font-medium transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-brand-gray-700 hover:text-brand-blue font-medium transition-colors"
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                >
                  Sign In
                </Button>
                <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
