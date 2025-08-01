import Navigation from "@/components/(shared)/Header";
import WeddingGallery from "@/components/WeddingGallery";
import { Camera, ArrowLeft, Share } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero section for gallery page */}
      <section className="pt-20 pb-10 bg-gradient-to-br from-sage-light/20 via-white to-dusty-rose-light/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sage-light/30 text-sage-dark px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Camera className="w-4 h-4" />
              Photo Gallery
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-medium text-primary mb-6">
              Captured
              <span className="block text-sage">Moments</span>
            </h1>

            <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic mb-8">
              A visual journey through our engagement, adventures, and the
              beautiful venue where we'll say "I do."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-sage hover:bg-sage-dark text-white">
                <Share className="w-4 h-4 mr-2" />
                Share Gallery
              </Button>
              <Button
                variant="outline"
                className="border-sage text-sage hover:bg-sage hover:text-white"
              >
                Download Photos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery content */}
      <WeddingGallery />

      {/* Additional gallery sections */}
      <section className="py-16 bg-champagne">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-playfair text-3xl font-semibold text-primary mb-6">
              More Photos Coming Soon!
            </h3>
            <p className="text-muted-foreground mb-8">
              After our wedding day, we'll be adding all the beautiful moments
              captured by our photographer and shared by our friends and family.
            </p>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="font-playfair text-xl font-semibold text-primary mb-4">
                Share Your Photos
              </h4>
              <p className="text-muted-foreground mb-6">
                Help us capture every moment! Use{" "}
                <span className="font-semibold text-sage-dark">
                  #EmmaAndJamesWedding
                </span>{" "}
                to share your photos from our special day.
              </p>
              <div className="flex justify-center space-x-4 text-3xl">
                <span>📸</span>
                <span>💚</span>
                <span>🌿</span>
                <span>💕</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-playfair text-2xl font-semibold text-primary mb-8">
            Explore More
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-sage hover:bg-sage-dark text-white">
              <Link href="/story">Read Our Story</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white"
            >
              <Link href="/rsvp">RSVP Now</Link>
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
