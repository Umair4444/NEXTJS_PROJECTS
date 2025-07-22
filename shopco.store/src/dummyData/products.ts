export interface Category {
  _id: string;
  title: string;
  slug: string;
}

export interface Color {
  _id: string;
  productColor: string;
  hex: string;
}

export interface Size {
  _id: string;
  productSize: string;
}

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  description: string;
  isPremium: boolean;
  btnText: string;
  image: string;
  targetCustomer: Category[];
  category: Category[];

  logo: string;
  featured: boolean;
  premium: boolean;
  founded: string;
  country: string;
  priceRange: "Budget" | "Mid-Range" | "Premium" | "Luxury";
  specialties: string[];
  productCount: number;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  discount: number;
  btnText: string;
  description: string;
  productDescription: string;
  isNew: boolean;
  isOnSale: boolean;
  rating: number;
  image: string;
  images: string[];
  colors: Color[];
  genderCategories: Category[];
  typeCategories: Category[];
  sizes: Size[];
  faq: FAQ[];
}

const categories: Category[] = [
  { _id: "cat1", title: "T-Shirts", slug: "t-shirts" },
  { _id: "cat2", title: "Jeans", slug: "jeans" },
  { _id: "cat3", title: "Shirts", slug: "shirts" },
  { _id: "cat4", title: "Shorts", slug: "shorts" },
  { _id: "cat5", title: "Women", slug: "women" },
  { _id: "cat6", title: "Men", slug: "men" },
];

const colors: Color[] = [
  { _id: "col1", productColor: "Black", hex: "#000000" },
  { _id: "col2", productColor: "White", hex: "#FFFFFF" },
  { _id: "col3", productColor: "Blue", hex: "#0000FF" },
  { _id: "col4", productColor: "Grey", hex: "#808080" },
  { _id: "col5", productColor: "Red", hex: "#FF0000" },
];

const sizes: Size[] = [
  { _id: "size1", productSize: "Small" },
  { _id: "size2", productSize: "Medium" },
  { _id: "size3", productSize: "Large" },
  { _id: "size4", productSize: "X-Large" },
];

const faqs: FAQ[] = [
  {
    _id: "faq1",
    question: "Is this product machine washable?",
    answer: "Yes, it is safe for machine washing with like colors.",
  },
  {
    _id: "faq2",
    question: "Does it shrink after wash?",
    answer: "No noticeable shrinkage if washed in cold water.",
  },
];

const brands: Brand[] = [
  {
    _id: "brand1",
    name: "UrbanWear",
    slug: "urbanwear",
    logo: "/placeholder.svg?height=80&width=120",
    description: "Trendy fashion for everyday wear.",
    isPremium: false,
    btnText: "Shop Now",
    image: "/images/brand1.png",
    targetCustomer: [categories[5]], // Men
    category: [categories[0], categories[1]], // T-Shirts, Jeans
    featured: true,
    premium: true,
    founded: "1978",
    country: "Italy",
    priceRange: "Luxury",
    specialties: ["Evening Wear", "Accessories", "Fragrances"],
    productCount: 156,
  },
  {
    _id: "brand2",
    name: "EliteStyle",
    slug: "elitestyle",
    logo: "/placeholder.svg?height=80&width=120",

    description: "Premium clothing with elegant designs.",
    isPremium: true,
    btnText: "Explore",
    image: "/images/brand2.png",
    targetCustomer: [categories[4]], // Women
    category: [categories[2], categories[3]], // Shirts, Shorts
    featured: true,
    premium: true,
    founded: "1978",
    country: "Italy",
    priceRange: "Luxury",
    specialties: ["Evening Wear", "Accessories", "Fragrances"],
    productCount: 156,
  },
];

export const products: Product[] = [
  {
    _id: "p1",
    name: "T-Shirt with Tape Details",
    slug: "tshirt-tape-details",
    price: 120,
    originalPrice: 150,
    discount: 30,
    btnText: "Add to Cart",
    description: "Soft breathable t-shirt with stylish tape lines.",
    productDescription: "Perfect for summer fashion, made of cotton blend.",
    isNew: true,
    isOnSale: true,
    rating: 4.5,
    image: "/images/product1.png",
    images: ["/images/product1.png", "/images/p1-2.png"],
    colors: [colors[0], colors[1], colors[2]],
    genderCategories: [categories[5]],
    typeCategories: [categories[0]],
    sizes: [sizes[0], sizes[1], sizes[2]],
    faq: faqs,
  },
  {
    _id: "p2",
    name: "Skinny Fit Jeans",
    slug: "skinny-fit-jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    btnText: "Buy Now",
    description: "Modern stretch-fit skinny jeans.",
    productDescription: "Crafted with premium denim for durability.",
    isNew: true,
    isOnSale: true,
    rating: 3.5,
    image: "/images/product2.png",
    images: ["/images/product2.png", "/images/p2-2.png"],
    colors: [colors[0], colors[3]],
    genderCategories: [categories[5]],
    typeCategories: [categories[1]],
    sizes: [sizes[1], sizes[2], sizes[3]],
    faq: faqs,
  },
  {
    _id: "p3",
    name: "Checkered Shirt",
    slug: "checkered-shirt",
    price: 180,
    btnText: "Order Now",
    originalPrice: 99,
    discount: 20,
    description: "Classic checkered design with button-up collar.",
    productDescription: "Made from soft brushed cotton for comfort.",
    isNew: false,
    isOnSale: true,
    rating: 4.7,
    image: "/images/product3.png",
    images: ["/images/product3.png", "/images/p3-2.png"],
    colors: [colors[2], colors[4]],
    genderCategories: [categories[5]],
    typeCategories: [categories[2]],
    sizes: [sizes[0], sizes[1]],
    faq: faqs,
  },
  {
    _id: "p4",
    name: "Striped Sleeve T-Shirt",
    slug: "striped-sleeve-tshirt",
    price: 130,
    originalPrice: 160,
    discount: 30,
    btnText: "Grab Deal",
    description: "Trendy striped sleeves with modern cut.",
    productDescription: "Lightweight and soft material ideal for all day wear.",
    isNew: false,
    isOnSale: true,
    rating: 4.3,
    image: "/images/product4.png",
    images: ["/images/product4.png"],
    colors: [colors[1], colors[3]],
    genderCategories: [categories[5]],
    typeCategories: [categories[0]],
    sizes: [sizes[1], sizes[2], sizes[3]],
    faq: faqs,
  },
  {
    _id: "p5",
    name: "Vertical Striped Shirt",
    slug: "vertical-striped-shirt",
    price: 212,
    originalPrice: 232,
    discount: 20,
    btnText: "Buy Now",
    description: "Elegant vertical stripes, great for formal events.",
    productDescription: "Soft feel fabric with reinforced stitching.",
    isNew: false,
    isOnSale: false,
    rating: 5.0,
    image: "/images/product5.png",
    images: ["/images/product5.png"],
    colors: [colors[0], colors[2]],
    genderCategories: [categories[5]],
    typeCategories: [categories[2]],
    sizes: [sizes[2], sizes[3]],
    faq: faqs,
  },
  {
    _id: "p6",
    name: "Graphic T-Shirt - Courage",
    slug: "courage-graphic-tshirt",
    price: 145,
    btnText: "Add to Bag",
    description: "Bold graphic design that inspires.",
    productDescription: "100% cotton, soft-touch and durable print.",
    isNew: false,
    isOnSale: false,
    originalPrice: 130,
    discount: 66,
    rating: 4.0,
    image: "/images/product6.png",
    images: ["/images/product6.png"],
    colors: [colors[0], colors[4]],
    genderCategories: [categories[5]],
    typeCategories: [categories[0]],
    sizes: [sizes[0], sizes[1]],
    faq: faqs,
  },
  {
    _id: "p7",
    name: "Loose Fit Bermuda Shorts",
    slug: "loose-fit-bermuda",
    price: 80,
    originalPrice: 55,
    discount: 10,
    btnText: "Buy Shorts",
    description: "Relaxed fit shorts with breathable fabric.",
    productDescription: "Best for summer and casual looks.",
    isNew: false,
    isOnSale: false,
    rating: 3.0,
    image: "/images/product7.png",
    images: ["/images/product7.png"],
    colors: [colors[1], colors[2]],
    genderCategories: [categories[5]],
    typeCategories: [categories[3]],
    sizes: [sizes[0], sizes[1], sizes[2]],
    faq: faqs,
  },
  {
    _id: "p8",
    name: "Faded Skinny Jeans",
    slug: "faded-skinny-jeans",
    price: 210,
    originalPrice: 200,
    discount: 30,
    btnText: "Order Now",
    description: "Slightly faded skinny jeans with cool washed look.",
    productDescription: "Excellent choice for fashion-forward casual wear.",
    isNew: false,
    isOnSale: false,
    rating: 4.5,
    image: "/images/product8.png",
    images: ["/images/product8.png"],
    colors: [colors[2], colors[3]],
    genderCategories: [categories[5]],
    typeCategories: [categories[1]],
    sizes: [sizes[1], sizes[2], sizes[3]],
    faq: faqs,
  },
  {
    _id: "p9",
    name: "Button Down Casual Shirt",
    slug: "button-down-casual-shirt",
    price: 195,
    originalPrice: 220,
    discount: 25,
    btnText: "Shop Now",
    description: "Button-down shirt for weekend getaways.",
    productDescription: "Blended fabric ensures wrinkle resistance.",
    isNew: true,
    isOnSale: true,
    rating: 4.2,
    image: "/images/product9.png",
    images: ["/images/product9.png"],
    colors: [colors[2], colors[4]],
    genderCategories: [categories[5]],
    typeCategories: [categories[2]],
    sizes: [sizes[1], sizes[2]],
    faq: faqs,
  },
  {
    _id: "p10",
    name: "High Waist Denim Shorts",
    slug: "high-waist-denim-shorts",
    price: 165,
    originalPrice: 100,
    discount: 10,
    btnText: "Add to Cart",
    description: "High-waisted shorts for a flattering silhouette.",
    productDescription: "Perfect match for crop tops and casual tees.",
    isNew: true,
    isOnSale: false,
    rating: 4.6,
    image: "/images/product10.png",
    images: ["/images/product10.png"],
    colors: [colors[1], colors[3]],
    genderCategories: [categories[4]],
    typeCategories: [categories[3]],
    sizes: [sizes[0], sizes[1]],
    faq: faqs,
  },
];

// export const getProductById = (id: string) =>
//   products && products.find((product) => product.slug === id);

export function getProductById(id: string): Product {
  const product = products.find((product) => product.slug === id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
}

export function getProductsByGenderCategory(slug: string): Product[] {
  return products.filter((product) =>
    product.genderCategories.some((category) => category.slug === slug)
  );
}

export function getProductsByTypeCategory(slug: string): Product[] {
  return products.filter((product) =>
    product.typeCategories.some((category) => category.slug === slug)
  );
}
export function getNewArrivals(): Product[] {
  return products.filter((product) => product.isNew);
}

export function getTopSelling(): Product[] {
  return products.filter((product) => product.rating >= 4.0);
}

export function getOnSaleProducts(): Product[] {
  return products.filter((product) => product.isOnSale);
}
