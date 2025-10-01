"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  staggerContainer,
  fadeInUp,
  buttonHover,
  floatingAnimation,
} from "@/lib/animations";
import Image from "next/image";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showVideoControls, setShowVideoControls] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMute = () => {
    const video = document.querySelector("video") as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsVideoMuted(video.muted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background for Desktop */}
      {!isMobile && (
        <div
          className="absolute inset-0 z-0"
          onMouseEnter={() => setShowVideoControls(true)}
          onMouseLeave={() => setShowVideoControls(false)}
        >
          <video
            autoPlay
            muted={isVideoMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-fallback.jpg"
          >
            <source
              src="https://www.youtube.com/watch?v=0QMJImxUoGA&pp=ygUXd2VkZGluZyBkYXRlIHZpZGVvIGtpc3M%3D.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 video-overlay" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showVideoControls ? 1 : 0 }}
            className="absolute top-4 right-4 z-20"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMute}
              className="bg-black/20 hover:bg-black/40 border-white/30 text-white backdrop-blur-sm"
            >
              {isVideoMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
          </motion.div>
        </div>
      )}

      {/* Fallback Image for Mobile */}
      {isMobile && (
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-fallback.jpg"
            alt="Beautiful couple in romantic setting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 video-overlay" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 text-balance leading-tight"
          >
            Find Your Perfect Match
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed"
          >
            Discover meaningful connections with verified profiles, AI-powered
            matchmaking, and secure conversations. Your journey to finding true
            love starts here.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            <motion.div
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats with Animated Counters */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <motion.div
              className="text-center"
              variants={floatingAnimation}
              animate="animate"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={10} suffix="M+" />
              </div>
              <div className="text-white/80 text-sm sm:text-base">
                Happy Couples
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              variants={floatingAnimation}
              animate="animate"
              transition={{ delay: 0.5 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={50} suffix="M+" />
              </div>
              <div className="text-white/80 text-sm sm:text-base">
                Verified Profiles
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              variants={floatingAnimation}
              animate="animate"
              transition={{ delay: 1 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <div className="text-white/80 text-sm sm:text-base">
                Success Rate
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
