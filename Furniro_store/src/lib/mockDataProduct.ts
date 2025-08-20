import { Product, RelatedProduct } from "@/lib/mockInterfaceProduct";

export const products = [
  {
    id: "1",
    name: "Syltherine",
    category: "Chair",
    price: 2500000,
    originalPrice: 3500000,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
    description: "Stylish cafe chair with premium comfort",
    isNew: false,
    isOnSale: true,
    discount: 30,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "2",
    name: "Leviosa",
    category: "Chair",
    price: 2500000,
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop",
    description: "Stylish cafe chair with modern design",
    isNew: false,
    isOnSale: false,
    rating: 4.3,
    reviews: 86,
  },
  {
    id: "3",
    name: "Lolito",
    category: "Sofa",
    price: 7000000,
    originalPrice: 14000000,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",
    description: "Luxury big sofa for ultimate comfort",
    isNew: false,
    isOnSale: true,
    discount: 50,
    rating: 4.8,
    reviews: 203,
  },
  {
    id: "4",
    name: "Respira",
    category: "Table",
    price: 500000,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=300&fit=crop",
    description: "Outdoor bar table and stool set",
    isNew: true,
    isOnSale: false,
    rating: 4.6,
    reviews: 45,
  },
  {
    id: "5",
    name: "Grifo",
    category: "Lighting",
    price: 1500000,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop",
    description: "Modern night lamp with ambient lighting",
    isNew: false,
    isOnSale: false,
    rating: 4.4,
    reviews: 67,
  },
  {
    id: "6",
    name: "Muggo",
    category: "Accessories",
    price: 150000,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    description: "Premium ceramic coffee mug",
    isNew: true,
    isOnSale: false,
    rating: 4.2,
    reviews: 34,
  },
  {
    id: "7",
    name: "Pingky",
    category: "Bed",
    price: 7000000,
    originalPrice: 14000000,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=300&fit=crop",
    description: "Complete bedroom set with storage",
    isNew: false,
    isOnSale: true,
    discount: 50,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "8",
    name: "Potty",
    category: "Accessories",
    price: 500000,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    description: "Minimalist ceramic flower pot collection",
    isNew: true,
    isOnSale: false,
    rating: 4.1,
    reviews: 28,
  },
];

export const categories = [
  "All",
  "Chair",
  "Sofa",
  "Table",
  "Lighting",
  "Bed",
  "Accessories",
];

export const featuredProducts = [
  {
    id: "1",
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
    discount: 30,
  },
  {
    id: "2",
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: 2500000,
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop",
  },
  {
    id: "3",
    name: "Lolito",
    desc: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",
    discount: 50,
  },
  {
    id: "4",
    name: "Respira",
    desc: "Outdoor bar table",
    price: 500000,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=300&fit=crop",
    isNew: true,
  },
];

export const productDatabase: Product[] = [
  {
    id: "1",
    name: "Syltherine Premium Chair",
    category: "Chair",
    price: 2500000,
    originalPrice: 3500000,
    description:
      "Experience unparalleled comfort with our flagship chair, featuring premium oak construction and luxury fabric upholstery.",
    longDescription:
      "The Syltherine Premium Chair represents the pinnacle of modern furniture design. Crafted from sustainably sourced oak wood and upholstered in premium fabric, this chair seamlessly blends contemporary aesthetics with ergonomic excellence. Each piece is meticulously handcrafted by skilled artisans, ensuring exceptional quality and durability that will last for generations.",
    isNew: false,
    isOnSale: true,
    discount: 30,
    rating: 4.8,
    reviewCount: 342,
    sku: "FUR-SYL-001",
    inStock: true,
    stockCount: 15,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&sat=-100",
    ],
    colors: ["Brown", "Black", "Cream", "Navy"],
    sizes: ["Small", "Medium", "Large"],
    materials: ["Oak Wood", "Premium Fabric", "Steel Frame"],
    specifications: {
      dimensions: "75cm × 55cm × 85cm",
      weight: "12 kg",
      material: "Oak Wood, Premium Fabric",
      color: "Multiple Options",
      warranty: "2 years",
      assembly: "Required (30 minutes)",
      maxWeight: "120 kg",
      origin: "Handcrafted in Indonesia",
    },
    features: [
      "Ergonomic design for maximum comfort",
      "Premium sustainably sourced oak wood",
      "High-quality stain-resistant fabric",
      "360-degree swivel mechanism",
      "Height adjustable from 45-55cm",
      "Easy-clean maintenance",
      "Available in 4 stunning colors",
      "Professional assembly included",
    ],
    sustainability: [
      "FSC-certified sustainable wood",
      "Low-emission manufacturing process",
      "Recyclable materials",
      "Carbon-neutral shipping",
    ],
    tags: ["Furniture", "Chair", "Premium", "Ergonomic", "Sustainable"],
  },
  {
    id: "2",
    name: "Leviosa Modern Chair",
    category: "Chair",
    price: 2500000,
    description: "Sleek and modern chair perfect for contemporary spaces.",
    longDescription:
      "The Leviosa Modern Chair brings contemporary elegance to any space with its clean lines and sophisticated design.",
    isNew: false,
    isOnSale: false,
    rating: 4.3,
    reviewCount: 186,
    sku: "FUR-LEV-002",
    inStock: true,
    stockCount: 8,
    images: [
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
    ],
    colors: ["Gray", "White", "Black"],
    sizes: ["Medium", "Large"],
    materials: ["Aluminum", "Fabric"],
    specifications: {
      dimensions: "70cm × 50cm × 80cm",
      weight: "8 kg",
      material: "Aluminum, Fabric",
      warranty: "1 year",
    },
    features: [
      "Modern minimalist design",
      "Lightweight aluminum frame",
      "Comfortable seat padding",
    ],
    tags: ["Furniture", "Chair", "Modern", "Minimalist"],
  },
];

export const relatedProducts: RelatedProduct[] = [
  {
    id: "2",
    name: "Leviosa Modern Chair",
    price: 2500000,
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop",
    category: "Chair",
    rating: 4.3,
  },
  {
    id: "3",
    name: "Lolito Luxury Sofa",
    price: 7000000,
    originalPrice: 14000000,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    category: "Sofa",
    isOnSale: true,
    rating: 4.7,
  },
  {
    id: "4",
    name: "Respira Outdoor Table",
    price: 500000,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop",
    category: "Table",
    isNew: true,
    rating: 4.5,
  },
  {
    id: "5",
    name: "Grifo Designer Lamp",
    price: 1500000,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    category: "Lighting",
    rating: 4.6,
  },
];
