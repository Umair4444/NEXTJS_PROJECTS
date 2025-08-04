import Link from "next/link";
import GoogleLogo from "@/components/GoogleLogo";
import GoogleSearchBox from "@/components/GoogleSearchBox";
import { Grid3X3, Menu } from "lucide-react";

export default function GoogleSearch() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navigation */}
      <header className="flex justify-end items-center px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center space-x-4 text-[13px]">
          <Link href="/" className="text-black/90 hover:underline">
            Gmail
          </Link>
          <Link href="/" className="text-black/90 hover:underline">
            Images
          </Link>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Grid3X3 className="w-5 h-5 text-gray-700" />
          </button>
          <Link href="/login">
            <button className="bg-[#4285f4] hover:bg-[#3367d6] text-white px-6 py-2 rounded text-[14px] font-medium transition-colors">
              Sign in
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Google Logo */}
        <div className="mb-8">
          <GoogleLogo size="large" />
        </div>

        {/* Search Box */}
        <div className="w-full max-w-[584px]">
          <GoogleSearchBox />
        </div>

        {/* Language Options */}
        <div className="mt-8 text-[13px] text-gray-700">
          Google offered in:{" "}
          <Link href="/" className="text-[#1a0dab] hover:underline ml-1">
            العربية
          </Link>{" "}
          <Link href="/" className="text-[#1a0dab] hover:underline">
            Français
          </Link>{" "}
          <Link href="/" className="text-[#1a0dab] hover:underline">
            Español
          </Link>{" "}
          <Link href="/" className="text-[#1a0dab] hover:underline">
            Deutsch
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f2f2f2] mt-auto">
        <div className="px-6 py-3 border-b border-gray-300">
          <span className="text-[13px] text-gray-700">United States</span>
        </div>

        <div className="px-6 py-3 flex flex-col md:flex-row justify-between text-[13px] text-gray-700">
          <div className="flex flex-wrap gap-6 mb-3 md:mb-0">
            <Link href="/" className="hover:underline">
              Advertising
            </Link>
            <Link href="/" className="hover:underline">
              Business
            </Link>
            <Link href="/" className="hover:underline">
              How Search works
            </Link>
          </div>

          <div className="flex flex-wrap gap-6">
            <Link href="/" className="hover:underline">
              Privacy
            </Link>
            <Link href="/" className="hover:underline">
              Terms
            </Link>
            <Link href="/" className="hover:underline">
              Settings
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
