import Link from "next/link";
import React from "react";

interface FilterProps {
  current: string;
  previous: string;
  description: string;
}

const FloatingWindow: React.FC<FilterProps> = ({
  current,
  previous,
  description,
}) => {
  return (
    <div className="relative container mx-auto px-6 h-full flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          {current}
        </h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto text-white/90">
          {description}
        </p>
        <nav className="text-sm">
          <Link
            href="/"
            className="hover:underline text-white/80 hover:text-white transition-colors"
          >
            {previous}
          </Link>
          <span className="mx-2 text-white/60">›</span>
          <span className="text-white">{current}</span>
        </nav>
      </div>
    </div>
  );
};

export default FloatingWindow;
