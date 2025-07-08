export interface Brand {
  id: string
  name: string
  logo: string
  description: string
  category: string
  featured: boolean
  premium: boolean
  founded: string
  country: string
  priceRange: "Budget" | "Mid-Range" | "Premium" | "Luxury"
  specialties: string[]
  productCount: number
}

export const brands: Brand[] = [
  {
    id: "versace",
    name: "Versace",
    logo: "/placeholder.svg?height=80&width=120",
    description: "Italian luxury fashion company known for glamorous designs and bold prints.",
    category: "Luxury",
    featured: true,
    premium: true,
    founded: "1978",
    country: "Italy",
    priceRange: "Luxury",
    specialties: ["Evening Wear", "Accessories", "Fragrances"],
    productCount: 156,
  },
  {
    id: "zara",
    name: "Zara",
    logo: "/placeholder.svg?height=80&width=120",
    description: "Spanish fast fashion retailer known for trendy, affordable clothing.",
    category: "Fast Fashion",
    featured: true,
    premium: false,
    founded: "1975",
    country: "Spain",
    priceRange: "Mid-Range",
    specialties: ["Trendy Fashion", "Workwear", "Casual Wear"],
    productCount: 324,
  },
  {
    id: "gucci",
    name: "Gucci",
    logo: "/placeholder.svg?height=80&width=120",
    description: "Italian luxury brand known for leather goods, fashion, and accessories.",
    category: "Luxury",
    featured: true,
    premium: true,
    founded: "1921",
    country: "Italy",
    priceRange: "Luxury",
    specialties: ["Leather Goods", "Handbags", "Shoes"],
    productCount: 198,
  },
  {
    id: "prada",
    name: "Prada",
    logo: "/placeholder.svg?height=80&width=120",
    description: "Italian luxury fashion house specializing in leather handbags and accessories.",
    category: "Luxury",
    featured: true,
    premium: true,
    founded: "1913",
    country: "Italy",
    priceRange: "Luxury",
    specialties: ["Handbags", "Shoes", "Ready-to-Wear"],
    productCount: 142,
  },
  {
    id: "calvin-klein",
    name: "Calvin Klein",
    logo: "/placeholder.svg?height=80&width=120",
    description: "American fashion brand known for minimalist designs and underwear.",
    category: "Contemporary",
    featured: true,
    premium: false,
    founded: "1968",
    country: "USA",
    priceRange: "Mid-Range",
    specialties: ["Underwear", "Jeans", "Fragrances"],
    productCount: 267,
  },
  {
    id: "nike",
    name: "Nike",
    logo: "/placeholder.svg?height=80&width=120",
    description: "American multinational corporation known for athletic footwear and apparel.",
    category: "Sportswear",
    featured: false,
    premium: false,
    founded: "1964",
    country: "USA",
    priceRange: "Mid-Range",
    specialties: ["Athletic Wear", "Sneakers", "Sports Equipment"],
    productCount: 189,
  },
  {
    id: "adidas",
    name: "Adidas",
    logo: "/placeholder.svg?height=80&width=120",
    description: "German multinational corporation known for athletic shoes and clothing.",
    category: "Sportswear",
    featured: false,
    premium: false,
    founded: "1949",
    country: "Germany",
    priceRange: "Mid-Range",
    specialties: ["Athletic Wear", "Sneakers", "Sports Accessories"],
    productCount: 156,
  },
  {
    id: "hm",
    name: "H&M",
    logo: "/placeholder.svg?height=80&width=120",
    description: "Swedish multinational clothing-retail company known for fast-fashion.",
    category: "Fast Fashion",
    featured: false,
    premium: false,
    founded: "1947",
    country: "Sweden",
    priceRange: "Budget",
    specialties: ["Trendy Fashion", "Basics", "Kids Clothing"],
    productCount: 298,
  },
  {
    id: "uniqlo",
    name: "Uniqlo",
    logo: "/placeholder.svg?height=80&width=120",
    description: "Japanese casual wear designer and retailer known for quality basics.",
    category: "Casual",
    featured: false,
    premium: false,
    founded: "1949",
    country: "Japan",
    priceRange: "Mid-Range",
    specialties: ["Basics", "Outerwear", "Innovative Fabrics"],
    productCount: 134,
  },
  {
    id: "tommy-hilfiger",
    name: "Tommy Hilfiger",
    logo: "/placeholder.svg?height=80&width=120",
    description: "American premium clothing brand known for classic American style.",
    category: "Contemporary",
    featured: false,
    premium: false,
    founded: "1985",
    country: "USA",
    priceRange: "Mid-Range",
    specialties: ["Preppy Style", "Denim", "Polo Shirts"],
    productCount: 176,
  },
  {
    id: "ralph-lauren",
    name: "Ralph Lauren",
    logo: "/placeholder.svg?height=80&width=120",
    description: "American fashion company known for luxury lifestyle products.",
    category: "Luxury",
    featured: false,
    premium: true,
    founded: "1967",
    country: "USA",
    priceRange: "Premium",
    specialties: ["Polo Shirts", "Luxury Lifestyle", "Home Goods"],
    productCount: 203,
  },
  {
    id: "levis",
    name: "Levi's",
    logo: "/placeholder.svg?height=80&width=120",
    description: "American clothing company known for denim jeans and casual wear.",
    category: "Denim",
    featured: false,
    premium: false,
    founded: "1853",
    country: "USA",
    priceRange: "Mid-Range",
    specialties: ["Denim", "Jeans", "Casual Wear"],
    productCount: 145,
  },
]

export function getBrandById(id: string): Brand | undefined {
  return brands.find((brand) => brand.id === id)
}

export function getFeaturedBrands(): Brand[] {
  return brands.filter((brand) => brand.featured)
}

export function getPremiumBrands(): Brand[] {
  return brands.filter((brand) => brand.premium)
}

export function getBrandsByCategory(category: string): Brand[] {
  return brands.filter((brand) => brand.category === category)
}

export function getBrandCategories(): string[] {
  return Array.from(new Set(brands.map((brand) => brand.category)))
}
