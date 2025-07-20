// store/useProductStore.ts
import { create } from "zustand";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  btnText?: string;
  description?: string;
  productDescription?: string;
  isNew?: boolean;
  isOnSale?: boolean;
  rating?: number;
  image: string;
  images: string[];
}

interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const query = `*[_type == "product"]{
        _id,
        name,
        "slug": slug.current,
        price,
        originalPrice,
        discount,
        btnText,
        description,
        productDescription,
        isNew,
        isOnSale,
        rating,
        "image": image.asset->url,
        "images": images[].asset->url
      }`;

      const data = await client.fetch(query);
      set({ products: data, loading: false });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch products",
        loading: false,
      });
    }
  },
}));
