export interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images: string[];
  btnText: string;
  description: string;
  productDescription: string;
  isNew?: boolean;
  isOnSale?: boolean;
  rating?: number;

  sizes: {
    _id: string;
    name: string;
  }[];

  colors: {
    _id: string;
    name: string;
    hex: string;
  }[];

  genderCategories: {
    _id: string;
    title: string;
  }[];

  typeCategories: {
    _id: string;
    title: string;
  }[];

  brand: {
    _id: string;
    name: string;
    image: string;
    premium?: boolean;
    targetCustomer?: string;
    description?: string;
  };

  faq?: {
    _id: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
}
