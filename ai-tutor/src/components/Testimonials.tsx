"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { AnimatedCard } from "./ui/animated-card";
import { CardHeader, CardDescription, CardContent } from "./ui/card";

// TypeScript type for a testimonial
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number; // 1 to 5
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/5">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Students Are Saying
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students who have transformed their learning
              experience
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={testimonial.name}
              className="hover:scale-105 transition-transform duration-300"
              delay={index * 0.2}
            >
              <CardHeader>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <CardDescription className="text-base leading-relaxed">
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div>
                  <p className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
