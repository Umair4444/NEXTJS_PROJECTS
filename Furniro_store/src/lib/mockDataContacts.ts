import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Showroom",
    details: [
      "400 University Drive Suite 200",
      "Coral Gables, FL 33134",
      "United States",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "Sales: (555) 123-4567",
      "Support: (555) 123-4568",
      "Main: (555) 123-4569",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@furniro.com", "support@furniro.com", "sales@furniro.com"],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9:00 AM - 7:00 PM",
      "Saturday: 10:00 AM - 6:00 PM",
      "Sunday: 11:00 AM - 5:00 PM",
    ],
    color: "from-orange-500 to-orange-600",
  },
];

export const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Custom-made pieces are final sale unless there's a manufacturing defect.",
  },
  {
    question: "Do you offer delivery and assembly?",
    answer:
      "Yes! We provide white-glove delivery service including assembly for most items. Delivery fees vary by location and item size. Assembly service is available for an additional fee.",
  },
  {
    question: "Can I customize furniture pieces?",
    answer:
      "Absolutely! We offer customization options for many of our pieces including fabric choices, wood finishes, and dimensions. Contact our design team to discuss your specific needs.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "In-stock items typically ship within 2-3 business days. Custom pieces may take 4-8 weeks. We'll provide a detailed timeline when you place your order.",
  },
  {
    question: "Do you have a showroom I can visit?",
    answer:
      "Yes! Our flagship showroom is located in Coral Gables, FL. We'd love to have you visit to see and feel our furniture in person. Appointments are recommended but not required.",
  },
];