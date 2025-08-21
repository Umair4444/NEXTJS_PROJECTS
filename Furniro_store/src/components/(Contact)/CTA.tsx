import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Whether you&apos;re looking for a single piece or furnishing your entire
          home, we&apos;re here to help you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            className="px-8 py-4 text-lg font-semibold shadow-xl"
          >
            <Link href="/shop">Browse Products</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg border-2 border-primary-foreground text-primary hover:bg-primary-foreground/80 hover:text-primary shadow-xl"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
