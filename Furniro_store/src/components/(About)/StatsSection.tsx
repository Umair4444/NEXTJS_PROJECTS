import { Award, Users, Globe, Star } from "lucide-react";
import React from "react";

const StatsSection = () => {
  return (
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
  );
};

export default StatsSection;
