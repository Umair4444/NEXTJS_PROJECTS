import { getTopSelling } from "@/dummyData/products";
import Link from "next/link";
import { ProductCard } from "../(cards)/ProductCard";
import { Button } from "../ui/button";

const TopSelling = () => {
  const topSelling = getTopSelling();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          TOP SELLING
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topSelling.slice(0, 4).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-12 bg-transparent"
            asChild
          >
            <Link href="/products?isnew=true">View All</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default TopSelling;
