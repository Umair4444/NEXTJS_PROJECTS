"use client";

import {
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Success Stories", href: "#stories" },
    { name: "Careers", href: "#careers" },
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Safety Tips", href: "#safety" },
    { name: "Contact Us", href: "#contact" },
    { name: "Community Guidelines", href: "#guidelines" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Data Protection", href: "#data" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#facebook" },
  { name: "Twitter", icon: Twitter, href: "#twitter" },
  { name: "Instagram", icon: Instagram, href: "#instagram" },
  { name: "LinkedIn", icon: Linkedin, href: "#linkedin" },
];

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // ✅ cubic bezier for "easeOut"
      },
    },
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="h-8 w-8 text-primary fill-current" />
                <span className="text-2xl font-serif font-bold text-foreground">
                  SoulMate
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                Connecting hearts and building lasting relationships through
                innovative matchmaking technology and genuine human connections.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-3" />
                  <span className="text-sm">hello@soulmate.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <motion.a
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                          whileHover={{ x: 4 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4">
                    Support
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link.name}>
                        <motion.a
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                          whileHover={{ x: 4 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.name}>
                        <motion.a
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                          whileHover={{ x: 4 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 sm:mb-0">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    whileHover={{ scale: 1.2, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                © 2025 SoulMate. All rights reserved. Made with ❤️ for love
                seekers everywhere.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
