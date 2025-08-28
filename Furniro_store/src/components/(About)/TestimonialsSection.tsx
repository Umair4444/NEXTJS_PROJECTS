import { testimonials } from "@/lib/mockDataAbout";
import { Badge, Star, Quote } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

const TestimonialSection = () => {
  return (
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
                  &quot;{testimonial.content}&quot;
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
  );
};

export default TestimonialSection;
