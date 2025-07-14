import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
    description: "Call us 24/7 for immediate assistance",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@carrent.com", "support@carrent.com"],
    description: "We'll respond within 2 hours",
  },
  {
    icon: MapPin,
    title: "Main Office",
    details: ["123 Car Street", "Auto City, AC 12345"],
    description: "Visit our headquarters",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 6:00 AM - 10:00 PM", "Sat - Sun: 8:00 AM - 8:00 PM"],
    description: "Online booking available 24/7",
  },
];

export const locations = [
  {
    name: "Downtown Location",
    address: "123 Car Street, Auto City, AC 12345",
    phone: "+1 (555) 123-4567",
    hours: "24/7",
  },
  {
    name: "Airport Location",
    address: "456 Airport Drive, Auto City, AC 12346",
    phone: "+1 (555) 123-4568",
    hours: "5:00 AM - 12:00 AM",
  },
  {
    name: "Mall Location",
    address: "789 Shopping Blvd, Auto City, AC 12347",
    phone: "+1 (555) 123-4569",
    hours: "8:00 AM - 10:00 PM",
  },
];

export const faqs = [
  {
    question: "What do I need to rent a car?",
    answer:
      "You need a valid driver's license, credit card, and to be at least 21 years old. International visitors need a valid passport and international driving permit.",
  },
  {
    question: "Can I modify or cancel my reservation?",
    answer:
      "Yes, you can modify or cancel your reservation up to 24 hours before pickup at no charge. Changes within 24 hours may incur fees.",
  },
  {
    question: "Is insurance included?",
    answer:
      "Basic insurance is included with all rentals. We also offer comprehensive coverage options for additional protection and peace of mind.",
  },
  {
    question: "What happens if I return the car late?",
    answer:
      "Late returns are charged on an hourly basis. If you're more than 4 hours late, you'll be charged for an additional day.",
  },
];
