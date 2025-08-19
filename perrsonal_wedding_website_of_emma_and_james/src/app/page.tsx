import RSVP from "@/components/RSVP";
import { Button } from "@/components/ui/button";
import WeddingDetails from "@/components/WeddingDetails";
import WeddingGallery from "@/components/WeddingGallery";
import WeddingHero from "@/components/WeddingHero";
import WeddingStory from "@/components/WeddingStory";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <WeddingHero />
      <WeddingStory />
      <WeddingGallery />
      <WeddingDetails />
      <RSVP />
      {/* Back to home */}
      <div className="fixed bottom-6 left-6">
        <Button asChild variant="outline" size="sm" className="rounded-full">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
