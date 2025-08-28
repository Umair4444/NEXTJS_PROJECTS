import FeatureSection from "@/components/(About)/FeatureSection";
import CTASection from "@/components/(About)/CTASection";
import TimelineSection from "@/components/(About)/TimelineSection";
import TestimonialSection from "@/components/(About)/TestimonialsSection";
import TeamSection from "@/components/(About)/TeamSection";
import ValueSection from "@/components/(About)/ValueSection";
import StorySection from "@/components/(About)/StorySection";
import StatsSection from "@/components/(About)/StatsSection";
import HeroSection from "@/components/(About)/HeroSection";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Our Story Section */}
      <StorySection />

      {/* Values Section */}
      <ValueSection />

      {/* Team Section */}
      <TeamSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <CTASection />

      {/* Features Section */}
      <FeatureSection />
    </div>
  );
}
