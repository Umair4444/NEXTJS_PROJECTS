"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import {
  AnimatedCard,
  AnimatedCardHeader,
} from "@/components/ui/animated-card";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { GradientText } from "@/components/ui/gradient-text";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  BarChart3,
  Target,
} from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import BenefitSection from "@/components/BenefitSection";
import FeatureSection from "@/components/FeatureSection";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Learning",
    description:
      "Advanced AI adapts to your learning style and provides personalized explanations.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Interactive Conversations",
    description:
      "Engage in natural conversations with your AI tutor anytime, anywhere.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Progress Tracking",
    description:
      "Monitor your learning journey with detailed analytics and insights.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Goal-Oriented Learning",
    description:
      "Set learning goals and receive customized study plans to achieve them.",
  },
];

const benefits = [
  "24/7 availability for instant help",
  "Personalized learning paths",
  "Multi-subject expertise",
  "Interactive problem solving",
  "Progress analytics",
  "Adaptive difficulty levels",
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    content:
      "This AI tutor helped me understand complex algorithms in ways my textbooks never could. The personalized explanations are incredible!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "High School Student",
    content:
      "I went from struggling with calculus to acing my exams. The AI tutor breaks down problems step by step perfectly.",
    rating: 4,
  },
  {
    name: "Emily Rodriguez",
    role: "Medical Student",
    content:
      "The interactive conversations make studying feel less lonely. It's like having a patient, knowledgeable friend available 24/7.",
    rating: 3,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex items-center justify-center">
        <FloatingNavbar navItems={navItems} />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection features={features} />

      {/* Benefits Section */}
      <BenefitSection benefits={benefits} />

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
