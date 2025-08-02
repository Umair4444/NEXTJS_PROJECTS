"use client";

import { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const [countdown, setCountdown] = useState("");

  const weddingDate = new Date("2025-12-15T00:00:00");
  const wedDate = `${weddingDate.getDay()} ${weddingDate.getDate()}  ${weddingDate.getMonth()} ${weddingDate.getFullYear()}  `;
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown("It's the big day! 💍");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setCountdown(`${days} Days ${hours} Hours ${minutes} Minutes`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-forest-green text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-playfair text-3xl font-medium mb-4">
            Emma & James
          </h3>
          <p className="font-cormorant text-lg italic mb-8">
            &quos;Love is the bridge between two hearts, and we can&apos;t wait
            to cross it together with all of you by our side.&quos;
          </p>

          {/* Wedding date & countdown */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="font-playfair text-xl font-semibold mb-2">
              Save the Date
            </div>
            <div className="text-champagne text-lg">
              {wedDate} • Willow Creek Gardens
              <div className="text-white mt-2 font-semibold text-sm">
                Countdown: {countdown}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-sm text-champagne/80 space-y-2">
            <p>For questions or assistance, please contact:</p>
            <p>Emma: emma.rose@email.com • James: james.alexander@email.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-6 text-champagne/80">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Facebook className="w-5 h-5 hover:text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Instagram className="w-5 h-5 hover:text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Twitter className="w-5 h-5 hover:text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="w-5 h-5 hover:text-white" />
            </a>
          </div>

          {/* Footer Note */}
          <p className="mt-6 text-xs text-champagne/60">
            © 2024 Emma & James • Made with 💚 and lots of love
          </p>
        </div>
      </div>
    </footer>
  );
}
