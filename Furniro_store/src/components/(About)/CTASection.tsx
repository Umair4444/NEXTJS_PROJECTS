import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
          Discover our complete collection of premium furniture and home
          accessories. Let us help you create the home of your dreams.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            variant="secondary"
            size="lg"
            className="group px-8 py-4 text-lg font-semibold shadow-xl"
          >
            <Link href="/shop" className="flex items-center">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg border-2 border-primary-foreground text-primary hover:bg-primary-foreground/80 hover:text-primary shadow-xl"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
