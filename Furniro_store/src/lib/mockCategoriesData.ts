export interface ProductProps {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  isOnSale?: boolean;
  discount?: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface CategoryProps {
  title: string;
  description: string;
  image: string;
  totalProducts: number;
  products: ProductProps[];
}

export const ProductData: ProductProps[] = [
  // Furniture
  {
    id: "1",
    name: "Syltherine Premium Chair",
    category: "Furniture",
    subCategory: "Chair",
    price: 2500000,
    originalPrice: 3500000,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    description: "Premium oak chair with luxury fabric upholstery",
    isOnSale: true,
    discount: 30,
    rating: 4.8,
    reviews: 342,
    isNew: false,
    isBestseller: true,
  },
  {
    id: "2",
    name: "Leviosa Modern Chair",
    category: "Furniture",
    subCategory: "Chair",
    price: 2500000,
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop",
    description: "Sleek modern chair for contemporary spaces",
    isOnSale: false,
    rating: 4.3,
    reviews: 186,
    isNew: false,
    isBestseller: false,
  },
  {
    id: "3",
    name: "Lolito Luxury Sofa",
    category: "Furniture",
    subCategory: "Sofa",
    price: 7000000,
    originalPrice: 14000000,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    description: "Spacious luxury sofa perfect for family gatherings",
    isOnSale: true,
    discount: 50,
    rating: 4.7,
    reviews: 203,
    isNew: false,
    isBestseller: true,
  },
  {
    id: "4",
    name: "Respira Outdoor Table",
    category: "Furniture",
    subCategory: "Table",
    price: 500000,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop",
    description: "Weather-resistant outdoor dining table set",
    isOnSale: false,
    isNew: true,
    rating: 4.5,
    reviews: 45,
    isBestseller: false,
  },
  {
    id: "10",
    name: "Nordic Dining Table",
    category: "Furniture",
    subCategory: "Table",
    price: 3200000,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop",
    description: "Scandinavian-inspired solid wood dining table",
    isOnSale: false,
    rating: 4.6,
    reviews: 128,
    isNew: false,
    isBestseller: true,
  },

  // Lighting
  {
    id: "5",
    name: "Grifo Designer Lamp",
    category: "Lighting",
    subCategory: "Table Lamp",
    price: 1500000,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    description: "Minimalist designer table lamp with adjustable brightness",
    rating: 4.6,
    reviews: 67,
    isNew: false,
    isBestseller: true,
  },
  {
    id: "9",
    name: "Aurora Ceiling Light",
    category: "Lighting",
    subCategory: "Ceiling Light",
    price: 2200000,
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
    description: "Modern LED ceiling light with smart controls",
    isNew: true,
    rating: 4.5,
    reviews: 23,
    isBestseller: false,
  },

  // Home Decor
  {
    id: "6",
    name: "Artisan Coffee Mug",
    category: "Home Decor",
    subCategory: "Accessories",
    price: 150000,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    description: "Handcrafted ceramic coffee mug with unique patterns",
    isNew: true,
    rating: 4.2,
    reviews: 34,
    isBestseller: false,
  },
  {
    id: "15",
    name: "Abstract Wall Art",
    category: "Home Decor",
    subCategory: "Wall Art",
    price: 1200000,
    image:
      "https://images.unsplash.com/photo-1616628182509-08d9f8a76c53?w=400&h=400&fit=crop",
    description: "Large canvas abstract wall art for modern homes",
    isNew: false,
    rating: 4.6,
    reviews: 64,
    isBestseller: true,
  },

  // Textiles
  {
    id: "7",
    name: "Luxe Bedding Set",
    category: "Textiles",
    subCategory: "Bedding",
    price: 7000000,
    originalPrice: 14000000,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop",
    description: "Premium cotton bedding set with matching accessories",
    isOnSale: true,
    discount: 50,
    rating: 4.7,
    reviews: 156,
    isNew: false,
    isBestseller: true,
  },

  // Kitchen
  {
    id: "19",
    name: "Marble Dinner Set",
    category: "Kitchen",
    subCategory: "Dinnerware",
    price: 3500000,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    description: "Luxury marble dinner set for 6 persons",
    isOnSale: false,
    rating: 4.6,
    reviews: 55,
    isNew: false,
    isBestseller: true,
  },
  {
    id: "20",
    name: "Chef’s Knife Set",
    category: "Kitchen",
    subCategory: "Kitchen Tools",
    price: 1800000,
    image:
      "https://images.unsplash.com/photo-1556910101-a5f9f74b01d9?w=400&h=400&fit=crop",
    description: "Professional stainless steel knife set with block",
    isOnSale: true,
    discount: 25,
    rating: 4.9,
    reviews: 102,
    isNew: true,
    isBestseller: true,
  },
];

export const CategoryData: CategoryProps[] = [
  {
    title: "Furniture",
    description: "Discover premium chairs, sofas, and tables",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    products: ProductData.filter((p) => p.category === "Furniture"),
    totalProducts: ProductData.filter((p) => p.category === "Furniture").length ,
  },
  {
    title: "Lighting",
    description: "Brighten your home with stylish lamps and lights",
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
    products: ProductData.filter((p) => p.category === "Lighting"),
    totalProducts: ProductData.filter((p) => p.category === "Lighting").length,
  },
  {
    title: "Home Decor",
    description: "Accessories and decor to personalize your space",
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
    products: ProductData.filter((p) => p.category === "Home Decor"),
    totalProducts: ProductData.filter((p) => p.category === "Home Decor")
      .length,
  },
  {
    title: "Textiles",
    description: "Soft textiles for comfort and style",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop",
    products: ProductData.filter((p) => p.category === "Textiles"),
    totalProducts: ProductData.filter((p) => p.category === "Textiles").length,
  },
  {
    title: "Kitchen",
    description: "High-end kitchenware and dining essentials",
    image:
      "https://images.unsplash.com/photo-1556910101-a5f9f74b01d9?w=400&h=400&fit=crop",
    products: ProductData.filter((p) => p.category === "Kitchen"),
    totalProducts: ProductData.filter((p) => p.category === "Kitchen").length,
  },
];

// export const CategoryData: CategoryProps[] = [
//   {
//     title: "Furniture",
//     description: "Discover premium chairs, sofas, and tables",
//     image:
//       "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
//     products: ProductData.filter((p) => p.category === "Furniture"),
//   },
//   {
//     title: "Lighting",
//     description: "Brighten your home with stylish lamps and lights",
//     image:
//       "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
//     products: ProductData.filter((p) => p.category === "Lighting"),
//   },
//   {
//     title: "Home Decor",
//     description: "Accessories and decor to personalize your space",
//     image:
//       "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
//     products: ProductData.filter((p) => p.category === "Home Decor"),
//   },
//   {
//     title: "Textiles",
//     description: "Soft textiles for comfort and style",
//     image:
//       "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop",
//     products: ProductData.filter((p) => p.category === "Textiles"),
//   },
//   {
//     title: "Kitchen",
//     description: "High-end kitchenware and dining essentials",
//     image:
//       "https://images.unsplash.com/photo-1556910101-a5f9f74b01d9?w=400&h=400&fit=crop",
//     products: ProductData.filter((p) => p.category === "Kitchen"),
//   },
// ].map((category) => ({
//   ...category,
//   totalProducts: category.products.length,
// })
// );
