import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { milestones, stats, team, values } from "@/lib/aboutData";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen mt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white text-brand-orange hover:bg-brand-orange hover:text-white mb-6">
              Our Story
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-brand-orange">CarRent</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              For over 5 years, we&apos;ve been dedicated to providing
              exceptional car rental experiences. Our mission is to make
              transportation accessible, reliable, and enjoyable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <div className="text-3xl font-bold text-brand-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-brand-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-gray-900 mb-6">
                Our <span className="text-brand-blue">Mission</span>
              </h2>
              <p className="text-lg text-brand-gray-600 mb-6 leading-relaxed">
                To revolutionize the car rental industry by providing seamless,
                transparent, and customer-centric transportation solutions. We
                believe everyone deserves access to reliable, well-maintained
                vehicles at fair prices.
              </p>
              <div className="space-y-4">
                {[
                  "Exceptional customer service at every touchpoint",
                  "Transparent pricing with no hidden fees",
                  "Meticulously maintained, safe vehicles",
                  "Sustainable and eco-friendly options",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span className="text-brand-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                width={500}
                height={500}
                src="/placeholder.svg"
                alt="Our Mission"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-orange text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
              Our <span className="text-brand-blue">Values</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment
              to excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-shadow border-0"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-brand-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
              Our <span className="text-brand-blue">Journey</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in car rentals.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                    <p className="text-lg text-brand-gray-700">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
              Meet Our <span className="text-brand-blue">Team</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              The passionate people behind CarRent who make your journey
              exceptional.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-shadow border-0"
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-brand-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-brand-blue font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-brand-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the CarRent Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their
            transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cars"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Our Fleet
            </a>
            <a
              href="/contact"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
