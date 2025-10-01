"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { About } from "@/components/about"
import { HowItWorks } from "@/components/how-it-works"
import { SuccessStories } from "@/components/success-stories"
import { CTA } from "@/components/cta"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingHearts } from "@/components/floating-hearts"
import { motion } from "framer-motion"
import { pageTransition } from "@/lib/animations"

export default function HomePage() {
  return (
    <motion.main className="min-h-screen" initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      <ScrollProgress />
      <FloatingHearts />
      <Navbar />
      <Hero />
      <Features />
      <About />
      <HowItWorks />
      <SuccessStories />
      <CTA />
      <Newsletter />
      <Footer />
    </motion.main>
  )
}
