import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CardSlots from "./components/CardSlots";
import SliderSlots from "./components/SliderSlots";
import CoreCourse from "./components/CoreCourse";
import AdvancedCourse from "./components/AdvanceCourse";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CardSlots />
      <div className="w-full border-b-4 my-6 border-dashed"></div>
      <SliderSlots />
      <CoreCourse />
      <AdvancedCourse />
    </>
  );
}
