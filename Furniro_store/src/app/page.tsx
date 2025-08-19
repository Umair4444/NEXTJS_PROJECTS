import Link from "next/link";
import Newsletter from "@/components/(HomePage)/NewsletterSection";
import Inspiration from "@/components/(HomePage)/InspirationSection";
import FeatureProducts from "@/components/(HomePage)/FeatureProductsSection";
import BrowseTheRange from "@/components/(HomePage)/BrowseTheRangeSection";
import HeroCard from "@/components/(HomePage)/HeroCard";
import Stats from "@/components/(HomePage)/StatsSection";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=1080&fit=crop&crop=center')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

        {/* Hero Card */}
        <HeroCard />

        {/* Scroll Indicator */}
        <div className="absolute text-black bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="/shop">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Browse Range Section */}
      <BrowseTheRange />

      {/* Featured Products */}
      <FeatureProducts />

      {/* Inspiration Section */}
      <Inspiration />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
