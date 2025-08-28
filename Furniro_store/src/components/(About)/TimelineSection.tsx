import { milestones } from "@/lib/mockDataAbout";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const TimelineSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-secondary/10 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary hover:bg-transparent/20 border-primary/20 mb-6">
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
  );
};

export default TimelineSection;
