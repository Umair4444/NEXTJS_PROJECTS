import { Award, Shield, Truck } from "lucide-react";
import React from "react";

const CustomerSupport = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-primary/20 to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">
                High Quality
              </h3>
              <p className="text-sm text-muted-foreground">
                Crafted from top materials
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">
                Warranty Protection
              </h3>
              <p className="text-sm text-muted-foreground">
                Over 2 years coverage
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Truck className="w-8 h-8 text-white" />
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
  );
};

export default CustomerSupport;
