import AboutSection from "@/components/About-Page/AboutSection";
import ContentWriterSection from "@/components/About-Page/ContentWriterSection";
import EditorsSection from "@/components/About-Page/EditorsSection";
import TestimonialsSection from "@/components/About-Page/TestimonialsSection";
import JoinTeamSection from "@/components/About-Page/JoinTeamSection";

export default function AboutPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-20 py-12 space-y-20">
      <AboutSection />
      <ContentWriterSection />
      <EditorsSection />
      <TestimonialsSection />
      <JoinTeamSection />
    </main>
  );
}
