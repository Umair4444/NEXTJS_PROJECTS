import { Truck, Shield, Users } from "lucide-react";
import React from "react";

const FeatureSection = () => {
  return (
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
              <p className="text-sm text-muted-foreground">2+ years coverage</p>
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
  );
};

export default FeatureSection;
