"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Car,
  Headphones,
} from "lucide-react";
import { contactInfo, faqs, locations } from "@/lib/contactData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen mt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white text-brand-orange hover:bg-brand-orange hover:text-white mb-6">
              Get In Touch
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Contact <span className="text-brand-orange">CarRent</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Have questions? Need assistance? Our friendly team is here to help
              you 24/7. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-shadow border-0"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-brand-gray-700 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-brand-gray-600 text-sm">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-6">
                Send us a <span className="text-brand-blue">Message</span>
              </h2>
              <p className="text-brand-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-green-800 font-medium">
                      Message sent successfully!
                    </p>
                    <p className="text-green-700 text-sm">
                      We&apos;ll get back to you within 2 hours.
                    </p>
                  </div>
                </div>
              )}

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="booking">Booking Assistance</option>
                          <option value="support">Customer Support</option>
                          <option value="corporate">Corporate Rentals</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-3 text-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Quick Actions */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-gray-900 mb-6">
                  Find Us
                </h3>
                <Card className="border-0 shadow-xl overflow-hidden">
                  <div className="h-64 bg-brand-gray-200 flex items-center justify-center">
                    <div className="text-center text-brand-gray-600">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Google Maps integration</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-2xl font-bold text-brand-gray-900 mb-6">
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                          <Car className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-brand-gray-900">
                            Emergency Roadside
                          </h4>
                          <p className="text-brand-gray-600 text-sm">
                            24/7 roadside assistance
                          </p>
                        </div>
                        <Button className="bg-brand-orange hover:bg-brand-orange/90">
                          Call Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                          <MessageCircle className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-brand-gray-900">
                            Live Chat
                          </h4>
                          <p className="text-brand-gray-600 text-sm">
                            Chat with our team
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                        >
                          Start Chat
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                          <Headphones className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-brand-gray-900">
                            Customer Support
                          </h4>
                          <p className="text-brand-gray-600 text-sm">
                            General assistance
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                        >
                          +1 (555) 123-4567
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
              Our <span className="text-brand-blue">Locations</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Visit any of our convenient locations for pickup and drop-off
              services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow border-0"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray-900 mb-4">
                    {location.name}
                  </h3>
                  <div className="space-y-3 text-brand-gray-600">
                    <p>{location.address}</p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {location.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {location.hours}
                    </p>
                  </div>
                  <Button
                    className="w-full mt-6 bg-brand-blue hover:bg-brand-blue/90"
                    variant="outline"
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="text-brand-blue">Questions</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-brand-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-brand-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-brand-gray-600 mb-4">
              Still have questions? We&apos;re here to help!
            </p>
            <Button className="bg-brand-blue hover:bg-brand-blue/90">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
