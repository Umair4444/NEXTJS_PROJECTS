"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import GoogleLogo from "@/components/GoogleLogo";
import GoogleSearchBox from "@/components/GoogleSearchBox";
import GoogleSearchResult from "@/components/GoogleSearchResult";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  Grid3X3,
  Settings,
  Image as Img,
  Video,
  ShoppingBag,
  MoreHorizontal,
  Menu,
} from "lucide-react";

// Mock search results data
const mockResults = [
  {
    title: "React – A JavaScript library for building user interfaces",
    url: "https://reactjs.org/",
    displayUrl: "https://reactjs.org",
    description:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
  },
  {
    title: "Getting Started – React",
    url: "https://reactjs.org/docs/getting-started.html",
    displayUrl: "https://reactjs.org › docs › getting-started",
    description:
      "This page is an overview of the React documentation and related resources. React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.",
  },
  {
    title: "React Tutorial: An Overview and Walkthrough | Tania Rascia",
    url: "https://www.taniarascia.com/getting-started-with-react/",
    displayUrl: "https://www.taniarascia.com › getting-started-with-react",
    description:
      "Aug 19, 2020 — React is a JavaScript library created by Facebook. It's a tool for building UI components. React is a JavaScript library - not a framework.",
  },
  {
    title: "React JavaScript Tutorial in Visual Studio Code",
    url: "https://code.visualstudio.com/docs/nodejs/reactjs-tutorial",
    displayUrl:
      "https://code.visualstudio.com › docs › nodejs › reactjs-tutorial",
    description:
      "React is a popular JavaScript library developed by Facebook for building web application user interfaces. The Visual Studio Code editor supports React.js IntelliSense and code navigation out of the box.",
  },
  {
    title: "Learn React - Free Interactive Course",
    url: "https://scrimba.com/learn/learnreact",
    displayUrl: "https://scrimba.com › learn › learnreact",
    description:
      "Learn React for free with this interactive course. Build your first React app, understand components, props, state, and more through hands-on coding exercises.",
  },
];

export default function GoogleSearchResults() {
  const params = useSearchParams();
  const query = params.get("search") || "";
  // console.log("params", query);
  const [currentQuery, setCurrentQuery] = useState(query);
  // console.log("q", query);
  const router = useRouter();

  useEffect(() => {
    setCurrentQuery(query);
  }, [query]);

  const handleNewSearch = (newQuery: string) => {
    setCurrentQuery(newQuery);
    router.push(`/google-result/${encodeURIComponent(newQuery)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-[#e8eaed] bg-white sticky top-0 z-10">
        <div className="flex items-center px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-8">
            <GoogleLogo size="small" />
          </Link>

          {/* Search Box */}
          <div className="flex-1 max-w-[584px] mr-8">
            <GoogleSearchBox
              initialQuery={query}
              onSearch={handleNewSearch}
              showButtons={false}
              size="small"
            />
          </div>

          {/* Right side tools */}
          <div className="flex items-center space-x-2 ml-auto">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5 text-[#5f6368]" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Grid3X3 className="w-5 h-5 text-[#5f6368]" />
            </button>
            <Link href="/login">
              <button className="bg-[#4285f4] hover:bg-[#3367d6] text-white px-6 py-2 rounded text-[14px] font-medium">
                Sign in
              </button>
            </Link>
          </div>
        </div>

        {/* Search Navigation */}
        <div className="overflow-x-auto">
          <div className="flex items-center space-x-8 text-[13px] min-w-max ml-[156px] px-4">
            <button className="flex items-center space-x-1 text-[#1a73e8] border-b-3 border-[#1a73e8] py-3 whitespace-nowrap font-medium">
              <span>All</span>
            </button>
            <button className="flex items-center space-x-1 text-[#5f6368] hover:text-[#202124] py-3 whitespace-nowrap">
              <Img className="w-4 h-4" />
              <span>Images</span>
            </button>
            <button className="flex items-center space-x-1 text-[#5f6368] hover:text-[#202124] py-3 whitespace-nowrap">
              <Video className="w-4 h-4" />
              <span>Videos</span>
            </button>
            <button className="flex items-center space-x-1 text-[#5f6368] hover:text-[#202124] py-3 whitespace-nowrap">
              <ShoppingBag className="w-4 h-4" />
              <span>Shopping</span>
            </button>
            <button className="flex items-center space-x-1 text-[#5f6368] hover:text-[#202124] py-3 whitespace-nowrap">
              <MoreHorizontal className="w-4 h-4" />
              <span>More</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-[156px] px-4 py-0">
        {/* Results Info */}
        <div className="pt-3 pb-2">
          <div className="text-[#70757a] text-sm">
            About 1,830,000,000 results (0.45 seconds)
          </div>
        </div>

        {/* Search Results */}
        <div className="max-w-[600px]">
          {mockResults.map((result, index) => (
            <GoogleSearchResult
              key={index}
              title={result.title}
              url={result.url}
              description={result.description}
              displayUrl={result.displayUrl}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 mb-12">
          <div className="flex items-center">
            <span className="text-[#4285f4] font-bold text-2xl mr-1">G</span>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
              <button
                key={page}
                className={`w-9 h-9 flex items-center justify-center text-sm rounded ${
                  page === 1
                    ? "bg-[#4285f4] text-white font-bold"
                    : "text-[#4285f4] hover:bg-[#f8f9fa]"
                }`}
              >
                {page}
              </button>
            ))}
            <span className="text-[#ea4335] font-bold text-2xl mx-1">o</span>
            <span className="text-[#fbbc05] font-bold text-2xl mr-1">o</span>
            <span className="text-[#4285f4] font-bold text-2xl mr-1">g</span>
            <span className="text-[#34a853] font-bold text-2xl mr-1">l</span>
            <span className="text-[#ea4335] font-bold text-2xl mr-3">e</span>
            <button className="text-[#4285f4] hover:bg-[#f8f9fa] px-3 py-1 rounded text-sm ml-8">
              Next
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f2f2f2] border-t border-[#e8eaed] mt-12">
        <div className="px-6 py-3 border-b border-[#e8eaed]">
          <span className="text-[13px] text-[#70757a]">United States</span>
        </div>

        <div className="px-6 py-3 flex flex-col md:flex-row justify-between text-[13px] text-[#70757a]">
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
