import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { label: "Happy Customers", value: "50K+", icon: Users },
    { label: "Products Sold", value: "100K+", icon: Target },
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "5-Star Reviews", value: "25K+", icon: Heart },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Passionate about creating exceptional shopping experiences for our customers.",
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Dedicated to sourcing the highest quality products at competitive prices.",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Committed to ensuring every customer has an amazing experience with us.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ShopHub</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We&apos;re passionate about bringing you the best products at unbeatable
            prices, with exceptional customer service that makes shopping a joy.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg">
                How we started and where we&apos;re going
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Founded on Quality & Trust
                </h3>
                <p className="text-gray-600 mb-6">
                  ShopHub was founded in 2014 with a simple mission: to make
                  quality products accessible to everyone. What started as a
                  small online store has grown into a trusted marketplace
                  serving customers worldwide.
                </p>
                <p className="text-gray-600 mb-6">
                  We believe that shopping should be easy, enjoyable, and
                  trustworthy. That&apos;s why we carefully curate every product in
                  our catalog and work directly with manufacturers to ensure the
                  best prices and quality.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Quality First</Badge>
                  <Badge variant="secondary">Customer Focused</Badge>
                  <Badge variant="secondary">Fast Shipping</Badge>
                  <Badge variant="secondary">Secure Shopping</Badge>
                </div>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src="/placeholder.svg?height=500&width=500"
                  alt="Our warehouse"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We&apos;re driven by core values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quality First
                </h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every product is carefully
                  selected and tested to meet our high standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Customer Centric
                </h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We listen,
                  adapt, and continuously improve based on feedback.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We believe in honest business practices, transparent pricing,
                  and building long-term relationships with our customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg">The people behind ShopHub</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gray-100 rounded-full overflow-hidden mb-4 mx-auto w-32 h-32">
                    <Image
                      width={500}
                      height={500}
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
