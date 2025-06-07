import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Logo & Text */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Blogify</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-gray-600 dark:text-gray-300 text-sm font-medium">
          <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
          <li><Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-600 dark:text-gray-300">
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Twitter className="h-5 w-5 hover:text-blue-500 transition" />
          </Link>
          <Link href="https://github.com" target="_blank" aria-label="GitHub">
            <Github className="h-5 w-5 hover:text-black dark:hover:text-white transition" />
          </Link>
          <Link href="mailto:you@example.com" aria-label="Email">
            <Mail className="h-5 w-5 hover:text-red-500 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
