import React from "react";
import { Badge } from "../ui/badge";
import { teamMembers } from "@/lib/mockDataAbout";
import { Quote } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const TeamSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary hover:bg-transparent/20 border-primary/20 mb-6">
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
              <CardContent className="p-0 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-center mb-6">
                    {member.description}
                  </p>

                  <div className="mt-auto relative">
                    <Quote className="h-6 w-6 text-primary/30 absolute -top-2 -left-2" />
                    <p className="italic text-foreground text-center font-medium pl-4">
                      &quot;{member.quote}&quot;
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

export default TeamSection;
