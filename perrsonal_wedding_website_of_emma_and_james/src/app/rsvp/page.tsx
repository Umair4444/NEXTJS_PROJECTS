import Navigation from "@/components/(shared)/Header";
import RSVP from "@/components/RSVP";
import { Heart, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RSVPPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero section for RSVP page */}
      <section className="pt-20 pb-10 bg-gradient-to-br from-dusty-rose-light/20 via-white to-sage-light/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sage-light/30 text-sage-dark px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Heart className="w-4 h-4 fill-current" />
              Please Respond
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-medium text-primary mb-6">
              Will You
              <span className="block text-sage">Join Us?</span>
            </h1>

            <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic mb-8">
              Your presence would make our special day even more meaningful.
              Please let us know if you can celebrate with us.
            </p>

            {/* RSVP deadline reminder */}
            <div className="bg-sage-light/20 rounded-2xl p-6 max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-sage" />
                <span className="font-playfair text-lg font-semibold text-primary">
                  RSVP Deadline
                </span>
              </div>
              <p className="text-sage-dark font-medium">May 1st, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP content */}
      <RSVP />

      {/* FAQ section */}
      <section className="py-16 bg-champagne">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-playfair text-3xl font-semibold text-primary text-center mb-12">
              RSVP Questions?
            </h3>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-playfair text-lg font-semibold text-primary mb-2">
                  Can I bring a plus-one?
                </h4>
                <p className="text-muted-foreground">
                  Plus-ones are welcome if specifically mentioned on your
                  invitation. If you're unsure, please reach out to us directly.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-playfair text-lg font-semibold text-primary mb-2">
                  What if I have dietary restrictions?
                </h4>
                <p className="text-muted-foreground">
                  Please let us know in the RSVP form above. Our caterer can
                  accommodate most dietary needs including vegetarian, vegan,
                  gluten-free, and common allergies.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-playfair text-lg font-semibold text-primary mb-2">
                  Can I change my RSVP after submitting?
                </h4>
                <p className="text-muted-foreground">
                  Of course! Just send us an email or give us a call. We
                  understand that plans can change.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-playfair text-lg font-semibold text-primary mb-2">
                  What if I can't make it?
                </h4>
                <p className="text-muted-foreground">
                  We'll miss you, but we understand! We hope to celebrate with
                  you in another way soon. Please still RSVP so we know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-8">
              Don't hesitate to reach out! We're here to help make sure you have
              everything you need for our special day.
            </p>
            <div className="bg-sage-light/10 rounded-2xl p-6">
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Emma:</strong> emma.rose@email.com • (555) 123-4567
                </p>
                <p>
                  <strong>James:</strong> james.alexander@email.com • (555)
                  987-6543
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other sections */}
      <section className="py-16 bg-sage-light/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-playfair text-2xl font-semibold text-primary mb-8">
            Learn More About Our Day
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-sage hover:bg-sage-dark text-white">
              <Link href="/details">Wedding Details</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white"
            >
              <Link href="/story">Our Love Story</Link>
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
