import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { GradientText } from "./ui/gradient-text";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-tr from-primary/10 via-secondary/5 to-primary/5">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Ready to Transform Your{" "}
            <GradientText className="text-secondary">
              Learning Journey
            </GradientText>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who are already experiencing
            personalized, AI-powered education. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full"
              asChild
            >
              <Link href="/">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-popover hover:text-popover text-lg px-8 py-6 rounded-full bg-secondary hover:bg-secondary/90"
              asChild
            >
              <Link href="/">Contact Sales</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
