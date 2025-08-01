import RSVP from "@/components/RSVP";
import WeddingDetails from "@/components/WeddingDetails";
import WeddingGallery from "@/components/WeddingGallery";
import WeddingHero from "@/components/WeddingHero";
import WeddingStory from "@/components/WeddingStory";

export default function Home() {
  return (
    <div className="bg-background">
      <WeddingHero />
      <WeddingStory />
      <WeddingGallery />
      <WeddingDetails />
      <RSVP />
    </div>
  );
}
