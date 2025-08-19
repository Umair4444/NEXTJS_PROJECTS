import React from "react";
import { Button } from "../ui/button";

const Newsletter = () => {
  return (
    <section className="py-10 bg-gradient-to-t from-primary/20 to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Newsletter
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Stay in the Loop
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Be the first to know about new arrivals, exclusive offers, and
              design inspiration
            </p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
              />
              <Button size="lg" className="px-8 py-6 shadow-lg">
                Subscribe
              </Button>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Join 10,000+ furniture lovers. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
