import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
} from "lucide-react";
import {features,services} from '@/lib/services'


export default function ServicesSection() {
  return (
    <section className="py-20 bg-brand-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
            Our <span className="text-brand-blue">Premium Services</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            We provide exceptional car rental services with a commitment to
            quality, safety, and customer satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Stats */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-brand-gray-900 mb-4">
                  Trusted by Thousands of{" "}
                  <span className="text-brand-blue">Happy Customers</span>
                </h3>
                <p className="text-lg text-brand-gray-600">
                  Join thousands of satisfied customers who have experienced our
                  exceptional car rental service. We&apos;re committed to making your
                  journey comfortable and memorable.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-brand-gray-900">
                          {feature.title}
                        </h4>
                        <span className="text-2xl font-bold text-brand-orange">
                          {feature.stat}
                        </span>
                      </div>
                      <p className="text-brand-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-white">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-12 h-12" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">
                      Award Winning Service
                    </h4>
                    <p className="text-brand-blue-50">
                      Recognized as the leading car rental service provider for
                      three consecutive years.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold">5+</div>
                      <div className="text-sm text-brand-blue-50">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm text-brand-blue-50">Vehicles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">20+</div>
                      <div className="text-sm text-brand-blue-50">
                        Locations
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decorations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-orange/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-blue/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
