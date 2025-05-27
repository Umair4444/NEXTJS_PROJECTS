import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FlashSale from "./components/FlashSale";
import FlashSaleCard from "./components/FlashSaleCard";
import Category from "./components/Category";
import BestSellingProducts from "./components/BestSellingProducts";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  return (
    <>
      <div>
        {/* <HeroSection /> */}
        {/* <FlashSale /> */}
        {/* <Category /> */}
        {/* <BestSellingProducts/> */}
        <FeatureCard />
      </div>
    </>
  );
}
