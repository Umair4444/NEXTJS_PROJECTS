import { create } from "zustand";
import { client } from "@/sanity/lib/client";
import { Brand, Product } from "@/hooks/sanityTypes";

interface SanityState {
  brands: Brand[];
  products: Product[];
  isLoading: boolean;
  fetchAll: () => Promise<void>;
}

export const useSanityStore = create<SanityState>((set) => ({
  brands: [],
  products: [],
  isLoading: false,

  fetchAll: async () => {
    set({ isLoading: true });
    try {
      const [brands, products] = await Promise.all([
        client.fetch(`*[_type == "brand"]{
          _id, name, slug, description, isPremium, btnText,
          "image": image.asset->url,
          targetCustomer[]->{_id, title, slug},
          category[]->{_id, title, slug},
          }`),

        client.fetch(`*[_type == "product"]{
            _id,name,price,originalPrice,discount,btnText,
            "slug": slug.current,
            description, productDescription, 
            isNew, isOnSale, rating,
            "image": image.asset->url,
            "images": images[].asset->url,
            colors[]->{_id, productColor, hex},
            genderCategories[]->{_id, title, slug},
            typeCategories[]->{_id, title, slug},
            sizes[]->{_id, productSize},
            faq[]->{_id, question, answer}}`),
      ]);

      set({
        brands,
        products,
        isLoading: false,
      });
    } catch (err) {
      console.error("Failed to fetch data:", err);
      set({ isLoading: false });
    }
  },
}));
