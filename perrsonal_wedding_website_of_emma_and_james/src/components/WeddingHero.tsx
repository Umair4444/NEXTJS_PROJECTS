"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Heart } from "lucide-react";
import Link from "next/link";

export default function WeddingHero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-15T16:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cream via-warm-beige to-champagne">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* bubbles design */}
        <div className="absolute top-20 left-10 opacity-10 rotate-12">
          <svg
            width="120"
            height="180"
            viewBox="0 0 120 180"
            className="text-sage-dark"
          >
            <path
              d="M60 10C45 10 35 25 35 40C35 55 45 70 60 70C75 70 85 55 85 40C85 25 75 10 60 10Z
              M60 80C45 80 35 95 35 110C35 125 45 140 60 140C75 140 85 125 85 110C85 95 75 80 60 80Z
              M60 150C45 150 35 165 35 180C35 195 45 210 60 210C75 210 85 195 85 180C85 165 75 150 60 150Z"
              fill="currentColor"
            />
          </svg>
        </div>
        {/* diamond design */}
        <div className="absolute bottom-20 right-10 opacity-10 -rotate-12">
          <svg
            width="100"
            height="150"
            viewBox="0 0 100 150"
            className="text-forest-green"
          >
            <path
              d="M50 10L30 30L50 50L70 30L50 10Z
              M50 60L30 80L50 100L70 80L50 60Z
              M50 110L30 130L50 150L70 130L50 110Z"
              fill="currentColor"
            />
          </svg>
        </div>
        {/* heart design */}
        <div className="absolute top-1/4 right-1/4 opacity-20 animate-pulse">
          <Heart className="w-8 h-8 text-dusty-rose fill-current" />
        </div>

        <div
          className="absolute bottom-1/3 left-1/4 opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <Heart className="w-6 h-6 text-dusty-rose fill-current" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sage-light/30 text-sage-dark px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Calendar className="w-4 h-4" />
            Save the Date
          </div>

          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-medium text-primary leading-tight mb-6">
            Emma
            <span className="block font-cormorant text-5xl md:text-6xl lg:text-7xl italic text-sage-dark mt-2 mb-4">
              &
            </span>
            James
          </h1>

          <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic mb-8 max-w-2xl mx-auto">
            &quos;Two hearts, one soul, forever intertwined in nature&apos;s
            embrace&quos;
          </p>

          {/* Wedding details */}
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl border border-white/40 mb-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-light rounded-full mb-4">
                  <Calendar className="w-8 h-8 text-sage-dark" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                  Wedding Date
                </h3>
                <p className="text-muted-foreground">
                  Saturday, Dec 25th, 2025
                </p>
                <p className="text-sm text-muted-foreground">4:00 PM</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-dusty-rose-light rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                  Venue
                </h3>
                <p className="text-muted-foreground">Willow Creek Gardens</p>
                <p className="text-sm text-muted-foreground">
                  Meadowbrook, California
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-sage hover:bg-sage-dark text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              <Link href="/rsvp">RSVP Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300"
              size="lg"
            >
              <Link href="/story">View Our Story</Link>
            </Button>
          </div>

          {/* Countdown */}
          <div className="mt-12 text-center">
            <p className="font-cormorant text-lg text-muted-foreground mb-4">
              Counting down to our special day
            </p>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-white/30"
                >
                  <div className="font-playfair text-2xl md:text-3xl font-semibold text-primary">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sage rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sage rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
