// import Link from "next/link";
// import React from "react";

// interface RelatedProduct {
//   id: string;
//   name: string;
//   image?: string;
//   category: string;
// }

// interface BreadCrumbProps {
//   current: string;
//   previous: string;
//   productData: RelatedProduct;
// }

// const BreadCrumb: React.FC<BreadCrumbProps> = ({
//   current,
//   previous,
//   productData,
// }) => {
//   return (
//     <section className="bg-gradient-to-r from-secondary/20 to-secondary/10 py-6">
//       <div className="container mx-auto px-6">
//         <nav className="text-sm text-muted-foreground">
//           <Link
//             href={`/${previous}`}
//             className="hover:text-foreground transition-colors"
//           >
//             {previous}
//           </Link>
//           <span className="mx-2">›</span>
//           <Link
//             href={`/${current}`}
//             className="hover:text-foreground transition-colors"
//           >
//             {current}
//           </Link>
//           <span className="mx-2">›</span>
//           <Link
//             href={`/category/${productData.category.toLowerCase()}`}
//             className="hover:text-foreground transition-colors"
//           >
//             {productData.category}
//           </Link>
//           <span className="mx-2">›</span>
//           <span className="text-foreground font-medium">
//             {productData.name}
//           </span>
//         </nav>
//       </div>
//     </section>
//   );
// };

import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface RelatedProduct {
  id: string;
  name: string;
  image?: string;
  category: string;
}

interface BreadCrumbProps {
  items: { label: string; href?: string }[];
  productData?: RelatedProduct;
  className?: string; 
  variant?: "default" | "withBg";
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  items,
  productData,
  className,
  variant = "default",
}) => {
  const fullItems = [
    ...items,
    ...(productData ? [{ label: productData.name }] : []),
  ];

  return (
    <section
      className={clsx(
        variant === "withBg" &&
          "bg-gradient-to-r from-secondary/20 to-secondary/10 py-6",
        className
      )}
    >
      <div className="container mx-auto px-6">
        <nav
          className={clsx(className || "text-sm", className || "text-black")}
        >
          {fullItems.map((item, idx) => {
            const isLast = idx === fullItems.length - 1;
            return (
              <span key={idx} className="inline-flex items-center">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className={clsx(
                      "transition-colors",
                      "opacity-70 hover:opacity-100"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium opacity-100">{item.label}</span>
                )}
                {idx < fullItems.length - 1 && <span className="mx-2">›</span>}
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default BreadCrumb;
