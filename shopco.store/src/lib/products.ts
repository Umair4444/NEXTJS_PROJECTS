export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  images: string[]
  rating: number
  reviews: number
  description: string
  category: string
  sizes: string[]
  colors: string[]
  isNew?: boolean
  isOnSale?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "T-SHIRT WITH TAPE DETAILS",
    price: 120,
    image: "/_next/static/media/model.0394a728.png",
    images: [
      "/_next/static/media/model.0394a728.png",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    rating: 4.5,
    reviews: 120,
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    category: "T-Shirts",
    sizes: ["Small", "Medium", "Large", "X-Large","XXL"],
    colors: ["Black", "White", "Navy"],
    isNew: true,
  },
  {
    id: "2",
    name: "SKINNY FIT JEANS",
    price: 240,
    originalPrice: 260,
    discount: 20,
    image: "/placeholder.svg?height=400&width=300",
    images: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    rating: 3.5,
    reviews: 85,
    description:
      "These skinny fit jeans are perfect for a modern look. Made from premium denim with stretch for comfort.",
    category: "Jeans",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black", "Grey"],
    isOnSale: true,
  },
  {
    id: "3",
    name: "CHECKERED SHIRT",
    price: 180,
    image: "/placeholder.svg?height=400&width=300",
    images: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    rating: 4.5,
    reviews: 95,
    description:
      "A classic checkered shirt that never goes out of style. Perfect for casual and semi-formal occasions.",
    category: "Shirts",
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: "4",
    name: "SLEEVE STRIPED T-SHIRT",
    price: 130,
    originalPrice: 160,
    discount: 30,
    image: "/placeholder.svg?height=400&width=300",
    images: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    rating: 4.5,
    reviews: 78,
    description: "A trendy striped t-shirt with unique sleeve design. Comfortable and stylish for everyday wear.",
    category: "T-Shirts",
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: ["White", "Black", "Navy"],
    isOnSale: true,
  },
  {
    id: "5",
    name: "VERTICAL STRIPED SHIRT",
    price: 212,
    originalPrice: 232,
    discount: 20,
    image: "/placeholder.svg?height=400&width=300",
    images: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    rating: 5.0,
    reviews: 142,
    description: "Elegant vertical striped shirt perfect for business casual and formal occasions.",
    category: "Shirts",
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: ["Blue", "Black", "White"],
  },
  {
    id: "6",
    name: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
    image: "/placeholder.svg?height=400&width=300",
    images: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    rating: 4.0,
    reviews: 67,
    description: "Inspirational graphic t-shirt with bold design. Made from premium cotton for maximum comfort.",
    category: "T-Shirts",
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: ["Black", "White", "Grey"],
  },
  {
    id: "7",
    name: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
    image: "/placeholder.svg?height=400&width=300",
    images: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    rating: 3.0,
    reviews: 45,
    description: "Comfortable loose fit bermuda shorts perfect for summer and casual outings.",
    category: "Shorts",
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: ["Khaki", "Navy", "Black"],
  },
  {
    id: "8",
    name: "FADED SKINNY JEANS",
    price: 210,
    image: "/placeholder.svg?height=400&width=300",
    images: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    rating: 4.5,
    reviews: 89,
    description: "Trendy faded skinny jeans with a modern distressed look. Perfect for casual styling.",
    category: "Jeans",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Light Blue", "Dark Blue", "Black"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getNewArrivals(): Product[] {
  return products.filter((product) => product.isNew)
}

export function getTopSelling(): Product[] {
  return products.filter((product) => product.rating >= 4.0)
}

export function getOnSaleProducts(): Product[] {
  return products.filter((product) => product.isOnSale)
}
