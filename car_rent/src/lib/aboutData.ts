import {
  Award,
  Users,
  Car,
  Globe,
  Shield,
  Star,
  Target,
  Heart,
} from "lucide-react";

export const stats = [
  { icon: Car, value: "500+", label: "Vehicles in Fleet" },
  { icon: Users, value: "50k+", label: "Happy Customers" },
  { icon: Globe, value: "20+", label: "Locations" },
  { icon: Award, value: "5+", label: "Years Experience" },
];

export const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every vehicle undergoes rigorous safety checks and maintenance to ensure your journey is secure.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, from vehicle quality to customer support.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "Your satisfaction is our priority. We go above and beyond to make your experience exceptional.",
  },
  {
    icon: Target,
    title: "Reliability",
    description:
      "Count on us for dependable service, transparent pricing, and vehicles that won't let you down.",
  },
];

export const team = [
  {
    name: "John Anderson",
    role: "CEO & Founder",
    image: "/placeholder.svg",
    description: "15+ years in automotive industry",
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Director",
    image: "/placeholder.svg",
    description: "Expert in fleet management",
  },
  {
    name: "Mike Johnson",
    role: "Customer Experience Lead",
    image: "/placeholder.svg",
    description: "Passionate about service excellence",
  },
];

export const milestones = [
  { year: "2019", event: "CarRent founded with 50 vehicles" },
  { year: "2020", event: "Expanded to 5 locations across the city" },
  { year: "2021", event: "Introduced luxury and electric vehicle options" },
  { year: "2022", event: "Reached 25,000 satisfied customers" },
  { year: "2023", event: "Launched 24/7 customer support" },
  { year: "2024", event: "500+ vehicles, 20+ locations nationwide" },
];
