"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, Heart, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Variants, easeOut } from "framer-motion";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

export function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterForm) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Newsletter subscription:", data);
    setIsSubmitted(true);
    setIsLoading(false);
    reset();

    // Reset success state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut, // ✅ type-safe
      },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <motion.div variants={itemVariants} className="mb-6">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail className="h-8 w-8 text-primary" />
                  </motion.div>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance"
                >
                  Stay Connected
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
                >
                  Get dating tips, success stories, and exclusive features
                  delivered to your inbox. Join our community of love seekers.
                </motion.p>
              </div>

              <motion.div variants={itemVariants} className="max-w-md mx-auto">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="relative">
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="Enter your email address"
                        className={`pl-12 pr-4 py-4 text-lg rounded-full border-2 transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                          errors.email ? "border-destructive" : "border-border"
                        }`}
                        disabled={isLoading}
                      />
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>

                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-destructive text-sm text-center"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full py-4 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 group"
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          Subscribe Now
                          <Sparkles className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
                    >
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      You&apos;ve successfully subscribed to our newsletter.
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Benefits */}
              <motion.div
                variants={itemVariants}
                className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
              >
                <div className="flex flex-col items-center">
                  <Heart className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">
                    Dating Tips
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <Sparkles className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">
                    Success Stories
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">
                    Exclusive Features
                  </span>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xs text-muted-foreground text-center mt-6"
              >
                We respect your privacy. Unsubscribe at any time.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
