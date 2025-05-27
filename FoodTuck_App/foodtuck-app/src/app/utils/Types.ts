export interface IProduct {
  quantity: any;
  id: string;
  title: string;
  slug: string;
  category: string;
  mealoftheday: string;
  chef: string;
  available: boolean;
  description: string;
  image: string;
  tags: string[];
  flavors: string[];
  toppings: string[];
  price: number;
  discount: number;
  availability: boolean;
  uuid: number;
}

export type ICart = {
  [x: string]: any;
  Product_id: IProduct;
  id: number;
  title: string;
  image: string;
  availability: boolean;
  slug: string;
  category: string;
  description: string;
  flavors: string[];
  topping: string[];
  uuid: string | number | undefined;
  price: number;
  quantity: number;
  discount: number | string;
};
export type IWish = {
  Product_id: IProduct;
  id: number;
  title: string;
  image: string;
  availability: boolean;
  slug: string;
  category: string;
  description: string;
  price: number;
  uuid: string | number | undefined;
};
export type IOrder = {
  [x: string]: any;
  Product_id: IProduct;
  Cart_id: ICart;
  id: number;
  title: string;
  image: string[];
  slug: string;
  price: number;
  category: string;
  description: string;
  flavors: string[];
  topping: string[];
  quantity: number;
  discount: number;
  uuid: string | number | undefined;
};

export type IRider = {
  [x: string]: any;
  Product_id: number;
  Cart_id: ICart;
  Order_id: number;
  id: number;
  "rider-name": string;
  "rider-vechile-number": string;
  "delivery-name": string;
  "delivery-address": string;
  "delivery-contact-no": string;
  "delivery-time": Date;
};

export interface IBlog {
  [x: string]: any;
  id: string;
  title: string;
  slug: string;
  content: string;
  summary: string;
  author: string;
  image: string;
  tags: string[];
  category: string;
  createdAt: string;
  updatedAt?: string;
  isPublished: boolean;
  comments: {
    id: number;
    user: string;
    message: string;
    createdAt: string;
  }[];
}
