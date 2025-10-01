"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Shield,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const values = [
  {
    icon: Heart,
    title: "Authentic Connections",
    description:
      "We believe in fostering genuine relationships built on trust, compatibility, and shared values.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description:
      "Your personal information is protected with industry-leading security measures and privacy controls.",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description:
      "We welcome people from all backgrounds, cultures, and walks of life to find their perfect match.",
  },
  {
    icon: Award,
    title: "Proven Success",
    description:
      "With over 10 million successful matches, our track record speaks for itself.",
  },
];

const stats = [
  { number: "2018", label: "Founded" },
  { number: "50M+", label: "Members Worldwide" },
  { number: "195", label: "Countries" },
  { number: "10M+", label: "Success Stories" },
];

const achievements = [
  "Best Dating App 2023 - Tech Awards",
  "Most Trusted Platform - User Choice Awards",
  "Innovation in AI Matching - Dating Industry Awards",
  "Top Rated App - App Store & Google Play",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        // ease: "easeOut",
        ease: [0.16, 1, 0.3, 1] as const, // ✅ cubic bezier for "easeOut"
      },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              About SoulMate
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              We&apos;re on a mission to help people find meaningful, lasting
              relationships through innovative technology and a deep
              understanding of human connection.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Story Content */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2018 by a team of relationship experts, data
                  scientists, and technology innovators, SoulMate was born from
                  a simple belief: everyone deserves to find their perfect
                  match.
                </p>
                <p>
                  We saw that traditional dating apps focused on superficial
                  connections, so we set out to create something different.
                  Using advanced AI and psychological compatibility algorithms,
                  we help people connect on a deeper level.
                </p>
                <p>
                  Today, we&apos;re proud to have facilitated over 10 million
                  meaningful relationships across 195 countries, with thousands
                  of new success stories added every month.
                </p>
              </div>

              <div className="mt-8">
                <Button className="group">
                  Learn More About Our Mission
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div variants={itemVariants}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/diverse-team-of-professionals-working-together-in-.jpg"
                  alt="SoulMate team working together"
                  width={600}
                  height={500}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground text-center mb-12">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="bg-primary/5 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground text-center mb-12">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground text-center mb-12">
              Recognition & Awards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-card border border-border/50 rounded-lg p-4 shadow-sm"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
