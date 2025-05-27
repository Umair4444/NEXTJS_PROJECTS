// import HeroSection from "@/components/extra/Hero-Component";
import AboutUsHeroSection from "@/components/HomePage/About-Us-Component";
import WhyChooseUsComponent from "@/components/HomePage/Why-Choose-Us";
import ChefMenu from "@/components/HomePage/ChefMenu";
import { HeroSection } from "@/components/HomePage/Hero-Section";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div>
        <HeroSection />
        <AboutUsHeroSection />
        <WhyChooseUsComponent />
        <ChefMenu />
      </div>
    </main>
  );
}
