# hooks/usehero.ts

<!-- For client-side rendering make HeroSection Component and fetch data there and then use that component in ssr like page.tsx
because zustland is a client component and async function does not allow csr in it
bad seo and perfomance -->

import { create } from "zustand";
import { client } from "@/sanity/lib/client";

interface Hero {
\_id: string;
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

# /page.tsx

    <!-- use this for client rendering -->

const { hero, fetchHero } = useHeroStore();
useEffect(() => {
const fetchData = async () => {
await fetchHero();
};
fetchData();
}, [fetchHero]);
