"use client";

import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Variants, easeOut } from "framer-motion";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Build a comprehensive profile with photos, preferences, and personality insights. Our verification process ensures authenticity.",
  },
  {
    step: "02",
    icon: Search,
    title: "Get Smart Matches",
    description:
      "Our AI algorithm analyzes your preferences, values, and compatibility factors to suggest the most suitable matches.",
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "Start Conversations",
    description:
      "Connect with your matches through secure messaging, video calls, and AI-powered conversation starters.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut, // ✅
      },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut, // ✅
      },
    },
  };

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance"
          >
            How It Works
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            Finding your perfect match is simple with our three-step process
            designed to connect you with compatible partners.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-24 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Step Number and Icon */}
              <motion.div variants={stepVariants} className="flex-shrink-0">
                <div className="relative">
                  <motion.div
                    className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="h-12 w-12 text-primary" />
                  </motion.div>
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.2,
                      duration: 0.5,
                      type: "spring",
                    }}
                  >
                    {step.step}
                  </motion.div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={itemVariants}
                className="flex-1 text-center lg:text-left"
              >
                <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ delay: 1 + index * 0.3, duration: 0.8 }}
                  style={{
                    top: `${(index + 1) * 400}px`,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
