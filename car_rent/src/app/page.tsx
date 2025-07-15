import HeroSection from "@/components/HeroSection";
import FeaturedCars from "@/components/FeaturedCars";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialSection";

export default function Index() {
  return (
    <div className="min-h-screen mt-24">
      <HeroSection />
      <FeaturedCars />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
