import Navigation from "@/components/(shared)/Header";
import WeddingStory from "@/components/WeddingStory";
import { Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero section for story page */}
      <section className="pt-20 pb-10 bg-gradient-to-br from-cream via-warm-beige to-champagne">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sage-light/30 text-sage-dark px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Heart className="w-4 h-4 fill-current" />
              Our Journey
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-medium text-primary mb-6">
              A Love Story Written
              <span className="block text-sage">in Nature</span>
            </h1>

            <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic">
              From our first meeting to forever together, discover the beautiful
              moments that brought us to this special day.
            </p>
          </div>
        </div>
      </section>

      {/* Story content */}
      <WeddingStory />

      {/* Navigation to other sections */}
      <section className="py-16 bg-sage-light/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-playfair text-2xl font-semibold text-primary mb-8">
            Continue the Journey
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-sage hover:bg-sage-dark text-white">
              <Link href="/gallery">View Our Gallery</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white"
            >
              <Link href="/details">Wedding Details</Link>
            </Button>
          </div>
        </div>
      </section>

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
