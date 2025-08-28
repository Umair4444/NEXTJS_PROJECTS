import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import BreadCrumb from "../BreadCrumb";
import FloatingWindow from "../FloatingWindow";

const HeroSection = () => {
  return (
    // <section
    //   className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
    //   style={{
    //     backgroundImage:
    //       "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=1080&fit=crop')",
    //   }}
    // >
    //   <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

    //   {/* Floating Elements */}
    //   <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
    //   <div className="absolute bottom-40 left-16 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>

    //   <div className="relative container mx-auto px-6 min-h-screen flex items-center">
    //     <div className="max-w-3xl">
    //       <div className="space-y-8">
    //         <span className="inline-block px-6 py-3 bg-primary/30 backdrop-blur-md rounded-full text-sm text-secondary font-semibold uppercase tracking-wider border border-primary/20">
    //           Our Story
    //         </span>

    //         <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
    //           Crafting Dreams
    //           <span className="block bg-gradient-to-r from-secondary/70 via-secondary to-secondary bg-clip-text text-transparent">
    //             Since 2010
    //           </span>
    //         </h1>

    //         <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
    //           From a small workshop to a trusted brand, we&apos;ve been
    //           transforming houses into homes with furniture that combines
    //           timeless design, exceptional quality, and sustainable practices.
    //         </p>

    //         <div className="flex flex-col sm:flex-row gap-4">
    //           <Button
    //             size="lg"
    //             className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-xl"
    //           >
    //             <Link href="/shop" className="flex items-center">
    //               Our Collection
    //               <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    //             </Link>
    //           </Button>
    //           <Button
    //             variant="outline"
    //             size="lg"
    //             className="px-8 py-4 text-lg border-2 bg-transparent/70 border-white text-white hover:bg-white hover:text-foreground"
    //           >
    //             Watch Our Story
    //           </Button>
    //         </div>

    //         <div className="max-w-3xl absolute top-0 left-2">
    //           <BreadCrumb
    //             className="text-secondary"
    //             variant="default"
    //             items={[
    //               {
    //                 label: "Home",
    //                 href: "/",
    //               },
    //               {
    //                 label: "About",
    //                 href: "/about",
    //               },
    //             ]}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      className="relative h-96 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=1080&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      {/* Floating Elements */}
      <div className="absolute top-16 left-20 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-32 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
  
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <span className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-md text-white rounded-full text-sm font-semibold uppercase tracking-wider border border-white/20 mb-2">
            Our Story
          </span>

          <FloatingWindow
            className="max-w-5xl"
            breadcrumbs={[
              { label: "Home", href: "/home" },
              { label: "About", href: "/about" },
            ]}
            description=" From a small workshop to a trusted brand, we've been transforming houses into homes with furniture that combines timeless design, exceptional quality, and sustainable practices."
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
