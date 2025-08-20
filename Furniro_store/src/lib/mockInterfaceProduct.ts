export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription?: string;
  isNew?: boolean;
  isOnSale?: boolean;
  discount?: number;
  rating: number;
  reviewCount: number;
  sku: string;
  inStock: boolean;
  stockCount: number;
  images: string[];
  colors?: string[];
  sizes?: string[];
  materials?: string[];
  specifications: {
    dimensions: string;
    weight: string;
    material: string;
    color?: string;
    warranty: string;
    assembly?: string;
    maxWeight?: string;
    origin?: string;
  };
  features?: string[];
  sustainability?: string[];
  tags?: string[];
}

export interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isOnSale?: boolean;
  originalPrice?: number;
}

export interface ProductData {
  id: string;
  name: string;
  images: string[];
  price: number;
  originalPrice?: number;
  isOnSale?: boolean;
  discount?: number;
  isNew?: boolean;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  colors?: string[];
  sizes?: string[];
  stockCount: number;
  inStock: boolean;
  sku: string;
  tags?: string[];
}
