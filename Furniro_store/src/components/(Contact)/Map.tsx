import { MapPin } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

const Map = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Visit Our Showroom
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Come see our furniture collections in person at our beautiful
            showroom in Coral Gables. Experience the quality and craftsmanship
            firsthand.
          </p>
        </div>

        <Card className="overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-muted to-muted/50 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-16 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
              </div>

              <div className="text-center relative z-10">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <MapPin className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-muted-foreground mb-4 max-w-md">
                  We&apos;re working on integrating an interactive map to help
                  you find us easily
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>400 University Drive Suite 200</p>
                  <p>Coral Gables, FL 33134, United States</p>
                  <p className="font-medium">Open Monday - Sunday</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Map;
