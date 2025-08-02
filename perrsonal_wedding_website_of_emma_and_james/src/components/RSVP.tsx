"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Users, Send } from "lucide-react";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    dietaryRestrictions: "",
    message: "",
  });

  const weddingParty = [
    {
      role: "Maid of Honor",
      name: "Sarah Chen",
      relationship: "Sister & Best Friend",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format&q=80&crop=face",
    },
    {
      role: "Best Man",
      name: "Michael Johnson",
      relationship: "Brother & Adventure Buddy",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format&q=80&crop=face",
    },
    {
      role: "Bridesmaid",
      name: "Lisa Martinez",
      relationship: "College Roommate",
      image:
        "https://images.unsplash.com/photo-1556575533-7190b053c299?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBtb2RlbCUyMHBpYyUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      role: "Groomsman",
      name: "David Park",
      relationship: "Work Colleague & Friend",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format&q=80&crop=face",
    },
    {
      role: "Bridesmaid",
      name: "Rachel Green",
      relationship: "Childhood Friend",
      image:
        "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=200&h=200&fit=crop&auto=format&q=80&crop=face",
    },
    {
      role: "Groomsman",
      name: "Tom Wilson",
      relationship: "Hiking Partner",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format&q=80&crop=face",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("RSVP submitted:", formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-primary mb-6">
            RSVP
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto">
            We can&apos;t wait to celebrate with you! Please let us know if you&apos;ll be
            joining us for our special day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* RSVP Form */}
          <div className="bg-cream rounded-3xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-light rounded-full mb-4">
                <Send className="w-8 h-8 text-sage-dark" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">
                Please Respond by May 1st, 2024
              </h3>
              <p className="text-muted-foreground">
                We&apos;re excited to celebrate with you!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-sage/20 focus:border-sage focus:ring-2 focus:ring-sage/20"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-sage/20 focus:border-sage focus:ring-2 focus:ring-sage/20"
                  placeholder="Enter your email"
                />
              </div>

              {/* Attending */}
              <div>
                <label className="block text-sm font-medium text-primary mb-3">
                  Will you be attending? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                      formData.attending === "yes"
                        ? "border-sage bg-sage-light/20"
                        : "border-sage/20 hover:border-sage/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === "yes"}
                      onChange={(e) =>
                        setFormData({ ...formData, attending: e.target.value })
                      }
                      className="sr-only"
                    />
                    <div className="text-center">
                      <Heart className="w-6 h-6 mx-auto mb-2 text-sage" />
                      <div className="font-medium text-primary">
                        Joyfully Accept
                      </div>
                    </div>
                  </label>
                  <label
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                      formData.attending === "no"
                        ? "border-sage bg-sage-light/20"
                        : "border-sage/20 hover:border-sage/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === "no"}
                      onChange={(e) =>
                        setFormData({ ...formData, attending: e.target.value })
                      }
                      className="sr-only"
                    />
                    <div className="text-center">
                      <div className="w-6 h-6 mx-auto mb-2 border-2 border-sage rounded-full"></div>
                      <div className="font-medium text-primary">
                        Regretfully Decline
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Number of guests */}
              {formData.attending === "yes" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-sage/20 focus:border-sage focus:ring-2 focus:ring-sage/20"
                    >
                      <option value="1">Just me</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                    </select>
                  </div>

                  {/* Dietary restrictions */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Dietary Restrictions
                    </label>
                    <Input
                      type="text"
                      value={formData.dietaryRestrictions}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dietaryRestrictions: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-sage/20 focus:border-sage focus:ring-2 focus:ring-sage/20"
                      placeholder="Please let us know of any dietary needs"
                    />
                  </div>
                </>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Message for the Couple
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-sage/20 focus:border-sage focus:ring-2 focus:ring-sage/20 resize-none"
                  placeholder="Share your well wishes or favorite memory with us!"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-sage hover:bg-sage-dark text-white py-4 rounded-xl font-medium text-lg"
              >
                Send RSVP
              </Button>
            </form>
          </div>

          {/* Wedding Party */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dusty-rose-light rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">
                Our Wedding Party
              </h3>
              <p className="text-muted-foreground">
                The special people standing by our side
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {weddingParty.map((person, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4">
                    <Image
                      width={300}
                      height={300}
                      src={person.image}
                      alt={person.name}
                      className="w-24 h-24 object-cover rounded-full mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-sage rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>
                  <h4 className="font-playfair font-semibold text-primary mb-1">
                    {person.name}
                  </h4>
                  <p className="text-sm text-sage-dark font-medium mb-1">
                    {person.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {person.relationship}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-12 bg-sage-light/20 rounded-2xl p-6 text-center">
              <h4 className="font-playfair text-lg font-semibold text-primary mb-2">
                Questions?
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Feel free to reach out if you have any questions about the
                wedding or need assistance with travel arrangements.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <strong>Emma:</strong> emma@email.com
                </p>
                <p className="text-muted-foreground">
                  <strong>James:</strong> james@email.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
