"use client";

import FloatingWindow from "@/components/FloatingWindow";
import Stats from "@/components/(HomePage)/StatsSection";
import ContactForm from "@/components/(Contact)/ContactForm";
import FAQ from "@/components/(Contact)/FAQ";
import Map from "@/components/(Contact)/Map";
import CTA from "@/components/(Contact)/CTA";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        {/* Floating Elements */}
        <div className="absolute top-16 left-20 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
    
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
            <span className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-md text-white rounded-full text-sm font-semibold uppercase tracking-wider border border-white/20 mb-2">
              Get In Touch
            </span>
            <FloatingWindow
              breadcrumbs={[
                { label: "Home", href: "/home" },
                { label: "Contact", href: "/contact" },
              ]}
              description=" Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible"
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <Stats />

      {/* Contact Information & Form Section */}
      <ContactForm />

      {/* FAQ Section */}
      <FAQ />

      {/* Map Section */}
      <Map />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
