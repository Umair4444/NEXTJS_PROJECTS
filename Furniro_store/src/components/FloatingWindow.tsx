import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface BreadcrumbItem {
  label: string;
  href?: string; // optional, so last one (current) doesn't need it
}

interface FloatingWindowProps {
  breadcrumbs: BreadcrumbItem[];
  description?: string;
  className?: string;
}

const FloatingWindow: React.FC<FloatingWindowProps> = ({
  breadcrumbs,
  description,
  className,
}) => {
  return (
    <div className="relative container mx-auto px-6 h-full flex items-center justify-center">
      <div className="text-center text-white">
        {/* Current page title = last breadcrumb */}
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 py-1 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          {breadcrumbs[breadcrumbs.length - 1]?.label}
        </h1>

        {description && (
          <p
            className={clsx(
              "text-xl mb-6 max-w-3xl mx-auto text-white/90",
              className
            )}
          >
            {description}
          </p>
        )}

        {/* Breadcrumb navigation */}
        <nav className="text-sm flex items-center justify-center">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <span key={index} className="flex items-center">
                {!isLast && item.href ? (
                  <Link
                    href={item.href}
                    className="hover:underline text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
                {!isLast && <span className="mx-2 text-white/60">›</span>}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default FloatingWindow;
