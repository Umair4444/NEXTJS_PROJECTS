import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="h-screen relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      {/* Centered content */}
      <div className="container mx-auto max-w-6xl relative flex flex-col items-center justify-center h-full px-4 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Powered by Advanced AI
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {/* First line */}
            <div className="mb-4">Your Personal</div>
            {/* Second line */}
            <div>
              <span className="text-yellow-400 md:text-6xl lg:text-7xl font-bold">
                AI Tutor
              </span>{" "}
              <span className="text-black md:text-6xl lg:text-7xl font-bold">
                Awaits
              </span>
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Experience personalized learning like never before. Our AI tutor
            adapts to your pace, explains concepts clearly, and helps you
            achieve your academic goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
            <Link href="/">
              Start Learning Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-full text-primary-foreground bg-secondary hover:bg-secondary/90"
            asChild
          >
            <Link href="/">Watch Demo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
