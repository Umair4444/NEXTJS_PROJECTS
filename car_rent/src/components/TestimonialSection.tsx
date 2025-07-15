import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Executive",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b9a59ad6?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
    rating: 5,
    comment:
      "Exceptional service! The car was pristine and the booking process was seamless. Will definitely use CarRent again for my business trips.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Travel Enthusiast",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
    rating: 5,
    comment:
      "Amazing experience! The Tesla Model S was in perfect condition and made our road trip unforgettable. Great customer support too!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Wedding Planner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
    rating: 5,
    comment:
      "Perfect for special occasions! The luxury vehicles are well-maintained and the team goes above and beyond to ensure satisfaction.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
    rating: 5,
    comment:
      "Reliable and professional. I've been using CarRent for my team's transportation needs and they never disappoint. Highly recommended!",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Digital Nomad",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
    rating: 5,
    comment:
      "The best car rental experience I've had! Easy booking, fair pricing, and excellent customer service. The cars are always clean and reliable.",
  },
  {
    id: 6,
    name: "James Miller",
    role: "Family Man",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
    rating: 5,
    comment:
      "Great for family trips! The SUVs are spacious and safe. The staff was incredibly helpful in choosing the right vehicle for our vacation.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            Customer Reviews
          </div>
          <h2 className="text-4xl font-bold text-brand-gray-900 dark:text-white mb-4">
            What Our <span className="text-brand-blue">Customers Say</span>
          </h2>
          <p className="text-xl text-brand-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience with CarRent.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-gray-800 overflow-hidden"
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-brand-blue" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-brand-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-gray-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-brand-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-brand-blue-50">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-brand-blue-50">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-brand-blue-50">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-brand-blue-50">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
