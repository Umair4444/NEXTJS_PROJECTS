"use client";

import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactWeddingPlanner() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    // Optionally send to your backend/API/email service
    reset();
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair text-primary mb-4">
            Contact Our Wedding Planner
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions or ideas? Reach out and let’s make magic happen!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-sage-dark mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>weddingplanner@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-sage-dark mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-sage-dark mt-1" />
              <div>
                <h4 className="font-semibold">Office</h4>
                <p>123 Floral Avenue, Blissville, CA</p>
              </div>
            </div>

            <div className="bg-sage-light/10 p-4 rounded-xl">
              <p className="italic">
                “We believe every wedding should feel like a fairytale. Let’s
                craft yours.”
              </p>
              <p className="mt-2 font-medium text-sage-dark">
                — Julie, Planner
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full border border-muted px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              />
              {errors.name?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name?.message as string}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border border-muted px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              />
              {errors.email?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows={5}
                {...register("message", { required: "Message is required" })}
                className="w-full border border-muted px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              />
              {errors.message?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message as string}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-sage-dark hover:bg-sage text-white py-3 px-6 rounded-lg transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
