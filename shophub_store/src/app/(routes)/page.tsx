import { Hero } from "@/components/(marketing)/hero";
import { FeaturedProducts } from "@/components/(products)/featured-products";
import { Categories } from "@/components/(products)/categories";
import { Newsletter } from "@/components/(marketing)/newsletter";

export default function HomePage() {
  return (
    <div className="min-h-screen">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Newsletter />
    </div>
  );
}
