import HeroSection from "@/components/HeroSec";
import FeatureBlogs from "@/components/FeaatureBlogs";
import { posts } from "@/components/FeatureBlogsData";
import TrendingTopics from "@/components/TrendingTopics";
import { topics } from "@/components/TrendingTopicsData";


export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <FeatureBlogs posts={posts} />
      <TrendingTopics topics={topics} />
    </main>
  );
}
