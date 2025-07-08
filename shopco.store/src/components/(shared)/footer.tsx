import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Twitter, Facebook, Instagram, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-20">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-black rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-white text-2xl md:text-4xl font-bold max-w-md">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Enter your email address" className="pl-12 bg-white rounded-full h-12" />
            </div>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full h-12">Subscribe to Newsletter</Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">SHOP.CO</h3>
            <p className="text-gray-600 mb-6">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-white border border-gray-300 rounded flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-7 h-7 bg-black rounded flex items-center justify-center">
                <Facebook className="w-4 h-4 text-white" />
              </div>
              <div className="w-7 h-7 bg-white border border-gray-300 rounded flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-7 h-7 bg-white border border-gray-300 rounded flex items-center justify-center">
                <Github className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium mb-4 tracking-wider">COMPANY</h4>
            <div className="space-y-3 text-gray-600">
              <div>
                <Link href="/about">About</Link>
              </div>
              <div>
                <Link href="/features">Features</Link>
              </div>
              <div>
                <Link href="/contact">Contact Us</Link>
              </div>
              <div>
                <Link href="/career">Career</Link>
              </div>
            </div>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-medium mb-4 tracking-wider">HELP</h4>
            <div className="space-y-3 text-gray-600">
              <div>
                <Link href="/support">Customer Support</Link>
              </div>
              <div>
                <Link href="/delivery">Delivery Details</Link>
              </div>
              <div>
                <Link href="/terms">Terms & Conditions</Link>
              </div>
              <div>
                <Link href="/privacy">Privacy Policy</Link>
              </div>
            </div>
          </div>

          {/* FAQ Links */}
          <div>
            <h4 className="font-medium mb-4 tracking-wider">FAQ</h4>
            <div className="space-y-3 text-gray-600">
              <div>
                <Link href="/account">Account</Link>
              </div>
              <div>
                <Link href="/orders">Manage Deliveries</Link>
              </div>
              <div>
                <Link href="/orders">Orders</Link>
              </div>
              <div>
                <Link href="/payments">Payments</Link>
              </div>
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-medium mb-4 tracking-wider">RESOURCES</h4>
            <div className="space-y-3 text-gray-600">
              <div>
                <Link href="/ebooks">Free eBooks</Link>
              </div>
              <div>
                <Link href="/tutorials">Development Tutorial</Link>
              </div>
              <div>
                <Link href="/blog">How to - Blog</Link>
              </div>
              <div>
                <Link href="/playlist">Youtube Playlist</Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2000-2021, All rights reserved</p>
          <div className="flex gap-2">
            {/* Payment Icons */}
            <div className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-blue-600">VISA</span>
            </div>
            <div className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center">
              <span className="text-xs font-bold">MC</span>
            </div>
            <div className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-blue-600">PayPal</span>
            </div>
            <div className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center">
              <span className="text-xs font-bold">Pay</span>
            </div>
            <div className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-red-600">G Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
