import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-blue text-white p-2 rounded-lg">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 13h14v6c0 .55-.45 1-1 1s-1-.45-1-1v-3H7v3c0 .55-.45 1-1 1s-1-.45-1-1v-6zm-.5-8C3.67 5 3 5.67 3 6.5S3.67 8 4.5 8 6 7.33 6 6.5 5.33 5 4.5 5zm15 0c-.83 0-1.5.67-1.5 1.5S18.67 8 19.5 8 21 7.33 21 6.5 20.33 5 19.5 5zM7.5 9C6.12 9 5 10.12 5 11.5S6.12 14 7.5 14s2.5-1.12 2.5-2.5S8.88 9 7.5 9zm9 0c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S17.88 9 16.5 9z" />
                </svg>
              </div>
              <span className="text-2xl font-bold">
                Car<span className="text-brand-blue">Rent</span>
              </span>
            </div>
            <p className="text-brand-gray-300 leading-relaxed">
              Your trusted partner for premium car rental services. We provide
              quality vehicles and exceptional customer service for all your
              transportation needs.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-brand-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {[
                "About Us",
                "Our Fleet",
                "Services",
                "Locations",
                "Pricing",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-brand-gray-300 hover:text-brand-blue transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-3">
              {[
                "Car Rental",
                "Long Term Rental",
                "Corporate Rental",
                "Airport Transfer",
                "Chauffeur Service",
                "Wedding Cars",
              ].map((service) => (
                <a
                  key={service}
                  href="#"
                  className="block text-brand-gray-300 hover:text-brand-blue transition-colors"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                  <div className="text-brand-gray-300">
                    <div>123 Car Street</div>
                    <div>Auto City, AC 12345</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <span className="text-brand-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <span className="text-brand-gray-300">info@carrent.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Subscribe to Newsletter</h4>
              <p className="text-brand-gray-300 text-sm mb-4">
                Get the latest updates and special offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-brand-gray-800 border border-brand-gray-700 rounded-lg text-white placeholder-brand-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
                <Button className="bg-brand-blue hover:bg-brand-blue/90 px-3">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-brand-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-brand-gray-300 text-sm">
              © 2024 CarRent. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className="text-brand-gray-300 hover:text-brand-blue transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-brand-gray-300 hover:text-brand-blue transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-brand-gray-300 hover:text-brand-blue transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-brand-gray-300 hover:text-brand-blue transition-colors"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
