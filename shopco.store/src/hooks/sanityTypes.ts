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
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discount?: number;
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
