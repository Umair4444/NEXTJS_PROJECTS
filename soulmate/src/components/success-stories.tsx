"use client";

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Quote, Pause } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { easeOut, Variants } from "framer-motion";

const stories = [
  {
    id: 1,
    names: "Sarah & Michael",
    location: "New York, USA",
    story:
      "We met through SoulMate's AI matching system and instantly connected over our shared love for travel and photography. Six months later, we're planning our dream wedding!",
    image: "/happy-couple-wedding-photo-romantic-setting.jpg",
    videoThumbnail: "/couple-testimonial-video-thumbnail.jpg",
    videoUrl: "/videos/testimonial-sarah-michael.mp4",
    duration: "2 years together",
    quote: "SoulMate didn't just find us a match, it found us our soulmate.",
  },
  {
    id: 2,
    names: "Priya & James",
    location: "London, UK",
    story:
      "Despite living in different countries, SoulMate's compatibility algorithm brought us together. We're proof that true love knows no boundaries.",
    image: "/indian-british-couple-wedding-celebration.jpg",
    videoThumbnail: "/multicultural-couple-video-testimonial.jpg",
    videoUrl: "/videos/testimonial-priya-james.mp4",
    duration: "1.5 years together",
    quote:
      "The platform made long-distance dating feel effortless and meaningful.",
  },
  {
    id: 3,
    names: "David & Emma",
    location: "Sydney, Australia",
    story:
      "After years of unsuccessful dating, we found each other on SoulMate. The personality matching was so accurate, it felt like we'd known each other forever.",
    image: "/australian-couple-beach-wedding-sunset.jpg",
    videoThumbnail: "/couple-beach-testimonial-video.jpg",
    videoUrl: "/videos/testimonial-david-emma.mp4",
    duration: "3 years together",
    quote:
      "Finally, a dating platform that understands what real compatibility means.",
  },
  {
    id: 4,
    names: "Maria & Alex",
    location: "Barcelona, Spain",
    story:
      "We were both busy professionals who had given up on finding love. SoulMate's smart matching saved us time and brought us together perfectly.",
    image: "/spanish-couple-romantic-barcelona-wedding.jpg",
    videoThumbnail: "/professional-couple-testimonial-video.jpg",
    videoUrl: "/videos/testimonial-maria-alex.mp4",
    duration: "2.5 years together",
    quote: "Efficient, authentic, and life-changing. That's SoulMate for us.",
  },
];

export function SuccessStories() {
  const [currentStory, setCurrentStory] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
    setIsVideoPlaying(false);
    setIsVideoPaused(false);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
    setIsVideoPlaying(false);
    setIsVideoPaused(false);
  };

  const playVideo = () => {
    setIsVideoPlaying(true);
    setIsVideoPaused(false);
  };

  const pauseVideo = () => {
    setIsVideoPaused(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const resumeVideo = () => {
    setIsVideoPaused(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const stopVideo = () => {
    setIsVideoPlaying(false);
    setIsVideoPaused(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // Container fade + stagger
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  // Item fade + slide up
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut, // ✅ type-safe
      },
    },
  };

  // Slide (carousel-like) with direction
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const current = stories[currentStory];

  return (
    <section id="stories" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance"
          >
            Success Stories
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            Real couples, real love stories. Discover how SoulMate has helped
            thousands find their perfect match and build lasting relationships.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" custom={1}>
              <motion.div
                key={currentStory}
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Story Content */}
                <div className="order-2 lg:order-1">
                  <Card className="bg-card border-border/50 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <Quote className="h-8 w-8 text-primary mr-3" />
                        <div>
                          <h3 className="text-2xl font-serif font-bold text-foreground">
                            {current.names}
                          </h3>
                          <p className="text-muted-foreground">
                            {current.location}
                          </p>
                        </div>
                      </div>

                      <blockquote className="text-lg text-foreground mb-6 leading-relaxed text-pretty italic">
                        &quos;{current.quote}&quos;
                      </blockquote>

                      <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                        {current.story}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {current.duration}
                        </span>
                        <div className="flex space-x-2">
                          {stories.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentStory(index)}
                              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                index === currentStory
                                  ? "bg-primary"
                                  : "bg-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Video/Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    {!isVideoPlaying ? (
                      <>
                        <Image
                          src={current.image || "/placeholder.svg"}
                          alt={`${current.names} success story`}
                          width={600}
                          height={400}
                          className="w-full h-80 lg:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <motion.button
                            onClick={playVideo}
                            className="bg-white/90 hover:bg-white text-primary rounded-full p-4 shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Play className="h-8 w-8 ml-1" />
                          </motion.button>
                        </div>
                      </>
                    ) : (
                      <div className="relative w-full h-80 lg:h-96">
                        <video
                          ref={videoRef}
                          className="w-full h-full object-cover"
                          autoPlay
                          controls={false}
                          onEnded={stopVideo}
                        >
                          <source src={current.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        {/* Custom Video Controls */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 rounded-lg p-3 backdrop-blur-sm">
                          <div className="flex items-center space-x-3">
                            {!isVideoPaused ? (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={pauseVideo}
                                className="text-white hover:bg-white/20"
                              >
                                <Pause className="h-5 w-5" />
                              </Button>
                            ) : (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={resumeVideo}
                                className="text-white hover:bg-white/20"
                              >
                                <Play className="h-5 w-5" />
                              </Button>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            onClick={stopVideo}
                            className="text-white hover:bg-white/20 text-sm"
                          >
                            Back to Photo
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevStory}
                className="rounded-full bg-background hover:bg-accent"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextStory}
                className="rounded-full bg-background hover:bg-accent"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Statistics */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          >
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold text-primary mb-2">
                10,000+
              </div>
              <div className="text-muted-foreground">Success Stories</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Match Satisfaction</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold text-primary mb-2">
                6 months
              </div>
              <div className="text-muted-foreground">Average to Engagement</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
