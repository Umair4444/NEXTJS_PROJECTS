"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { GradientText } from "./ui/gradient-text";

// TypeScript type for props
interface BenefitSectionProps {
  benefits: string[];
}

const BenefitSection: React.FC<BenefitSectionProps> = ({ benefits }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-l from-primary/10 via-secondary/5 to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything You Need to{" "}
              <GradientText className="text-secondary">Excel</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our AI tutor provides comprehensive support for your learning
              journey, from basic concepts to advanced topics.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl" />
            <img
              src="/student-using-ai-tutor-on-laptop-with-progress-cha.jpg"
              alt="Student Learning with AI Tutor"
              className="relative rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
