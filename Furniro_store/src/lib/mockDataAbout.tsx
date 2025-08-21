import { Award, Leaf, Heart, Users } from "lucide-react";

export const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmVtYWxlfGVufDB8fDB8fHww",
    description:
      "With over 15 years in furniture design, Sarah founded Furniro to bring quality craftsmanship to modern homes.",
    quote: "Every piece of furniture should tell a story and create memories.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    description:
      "Michael leads our design team, creating beautiful and functional pieces that define contemporary living.",
    quote:
      "Design is not just how it looks, but how it makes you feel at home.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Sustainability Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    description:
      "Emma ensures all our products meet the highest environmental standards and ethical sourcing practices.",
    quote: "Beautiful furniture shouldn't come at the cost of our planet.",
  },
];

export const values = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Quality Craftsmanship",
    description:
      "Every piece is meticulously crafted using premium materials and traditional techniques passed down through generations.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Sustainable Design",
    description:
      "We're committed to environmental responsibility, using sustainably sourced materials and eco-friendly production methods.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Customer-Centered",
    description:
      "Our customers are at the heart of everything we do. We create furniture that enhances lives and brings joy to homes.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Focus",
    description:
      "We believe in supporting local artisans and giving back to the communities where our furniture is made.",
    color: "from-blue-500 to-indigo-500",
  },
];

export const milestones = [
  {
    year: "2010",
    event: "Company Founded",
    description:
      "Sarah Johnson establishes Furniro with a vision to transform modern living spaces.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
  },
  {
    year: "2015",
    event: "First Showroom",
    description:
      "Opened our flagship showroom in downtown, showcasing our complete furniture collection.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
  },
  {
    year: "2018",
    event: "Sustainability Initiative",
    description:
      "Launched our eco-friendly production line, reducing environmental impact by 40%.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
  },
  {
    year: "2020",
    event: "Online Expansion",
    description:
      "Expanded to e-commerce, making quality furniture accessible nationwide during the pandemic.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
  },
  {
    year: "2023",
    event: "International Recognition",
    description:
      "Received the International Design Award for our innovative furniture collections.",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop",
  },
];

export const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Interior Designer",
    content:
      "Furniro has been our go-to partner for premium furniture. Their attention to detail and commitment to quality is unmatched.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
  },
  {
    name: "David Kim",
    role: "Homeowner",
    content:
      "The craftsmanship is extraordinary. Every piece we've purchased has exceeded our expectations and transformed our home.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Lisa Thompson",
    role: "Architect",
    content:
      "Working with Furniro has been amazing. They understand our vision and deliver furniture that perfectly complements our designs.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];
