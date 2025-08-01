import { Heart, Calendar, MapPin, CircleDot } from "lucide-react";
import Image from "next/image";

export default function WeddingStory() {
  const milestones = [
    {
      icon: Heart,
      title: "First Met",
      date: "Spring 2019",
      story:
        "Our paths crossed at a charming little coffee shop in downtown Portland. Emma was reading a book about botanical gardens, and James couldn't help but ask about her favorite flower. That conversation lasted four hours.",
      image:
        // "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop&auto=format&q=80",
        "https://images.unsplash.com/photo-1604881990409-b9f246db39da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhZmUlMjBkYXRlfGVufDB8fDB8fHww",
    },
    {
      icon: Calendar,
      title: "First Date",
      date: "June 2019",
      story:
        "James took Emma to the International Rose Garden, where they wandered among hundreds of blooming roses. It was there, surrounded by nature's beauty, that they both knew this was something special.",
      image:
        // "https://images.unsplash.com/photo-1518335935020-cfd9c19a3fbf?w=600&h=400&fit=crop&auto=format&q=80",
        "https://plus.unsplash.com/premium_photo-1668461235857-e9f77a1023e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmlyc3QlMjBkYXRlJTIwa2lzc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      icon: MapPin,
      title: "Adventures Together",
      date: "2020-2023",
      story:
        "From hiking mountain trails to exploring farmers markets, we discovered our shared love for nature, simple pleasures, and creating beautiful memories together in the great outdoors.",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&auto=format&q=80",
    },
    {
      icon: CircleDot,
      title: "The Proposal",
      date: "December 2023",
      story:
        "On a quiet winter morning at our favorite hiking spot, James got down on one knee as the sun rose over the mountains. With tears of joy and the most beautiful ring, Emma said yes to forever.",
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop&auto=format&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-primary mb-6">
            Our Love Story
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto">
            Every love story is beautiful, but ours is our favorite. Here's how
            two hearts found their way to each other through nature's gentle
            guidance.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 mb-20 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <Image
                    width={500}
                    height={500}
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 flex items-center">
                <div className={`${index % 2 === 1 ? "lg:pr-12" : "lg:pl-12"}`}>
                  {/* Icon and date */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center">
                      <milestone.icon className="w-8 h-8 text-sage-dark" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-primary">
                        {milestone.title}
                      </h3>
                      <p className="font-cormorant text-lg text-sage-dark italic">
                        {milestone.date}
                      </p>
                    </div>
                  </div>

                  {/* Story */}
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {milestone.story}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote section */}
        <div className="mt-20 text-center">
          <div className="bg-sage-light/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <blockquote className="font-cormorant text-2xl md:text-3xl italic text-primary mb-6">
              "In all the world, there is no heart for me like yours. In all the
              world, there is no love for you like mine."
            </blockquote>
            <cite className="text-muted-foreground">— Maya Angelou</cite>
          </div>
        </div>

        {/* Meet the couple */}
        <div className="mt-20">
          <h3 className="font-playfair text-3xl md:text-4xl font-medium text-primary text-center mb-12">
            Meet the Happy Couple
          </h3>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Emma */}
            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  width={300}
                  height={300}
                  src="https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMG1vZGVsJTIwcGljJTIwZmVtYWxlfGVufDB8fDB8fHww"
                  alt="Emma"
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-xl"
                />
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-dusty-rose rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white fill-current" />
                </div>
              </div>
              <h4 className="font-playfair text-2xl font-semibold text-primary mb-3">
                Emma Rose
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                A botanical illustrator with a passion for sustainable gardening
                and vintage tea cups. Emma finds joy in morning walks, farmers
                markets, and creating beautiful things with her hands.
              </p>
            </div>

            {/* James */}
            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  width={300}
                  height={300}
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format&q=80&crop=face"
                  alt="James"
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-xl"
                />
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-sage rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white fill-current" />
                </div>
              </div>
              <h4 className="font-playfair text-2xl font-semibold text-primary mb-3">
                James Alexander
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                A landscape photographer who captures the raw beauty of nature.
                James loves early morning hikes, craft coffee, and finding the
                perfect light to tell a story through his lens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
