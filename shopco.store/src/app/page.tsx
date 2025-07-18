import HeroSection from "@/components/(homepage)/HeroSection";
import BrandLogos from "@/components/(homepage)/BrandLogos";
import NewArrival from "@/components/(homepage)/NewArrival";
import TopSelling from "@/components/(homepage)/TopSelling";
import BrowseByStyle from "@/components/(homepage)/BrowseByStyle";
import CustomerReviews from "@/components/(homepage)/CustomerReviews";
import Stats from "@/components/(homepage)/Stats";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 overflow-hidden">
        <HeroSection />

        {/* Stats Section */}
        <Stats />
      </section>

      {/* Brand Logos */}
      <section className="hidden md:block bg-black py-12">
        <BrandLogos />
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <NewArrival />
      </section>

      <hr className="max-w-7xl mx-auto border-gray-200" />

      {/* Top Selling */}
      <section className="py-16">
        <TopSelling />
      </section>

      {/* Browse by Style */}
      <section className="py-16">
        <BrowseByStyle />
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <CustomerReviews />
      </section>
    </div>
  );
}
