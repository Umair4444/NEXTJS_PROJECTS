// // server-side rendering
// import { client } from "@/sanity/lib/client";

// interface Hero {
//   _id: string;
//   title: string;
//   content: string;
//   buttontext: string;
//   poster: string;
// }

// interface HeroStore {
//   fetchHero: () => Promise<void>;
// }

// export const fetchHero  = async () => {
//   const query = `*[_type == "hero"]{
//     _id,
//     title,
//     content,
//     buttontext,
//     "poster": poster.asset->url
//   }`;
//   return await client.fetch(query);
// };

// client-side rendering
import { create } from "zustand";
// Option 1: Use the fetcher function from above
// import { fetchHeroFromSanity } from "@/lib/fetchHero";
import { client } from "@/sanity/lib/client";

interface Hero {
  _id: string;
  title: string;
  content: string;
  buttontext: string;
  poster: string;
}

interface HeroStore {
  hero: Hero[];
  fetchHero: () => Promise<void>;
}

export const useHeroStore = create<HeroStore>((set) => ({
  hero: [],
  fetchHero: async () => {
    try {
      // Option 1: Use external fetcher
      // const data = await fetchHeroFromSanity();

      // Option 2: Inline the query
      const query = `*[_type == "hero"]{
        _id,
        title,
        content,
        buttontext,
        "poster": poster.asset->url
      }`;
      const data = await client.fetch(query);
      set({ hero: data });
    } catch (error) {
      console.error("Failed to fetch hero content:", error);
    }
  },
}));
