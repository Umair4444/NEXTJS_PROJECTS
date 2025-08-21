import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Leaf,
  Heart,
  ArrowRight,
  Quote,
  Star,
  Truck,
  Shield,
  Globe,
} from "lucide-react";
import {
  milestones,
  teamMembers,
  testimonials,
  values,
} from "@/lib/mockDataAbout";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 left-16 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative container mx-auto px-6 min-h-screen flex items-center">
          <div className="max-w-3xl">
            <div className="space-y-8">
              <span className="inline-block px-6 py-3 bg-primary/10 backdrop-blur-md text-primary rounded-full text-sm font-semibold uppercase tracking-wider border border-primary/20">
                Our Story
              </span>

              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                Crafting Dreams
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Since 2010
                </span>
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                From a small workshop to a trusted brand, we've been
                transforming houses into homes with furniture that combines
                timeless design, exceptional quality, and sustainable practices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-xl"
                >
                  <Link href="/shop" className="flex items-center">
                    Our Collection
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-foreground"
                >
                  Watch Our Story
                </Button>
              </div>

              <nav className="text-sm text-white/80 mt-8">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span className="mx-2">›</span>
                <span className="text-white">About</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/20 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                number: "15+",
                label: "Years of Excellence",
                color: "text-amber-500",
              },
              {
                icon: Users,
                number: "10K+",
                label: "Happy Customers",
                color: "text-blue-500",
              },
              {
                icon: Globe,
                number: "50+",
                label: "Cities Served",
                color: "text-green-500",
              },
              {
                icon: Star,
                number: "4.9",
                label: "Average Rating",
                color: "text-yellow-500",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
                  The Beginning
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  A Vision Born from Passion
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2010, Furniro began as a small workshop with a
                    big dream: to create furniture that combines timeless design
                    with modern functionality. What started as a passion project
                    has grown into a trusted brand that furnishes homes across
                    the country.
                  </p>
                  <p>
                    Our commitment to quality craftsmanship and sustainable
                    practices has earned us recognition in the industry and,
                    more importantly, the trust of thousands of satisfied
                    customers who call our pieces part of their daily lives.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-muted-foreground font-medium">
                  Rated 4.9/5 by 10,000+ customers
                </span>
              </div>

              <Button size="lg" className="group shadow-lg">
                <Link href="/shop" className="flex items-center">
                  Explore Our Journey
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=400&fit=crop"
                  alt="Furniro workshop"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=400&fit=crop"
                  alt="Furniro products"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl mt-8"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-card p-8 rounded-2xl shadow-2xl border border-border">
                <p className="text-3xl font-bold text-foreground">10,000+</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Happy Customers Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
              Our Values
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our values guide every decision we make, from the materials we
              source to the way we treat our customers and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div
                    className={`mx-auto w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
              Our Team
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet the People Behind Furniro
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our passionate team of designers, craftspeople, and customer
              advocates work together to bring you exceptional furniture
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold text-lg">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-center">
                      {member.description}
                    </p>

                    <div className="relative">
                      <Quote className="h-6 w-6 text-primary/30 absolute -top-2 -left-2" />
                      <p className="italic text-foreground text-center font-medium pl-4">
                        "{member.quote}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-r from-secondary/10 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
              Our Journey
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Milestones That Define Us
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-12 ${
                    index % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                            {milestone.year}
                          </Badge>
                          <h3 className="text-2xl font-bold text-foreground">
                            {milestone.event}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex-1">
                    <img
                      src={milestone.image}
                      alt={milestone.event}
                      className="w-full h-64 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
              Testimonials
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-primary/30" />

                  <p className="text-muted-foreground leading-relaxed italic text-lg">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-16 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Discover our complete collection of premium furniture and home
            accessories. Let us help you create the home of your dreams.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="group px-8 py-4 text-lg font-semibold shadow-xl"
            >
              <Link href="/shop" className="flex items-center">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-2 border-primary-foreground text-primary hover:bg-primary-foreground/80 hover:text-primary shadow-xl"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">
                  Free Delivery
                </h3>
                <p className="text-sm text-muted-foreground">
                  For all orders over Rp 2,000,000
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">
                  Warranty Protection
                </h3>
                <p className="text-sm text-muted-foreground">
                  2+ years coverage
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">
                  24/7 Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated customer service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Furniro.</h3>
              <p className="text-muted-foreground leading-relaxed">
                400 University Drive Suite 200 Coral Gables,
                <br />
                FL 33134 USA
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-foreground text-lg">Links</h4>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-foreground text-lg">Help</h4>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/shipping"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Payment Options
                </Link>
                <Link
                  href="/returns"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Returns
                </Link>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policies
                </Link>
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-foreground text-lg">Newsletter</h4>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full border-b border-foreground bg-transparent py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <Button className="w-full shadow-lg">SUBSCRIBE</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-muted-foreground">
              2023 Furniro. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
