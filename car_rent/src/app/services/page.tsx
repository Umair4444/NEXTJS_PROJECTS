import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import {
  additionalServices,
  benefits,
  mainServices,
  vehicleCategories,
} from "@/lib/servicesData";
import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen mt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white text-brand-orange hover:bg-brand-orange hover:text-white mb-6">
              Our Services
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Comprehensive{" "}
              <span className="text-brand-orange">Car Rental</span> Solutions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              From daily rentals to corporate solutions, we offer a complete
              range of car rental services tailored to meet your specific
              transportation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
              Our <span className="text-brand-blue">Rental Services</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of rental services designed
              for every occasion and need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="relative hover:shadow-xl transition-shadow border-0 overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-brand-blue text-white hover:bg-brand-orange hover:text-white">
                      Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        <span className="text-brand-gray-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xl font-bold text-brand-orange text-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <Button className="w-full absolute bottom-0 left-0 bg-brand-blue hover:bg-brand-blue/90">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-20 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
              Vehicle <span className="text-brand-blue">Categories</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Explore our diverse fleet of vehicles, from economy cars to luxury
              sedans and SUVs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicleCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow border-0 overflow-hidden"
              >
                <div className="h-48 bg-brand-gray-200 overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-brand-gray-900">
                      {category.category}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-brand-blue border-brand-blue"
                    >
                      {category.priceRange}
                    </Badge>
                  </div>
                  <div className="mb-4">
                    <p className="text-brand-gray-600 text-sm mb-2">
                      Popular models:
                    </p>
                    <p className="text-brand-gray-700 font-medium">
                      {category.vehicles.join(", ")}
                    </p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        <span className="text-brand-gray-600 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  >
                    View {category.category} Cars
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
              Additional <span className="text-brand-blue">Services</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Enhance your rental experience with our comprehensive additional
              services and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-0"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.included.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        <span className="text-brand-gray-700 text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
              Why Choose <span className="text-brand-blue">CarRent</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Experience the CarRent advantage with benefits designed around
              your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
              How It <span className="text-brand-blue">Works</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Renting a car with CarRent is simple and straightforward. Follow
              these easy steps.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Your Car",
                  description:
                    "Browse our fleet and select the perfect vehicle for your needs",
                },
                {
                  step: "2",
                  title: "Book Online",
                  description:
                    "Complete your reservation with our secure online booking system",
                },
                {
                  step: "3",
                  title: "Pick Up",
                  description:
                    "Collect your vehicle from any of our convenient locations",
                },
                {
                  step: "4",
                  title: "Drive & Enjoy",
                  description:
                    "Hit the road and enjoy your journey with complete peace of mind",
                },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-brand-gray-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-brand-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the CarRent difference today. Book your perfect vehicle
            and enjoy a seamless rental experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg">
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-brand-orange hover:bg-white hover:text-white hover:bg-brand-orange px-8 py-3 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
