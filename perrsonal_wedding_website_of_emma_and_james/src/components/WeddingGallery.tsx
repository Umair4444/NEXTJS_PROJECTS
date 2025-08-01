"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";

export default function WeddingGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&auto=format&q=80",
      alt: "Engagement photo in the garden",
      category: "engagement",
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop&auto=format&q=80",
      alt: "Couple walking in nature",
      category: "engagement",
    },
    {
      src: "https://images.unsplash.com/photo-1544771401-541bad92e5ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5hZ2VtZW50JTIwY2VyZW1vbnklMjBraXNzfGVufDB8fDB8fHww",
      alt: "Romantic sunset portrait",
      category: "engagement",
    },
    {
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&auto=format&q=80",
      alt: "Adventure together",
      category: "engagement",
    },
    {
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop&auto=format&q=80",
      alt: "Mountain proposal",
      category: "proposal",
    },
    {
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop&auto=format&q=80",
      alt: "Ring detail shot",
      category: "proposal",
    },
    {
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop&auto=format&q=80",
      alt: "Forest photoshoot",
      category: "engagement",
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&auto=format&q=80",
      alt: "Garden venue",
      category: "venue",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1665657351594-14473b25fe22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5hZ2VtZW50JTIwY2VyZW1vbnklMjB2ZW51ZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Venue ceremony space",
      category: "venue",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? photos.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section className="py-20 bg-sage-light/10">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-primary mb-6">
            Our Gallery
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto">
            A glimpse into our journey together, from our engagement session to
            the beautiful venue where we'll say "I do."
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-square bg-warm-beige"
              onClick={() => openLightbox(index)}
            >
              <Image
                width={500}
                height={500}
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-sage" />
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-sage-dark capitalize">
                {photo.category}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
              Share Your Photos
            </h3>
            <p className="text-muted-foreground mb-6">
              Help us capture every moment! Use{" "}
              <span className="font-semibold text-sage-dark">
                #EmmaAndJamesWedding
              </span>{" "}
              to share your photos from our special day.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-2xl">📸</div>
              <div className="text-2xl">💚</div>
              <div className="text-2xl">🌿</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-full">
            <Image
              width={600}
              height={600}
              src={photos[selectedImage].src}
              alt={photos[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Image info */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="text-white text-sm font-medium">
              {selectedImage + 1} of {photos.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
