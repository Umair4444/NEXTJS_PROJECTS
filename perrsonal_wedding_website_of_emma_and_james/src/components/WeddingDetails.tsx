import { Clock, MapPin, Utensils, Music, Gift, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WeddingDetails() {
  const events = [
    {
      title: "Ceremony",
      time: "4:00 PM",
      icon: Clock,
      description:
        "Join us as we exchange vows in the beautiful outdoor garden pavilion, surrounded by blooming flowers and gentle nature sounds.",
      details: [
        "Cocktail attire suggested",
        "Outdoor setting on grass",
        "Ceremony will be 30 minutes",
      ],
    },
    {
      title: "Cocktail Hour",
      time: "4:30 PM",
      icon: Utensils,
      description:
        "Celebrate with us during cocktail hour featuring locally sourced appetizers and signature drinks inspired by our favorite flavors.",
      details: [
        "Garden terrace setting",
        "Signature cocktails & mocktails",
        "Light appetizers served",
      ],
    },
    {
      title: "Reception",
      time: "6:00 PM",
      icon: Music,
      description:
        "Dance the night away under string lights with dinner, toasts, and live acoustic music that celebrates our love story.",
      details: [
        "Plated dinner service",
        "Live acoustic duo",
        "Dancing until 11 PM",
      ],
    },
  ];

  const practicalInfo = [
    {
      icon: MapPin,
      title: "Getting There",
      content:
        "Willow Creek Gardens is located at 1234 Meadowbrook Lane, just 15 minutes from downtown. Ample parking available on-site.",
    },
    {
      icon: Car,
      title: "Accommodations",
      content:
        "We've reserved blocks at the nearby Meadowbrook Inn and Garden Suites. Book by May 1st for special rates.",
    },
    {
      icon: Gift,
      title: "Registry",
      content:
        "Your presence is the only present we need! But if you'd like to give a gift, we're registered at a few favorite places.",
    },
  ];

  return (
    <section className="py-20 bg-champagne">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-primary mb-6">
            Wedding Details
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto">
            Everything you need to know about our special day, from ceremony to
            celebration.
          </p>
        </div>

        {/* Timeline of events */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="font-playfair text-3xl font-medium text-primary text-center mb-12">
            Timeline of Events
          </h3>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Time and icon */}
                  <div className="md:w-1/4 text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-light rounded-full mb-4">
                      <event.icon className="w-8 h-8 text-sage-dark" />
                    </div>
                    <div className="font-playfair text-2xl font-semibold text-primary">
                      {event.time}
                    </div>
                    <div className="font-cormorant text-xl text-sage-dark">
                      {event.title}
                    </div>
                  </div>

                  {/* Description and details */}
                  <div className="md:w-3/4">
                    <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                      {event.description}
                    </p>
                    <ul className="space-y-2">
                      {event.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Venue information */}
        <div className="mb-20">
          <h3 className="font-playfair text-3xl font-medium text-primary text-center mb-12">
            The Venue
          </h3>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2">
              {/* Venue image */}
              <div className="lg:h-96">
                <Image
                  width={500}
                  height={500}
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop&auto=format&q=80"
                  alt="Willow Creek Gardens"
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>

              {/* Venue details */}
              <div className="p-8 lg:p-12 flex items-center">
                <div>
                  <h4 className="font-playfair text-2xl font-semibold text-primary mb-4">
                    Willow Creek Gardens
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A picturesque garden venue nestled in the rolling hills of
                    Meadowbrook. Known for its stunning natural beauty, mature
                    oak trees, and carefully curated botanical gardens that
                    bloom year-round.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-sage" />
                      <span className="text-muted-foreground">
                        1234 Meadowbrook Lane, Meadowbrook, CA
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-sage" />
                      <span className="text-muted-foreground">
                        Free parking available on-site
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-6 border-sage text-sage hover:bg-sage hover:text-white"
                  >
                    View Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical information */}
        <div>
          <h3 className="font-playfair text-3xl font-medium text-primary text-center mb-12">
            Good to Know
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {practicalInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-dusty-rose-light rounded-full mb-6">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-primary mb-4">
                  {info.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {info.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Weather note */}
        <div className="mt-16 text-center">
          <div className="bg-sage-light/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h4 className="font-playfair text-xl font-semibold text-primary mb-3">
              A Note About Weather
            </h4>
            <p className="text-muted-foreground">
              Our ceremony will be held outdoors rain or shine. We&apos;ll have
              a beautiful covered pavilion ready just in case Mother Nature
              decides to add her own touch to our special day. We recommend
              bringing a light jacket for the evening celebration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
