import { MessageSquare, Users, Award } from "lucide-react";
import React from "react";

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-secondary/20 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">24h</h3>
            <p className="text-muted-foreground">Average Response Time</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">10K+</h3>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">4.9/5</h3>
            <p className="text-muted-foreground">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
