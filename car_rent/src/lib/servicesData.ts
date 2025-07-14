import {
  Car,
  Clock,
  Shield,
  Users,
  MapPin,
  Headphones,
  Calendar,
  Briefcase,
  Heart,
  Fuel,
  Wrench,
  CreditCard,
} from "lucide-react";

export const mainServices = [
  {
    icon: Car,
    title: "Daily Car Rental",
    description:
      "Perfect for short trips, daily commutes, or weekend getaways.",
    features: [
      "Hourly and daily rates",
      "Wide selection of vehicles",
      "Quick pickup process",
    ],
    price: "Starting from $29/day",
    popular: true,
  },
  {
    icon: Calendar,
    title: "Long-term Rental",
    description: "Extended rentals for weeks or months with special rates.",
    features: [
      "Weekly and monthly discounts",
      "Flexible terms",
      "Maintenance included",
    ],
    price: "Starting from $599/month",
    popular: false,
  },
  {
    icon: Briefcase,
    title: "Corporate Rental",
    description: "Business solutions for companies and corporate clients.",
    features: [
      "Volume discounts",
      "Dedicated account manager",
      "Billing solutions",
    ],
    price: "Custom pricing",
    popular: false,
  },
  {
    icon: MapPin,
    title: "Airport Transfer",
    description: "Convenient airport pickup and drop-off services.",
    features: ["Meet & greet service", "Flight tracking", "24/7 availability"],
    price: "Starting from $49",
    popular: true,
  },
  {
    icon: Users,
    title: "Chauffeur Service",
    description: "Professional drivers for luxury and comfort.",
    features: [
      "Licensed professional drivers",
      "Luxury vehicles",
      "Personalized service",
    ],
    price: "Starting from $89/hour",
    popular: false,
  },
  {
    icon: Heart,
    title: "Special Events",
    description: "Wedding cars, prom rentals, and special occasion vehicles.",
    features: [
      "Luxury and exotic cars",
      "Special decorations",
      "Photography support",
    ],
    price: "Starting from $199",
    popular: false,
  },
];

export const additionalServices = [
  {
    icon: Shield,
    title: "Comprehensive Insurance",
    description: "Full coverage protection for peace of mind",
    included: [
      "Collision damage waiver",
      "Theft protection",
      "Third-party liability",
    ],
  },
  {
    icon: Fuel,
    title: "Fuel Service",
    description: "Convenient fuel options and delivery",
    included: [
      "Pre-paid fuel options",
      "Fuel delivery service",
      "Transparent pricing",
    ],
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance whenever you need it",
    included: [
      "Emergency roadside assistance",
      "Live chat support",
      "Multilingual staff",
    ],
  },
  {
    icon: MapPin,
    title: "GPS & Navigation",
    description: "Never get lost with our navigation solutions",
    included: [
      "Latest GPS systems",
      "Real-time traffic updates",
      "Local area expertise",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Care",
    description: "Well-maintained vehicles for reliable performance",
    included: [
      "Regular safety inspections",
      "Professional cleaning",
      "Preventive maintenance",
    ],
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment options for your convenience",
    included: ["All major credit cards", "Online payment", "Corporate billing"],
  },
];

export const vehicleCategories = [
  {
    category: "Economy",
    vehicles: ["Toyota Corolla", "Honda Civic", "Nissan Sentra"],
    features: ["Fuel efficient", "Easy to park", "Great value"],
    priceRange: "$29-39/day",
    image: "/placeholder.svg",
  },
  {
    category: "Compact",
    vehicles: ["Hyundai Elantra", "Volkswagen Jetta", "Mazda3"],
    features: ["Comfortable seating", "Good fuel economy", "City friendly"],
    priceRange: "$35-45/day",
    image: "/placeholder.svg",
  },
  {
    category: "Mid-size",
    vehicles: ["Toyota Camry", "Honda Accord", "Chevrolet Malibu"],
    features: ["Spacious interior", "Smooth ride", "Family friendly"],
    priceRange: "$45-55/day",
    image: "/placeholder.svg",
  },
  {
    category: "Full-size",
    vehicles: ["Chevrolet Impala", "Nissan Altima", "Ford Fusion"],
    features: ["Premium comfort", "Large trunk", "Highway performance"],
    priceRange: "$55-65/day",
    image: "/placeholder.svg",
  },
  {
    category: "SUV",
    vehicles: ["Ford Explorer", "Chevrolet Tahoe", "BMW X5"],
    features: [
      "7-8 passenger seating",
      "All-terrain capability",
      "Cargo space",
    ],
    priceRange: "$65-85/day",
    image: "/placeholder.svg",
  },
  {
    category: "Luxury",
    vehicles: ["Mercedes-Benz S-Class", "BMW 7 Series", "Audi A8"],
    features: ["Premium materials", "Advanced technology", "Superior comfort"],
    priceRange: "$89-149/day",
    image: "/placeholder.svg",
  },
];

export const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Quick booking and pickup process",
  },
  {
    icon: CreditCard,
    title: "Save Money",
    description: "Competitive rates and no hidden fees",
  },
  {
    icon: Shield,
    title: "Stay Safe",
    description: "Fully insured and maintained vehicles",
  },
  {
    icon: Headphones,
    title: "Get Support",
    description: "24/7 customer assistance",
  },
];
