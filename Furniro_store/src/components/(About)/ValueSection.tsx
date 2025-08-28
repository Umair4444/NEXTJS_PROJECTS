import React from "react";
import { Badge } from "../ui/badge";
import { values } from "@/lib/mockDataAbout";
import { Card, CardContent } from "../ui/card";

const ValueSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary hover:bg-transparent/20 border-primary/20 mb-6">
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
  );
};

export default ValueSection;
