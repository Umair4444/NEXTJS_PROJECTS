"use client";

import Image from "next/image";
import { Sparkles, HeartHandshake, PartyPopper, Landmark } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-playfair text-primary mb-4">
          About Us
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto italic mb-12">
          We specialize in crafting unforgettable weddings and events — from
          intimate gatherings to grand celebrations.
        </p>

        {/* Mission Statement */}
        <div className="bg-sage-light/10 p-6 md:p-10 rounded-2xl mb-16">
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Our mission is to turn your vision into reality with elegance,
            personalization, and stress-free planning. Whether it’s a fairy-tale
            wedding or a lively birthday bash, we make every moment magical.
          </p>
        </div>

        {/* Services: Types of Weddings & Events */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          <EventCard
            icon={<HeartHandshake className="w-8 h-8 text-sage-dark" />}
            title="Traditional Weddings"
            description="Elegant ceremonies rooted in cultural rituals and timeless customs — whether it's a Pakistani, Indian, or Western style wedding."
          />
          <EventCard
            icon={<Sparkles className="w-8 h-8 text-sage-dark" />}
            title="Destination Weddings"
            description="Dreamy weddings in exotic locations — beaches, mountains, or heritage venues — planned from start to finish."
          />
          <EventCard
            icon={<PartyPopper className="w-8 h-8 text-sage-dark" />}
            title="Birthday & Baby Showers"
            description="Celebrate life's milestones with themed birthday parties and joyful baby showers customized to your style."
          />
          <EventCard
            icon={<Landmark className="w-8 h-8 text-sage-dark" />}
            title="Corporate Events"
            description="From formal conferences to elegant galas, we design and manage professional events with flawless execution."
          />
          <EventCard
            icon={<HeartHandshake className="w-8 h-8 text-sage-dark" />}
            title="Engagements & Mehndi"
            description="Colorful, musical, and vibrant — we create unforgettable pre-wedding festivities that reflect your heritage and love."
          />
          <EventCard
            icon={<Sparkles className="w-8 h-8 text-sage-dark" />}
            title="Custom Events"
            description="No two events are the same. Let us tailor an experience that reflects your story, taste, and budget."
          />
        </div>

        {/* Team / Final Statement */}
        <div className="mt-20 max-w-3xl mx-auto text-muted-foreground">
          <p className="italic text-lg">
            “We don’t just plan events — we create moments that become lifelong
            memories.”
          </p>
          <p className="mt-2 font-medium text-sage-dark">
            — The EverAfter Team
          </p>
        </div>
      </div>
    </section>
  );
}

// Reusable card component
function EventCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-sage-light hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
