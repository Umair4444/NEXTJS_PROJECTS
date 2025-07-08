import Image from "next/image"
import { Users, Award, Globe, Heart, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { number: "200+", label: "International Brands" },
    { number: "2,000+", label: "High-Quality Products" },
    { number: "30,000+", label: "Happy Customers" },
    { number: "50+", label: "Countries Served" },
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description:
        "We put our customers at the heart of everything we do, ensuring exceptional service and satisfaction.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description:
        "We source only the finest materials and work with trusted manufacturers to deliver premium quality.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Connecting fashion lovers worldwide with carefully curated styles from international brands.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly evolving our platform and services to provide the best shopping experience.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      description: "Fashion industry veteran with 15+ years of experience in retail and e-commerce.",
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "/placeholder.svg?height=300&width=300",
      description: "Creative director passionate about bringing the latest fashion trends to our customers.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      description: "Operations expert ensuring smooth delivery and customer satisfaction worldwide.",
    },
    {
      name: "David Kim",
      role: "Head of Technology",
      image: "/placeholder.svg?height=300&width=300",
      description: "Tech innovator building the future of online fashion retail.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About SHOP.CO</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re more than just a fashion retailer. We&apos;re a community of style enthusiasts dedicated to helping you
              express your unique personality through carefully curated clothing that makes you feel confident and
              authentic.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, SHOP.CO began as a simple idea: to make high-quality, stylish clothing accessible to
                  everyone, everywhere. What started as a small online boutique has grown into a global fashion
                  destination trusted by thousands of customers worldwide.
                </p>
                <p>
                  Our journey started when our founder, Sarah Johnson, noticed a gap in the market for affordable yet
                  premium fashion. With her background in fashion retail and a passion for helping people express their
                  individuality, she set out to create a platform that would democratize style.
                </p>
                <p>
                  Today, we partner with over 200 international brands and designers to bring you the latest trends and
                  timeless classics. Every piece in our collection is carefully selected to ensure it meets our high
                  standards for quality, style, and value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Our story"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving the future of fashion retail through innovation, sustainability, and customer-centricity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower individuals to express their unique style through high-quality, accessible fashion while
                  building a sustainable and inclusive fashion ecosystem that benefits everyone in our community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the world&apos;s most trusted and beloved fashion destination, where style meets sustainability,
                  and where every customer feels confident, valued, and inspired to be their authentic self.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind SHOP.CO who work tirelessly to bring you the best fashion experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <div className="aspect-square bg-gray-100">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sustainability"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Committed to Sustainability</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We believe fashion should be beautiful, not just in appearance, but in its impact on the world. That&apos;s
                  why we&apos;re committed to sustainable practices throughout our supply chain.
                </p>
                <p>
                  From partnering with eco-conscious brands to implementing carbon-neutral shipping options, we&apos;re
                  constantly working to reduce our environmental footprint while maintaining the quality and style you
                  love.
                </p>
                <ul className="space-y-2 mt-6">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Eco-friendly packaging materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Carbon-neutral shipping options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Partnerships with sustainable brands</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Clothing recycling programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Fashion Journey</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover your unique style with our curated collection of premium fashion from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 bg-transparent"
            >
              <Link href="/user">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
