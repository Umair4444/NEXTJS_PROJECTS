export interface Category {
  _id: string;
  title: string;
  slug: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  description: string;
  btnText: string;
  image: string;
  brandCategory: Category[];
  logo: string;
  IsFeatured: boolean;
  isPremium: boolean;
  founded: string;
  country: string;
  priceRange: "Budget" | "Mid-Range" | "Premium" | "Luxury";
  specialties: string[];
  productCount: number;
}

export const brands: Brand[] = [
  {
    _id: "versace",
    name: "Versace",
    slug: "versace",
    description:
      "Italian luxury fashion company known for glamorous designs and bold prints.",
    btnText: "Shop Now",
    image: "/placeholder.svg",
    logo: "/placeholder.svg?height=80&width=120",
    brandCategory: [{ _id: "luxury", title: "Luxury", slug: "luxury" }],
    IsFeatured: true,
    isPremium: true,
    founded: "1978",
    country: "Italy",
    priceRange: "Luxury",
    specialties: ["Evening Wear", "Accessories", "Fragrances"],
    productCount: 156,
  },
  {
    _id: "zara",
    name: "Zara",
    slug: "zara",
    description:
      "Spanish apparel retailer known for fast fashion and trendy styles.",
    btnText: "Explore Now",
    image: "/placeholder.svg",
    logo: "/placeholder.svg?height=80&width=120",
    brandCategory: [{ _id: "trendy", title: "Trendy", slug: "trendy" }],
    IsFeatured: true,
    isPremium: false,
    founded: "1974",
    country: "Spain",
    priceRange: "Mid-Range",
    specialties: ["Casual Wear", "Fast Fashion", "Accessories"],
    productCount: 200,
  },
  {
    _id: "nike",
    name: "Nike",
    slug: "nike",
    description: "Global leader in athletic footwear, apparel, and equipment.",
    btnText: "Shop Now",
    image: "/placeholder.svg",
    logo: "/placeholder.svg?height=80&width=120",
    brandCategory: [
      { _id: "sportswear", title: "Sportswear", slug: "sportswear" },
    ],
    IsFeatured: true,
    isPremium: false,
    founded: "1964",
    country: "United States",
    priceRange: "Mid-Range",
    specialties: ["Athletic Wear", "Shoes", "Gear"],
    productCount: 320,
  },
  {
    _id: "gucci",
    name: "Gucci",
    slug: "gucci",
    description:
      "Luxury fashion brand from Italy known for bold, high-end designs.",
    btnText: "Discover Now",
    image: "/placeholder.svg",
    logo: "/placeholder.svg?height=80&width=120",
    brandCategory: [{ _id: "luxury", title: "Luxury", slug: "luxury" }],
    IsFeatured: true,
    isPremium: true,
    founded: "1921",
    country: "Italy",
    priceRange: "Luxury",
    specialties: ["Fashion", "Leather Goods", "Fragrances"],
    productCount: 185,
  },
  {
    _id: "uniqlo",
    name: "Uniqlo",
    slug: "uniqlo",
    description: "Japanese casual wear designer, manufacturer and retailer.",
    btnText: "Browse Now",
    image: "/placeholder.svg",
    logo: "/placeholder.svg?height=80&width=120",
    brandCategory: [{ _id: "casual", title: "Casual", slug: "casual" }],
    IsFeatured: false,
    isPremium: false,
    founded: "1949",
    country: "Japan",
    priceRange: "Budget",
    specialties: ["Casual Wear", "Basics", "Functional Fashion"],
    productCount: 210,
  },
  {
    _id: "balenciaga",
    name: "Balenciaga",
    slug: "balenciaga",
    description: "Luxury fashion house known for edgy and innovative designs.",
    btnText: "View Collection",
    image: "/placeholder.svg",
    logo: "/placeholder.svg?height=80&width=120",
    brandCategory: [{ _id: "luxury", title: "Luxury", slug: "luxury" }],
    IsFeatured: false,
    isPremium: true,
    founded: "1919",
    country: "Spain",
    priceRange: "Luxury",
    specialties: ["Fashion", "Sneakers", "Streetwear"],
    productCount: 132,
  },
  {
    _id: "adidas",
    name: "Adidas",
    slug: "adidas",
    description: "German multinational known for sportswear and athletic gear.",
    btnText: "Find Your Fit",
    image: "/placeholder.svg",
    logo: "/placeholder.svg?height=80&width=120",
    brandCategory: [
      { _id: "sportswear", title: "Sportswear", slug: "sportswear" },
    ],
    IsFeatured: true,
    isPremium: false,
    founded: "1949",
    country: "Germany",
    priceRange: "Mid-Range",
    specialties: ["Footwear", "Tracksuits", "Performance Wear"],
    productCount: 278,
  },
  {
    _id: "hm",
    name: "H&M",
    slug: "h-and-m",
    description:
      "Swedish fast-fashion clothing company offering modern basics.",
    btnText: "Get Started",
    image: "/placeholder.svg",
    logo: "/placeholder.svg?height=80&width=120",
    brandCategory: [{ _id: "trendy", title: "Trendy", slug: "trendy" }],
    IsFeatured: false,
    isPremium: false,
    founded: "1947",
    country: "Sweden",
    priceRange: "Budget",
    specialties: ["Basics", "Trendy Fashion", "Collaborations"],
    productCount: 350,
  },
  {
    _id: "prada",
    name: "Prada",
    slug: "prada",
    description:
      "Italian luxury fashion house known for sophisticated designs.",
    btnText: "Experience Luxury",
    image: "/placeholder.svg",
    logo: "/placeholder.svg?height=80&width=120",
    brandCategory: [{ _id: "luxury", title: "Luxury", slug: "luxury" }],
    IsFeatured: true,
    isPremium: true,
    founded: "1913",
    country: "Italy",
    priceRange: "Luxury",
    specialties: ["Bags", "Runway Fashion", "Eyewear"],
    productCount: 145,
  },
  {
    _id: "gap",
    name: "GAP",
    slug: "gap",
    description: "American clothing and accessories retailer known for basics.",
    btnText: "Shop the Look",
    image: "/placeholder.svg",
    logo: "/placeholder.svg?height=80&width=120",
    brandCategory: [{ _id: "casual", title: "Casual", slug: "casual" }],
    IsFeatured: false,
    isPremium: false,
    founded: "1969",
    country: "United States",
    priceRange: "Budget",
    specialties: ["Denim", "T-Shirts", "Hoodies"],
    productCount: 220,
  },
];

export function getBrandById(id: string): Brand | undefined {
  return brands.find((brand) => brand._id === id);
}

export function getFeaturedBrands(): Brand[] {
  return brands.filter((brand) => brand.IsFeatured);
}

export function getPremiumBrands(): Brand[] {
  return brands.filter((brand) => brand.isPremium);
}

export function getBrandsByCategory(categorySlug: string): Brand[] {
  return brands.filter((brand) =>
    brand.brandCategory.some((cat) => cat.slug === categorySlug)
  );
}

export function getBrandCategories(): string[] {
  const categories = brands.flatMap((brand) =>
    brand.brandCategory.map((c) => c.title)
  );
  return Array.from(new Set(categories));
}
