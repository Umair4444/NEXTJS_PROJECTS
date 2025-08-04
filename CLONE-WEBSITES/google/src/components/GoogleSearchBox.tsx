"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Mic, Camera } from "lucide-react";

interface GoogleSearchBoxProps {
  initialQuery?: string;
  onSearch?: (query: string) => void;
  showButtons?: boolean;
  size?: "small" | "large";
}

export default function GoogleSearchBox({
  initialQuery = "",
  onSearch,
  showButtons = true,
  size = "large",
}: GoogleSearchBoxProps) {
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      if (onSearch) {
        onSearch(query);
        router.push(`/google-result/query?search=${encodeURIComponent(query)}`);
      } else {
        router.push(`/google-result/query?search=${encodeURIComponent(query)}`);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const containerHeight = size === "large" ? "h-11" : "h-9";
  const fontSize = size === "large" ? "text-base" : "text-sm";

  return (
    <div className="w-full flex flex-col items-center">
      {/* Search Input */}
      <div className={`w-full ${containerHeight} relative group`}>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <Search className="w-5 h-5 text-[#9aa0a6]" />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full h-full pl-12 pr-20 ${fontSize}
            border border-[#dfe1e5] rounded-full
            bg-white outline-none
            hover:shadow-[0_2px_5px_1px_rgba(64,60,67,.16)]
            focus:shadow-[0_2px_5px_1px_rgba(64,60,67,.16)]
            transition-shadow duration-200
            ${isFocused ? "border-transparent" : "border-[#dfe1e5]"}
            ${size === "small" ? "max-w-[584px]" : ""}
          `}
          placeholder="Search"
        />

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <Mic className="w-6 h-6 text-[#4285f4]" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <Camera className="w-6 h-6 text-[#34a853]" />
          </button>
        </div>
      </div>

      {/* Search Buttons */}
      {showButtons && (
        <div className="flex gap-3 mt-8">
          <button
            onClick={handleSearch}
            className="bg-[#f8f9fa] border border-[#f8f9fa] rounded px-5 py-2 text-[14px] text-[#3c4043] hover:shadow-[0_1px_1px_rgba(0,0,0,.1)] hover:bg-[#f1f3f4] hover:border-[#dadce0] transition-all duration-100"
          >
            Google Search
          </button>
          <button className="bg-[#f8f9fa] border border-[#f8f9fa] rounded px-5 py-2 text-[14px] text-[#3c4043] hover:shadow-[0_1px_1px_rgba(0,0,0,.1)] hover:bg-[#f1f3f4] hover:border-[#dadce0] transition-all duration-100">
            I&apos;Feeling Lucky
          </button>
        </div>
      )}
    </div>
  );
}
