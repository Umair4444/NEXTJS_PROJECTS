// store/sanityStore.ts
import { create } from "zustand";
import { client } from "@/sanity/lib/client";

type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

type SanityStore = {
  productList: Product[];
  fetchProductList: () => Promise<void>;
};

export const useSanityStore = create<SanityStore>((set) => ({
  productList: [],
  fetchProductList: async () => {
    const data = await client.fetch(`*[_type == "product"]{
      _id,
      name,
      price,
      "image": image.asset->url
    }`);
    set({ productList: data });
  },
}));
