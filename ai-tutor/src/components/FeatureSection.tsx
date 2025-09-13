"use client";

import React from "react";
import { AnimatedCard, AnimatedCardHeader } from "./ui/animated-card";
import { GradientText } from "./ui/gradient-text";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

// TypeScript type for a feature
export interface Feature {
  title: string;
  description: string;
  icon: React.ReactElement;
}

interface FeatureSectionProps {
  features: Feature[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/5">
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
              Why Choose Our{" "}
              <GradientText className="text-secondary">AI Tutor</GradientText>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the features that make our AI tutor the perfect learning
              companion
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={feature.title} delay={index * 0.1}>
              <AnimatedCardHeader
                title={feature.title}
                description={feature.description}
                icon={feature.icon} // Now works correctly
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
