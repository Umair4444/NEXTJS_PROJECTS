import WeddingDetails from "@/components/WeddingDetails";
import { MapPin, ArrowLeft, Download, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DetailsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section for details page */}
      <section className="pt-20 pb-10 bg-gradient-to-br from-champagne via-cream to-warm-beige">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sage-light/30 text-sage-dark px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Calendar className="w-4 h-4" />
              Wedding Day
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-medium text-primary mb-6">
              All the
              <span className="block text-sage">Details</span>
            </h1>

            <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic mb-8">
              Everything you need to know to celebrate with us on our special
              day.
            </p>

            {/* Quick info cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                <Calendar className="w-8 h-8 text-sage mx-auto mb-3" />
                <div className="font-playfair text-lg font-semibold text-primary">
                  June 15th, 2024
                </div>
                <div className="text-sm text-muted-foreground">4:00 PM</div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                <div className="font-playfair text-lg font-semibold text-primary">
                  Willow Creek Gardens
                </div>
                <div className="text-sm text-muted-foreground">
                  Meadowbrook, CA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details content */}
      <WeddingDetails />

      {/* Additional information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl font-semibold text-primary text-center mb-12">
              Additional Information
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Dress Code */}
              <div className="bg-sage-light/10 rounded-2xl p-8">
                <h4 className="font-playfair text-xl font-semibold text-primary mb-4">
                  Dress Code
                </h4>
                <p className="text-muted-foreground mb-4">
                  We suggest cocktail attire in earthy, natural tones that
                  complement our garden setting. Think flowing fabrics, florals,
                  and comfortable shoes for outdoor celebration.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Colors we love:</strong> Sage green, dusty rose,
                    cream, terracotta
                  </p>
                  <p>
                    <strong>Avoid:</strong> White, ivory, and bright neon colors
                  </p>
                  <p>
                    <strong>Shoes:</strong> Consider block heels or flats for
                    grass
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-dusty-rose-light/10 rounded-2xl p-8">
                <h4 className="font-playfair text-xl font-semibold text-primary mb-4">
                  Day Timeline
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Guest arrival</span>
                    <span className="font-medium">3:45 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Ceremony begins
                    </span>
                    <span className="font-medium">4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cocktail hour</span>
                    <span className="font-medium">4:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Reception dinner
                    </span>
                    <span className="font-medium">6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Dancing & celebration
                    </span>
                    <span className="font-medium">8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last dance</span>
                    <span className="font-medium">11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download info */}
            <div className="text-center mt-12">
              <Button className="bg-sage hover:bg-sage-dark text-white">
                <Download className="w-4 h-4 mr-2" />
                Download Wedding Guide PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other sections */}
      <section className="py-16 bg-champagne">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-playfair text-2xl font-semibold text-primary mb-8">
            Ready to Celebrate?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-sage hover:bg-sage-dark text-white">
              <Link href="/rsvp">RSVP Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white"
            >
              <Link href="/gallery">View Gallery</Link>
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
