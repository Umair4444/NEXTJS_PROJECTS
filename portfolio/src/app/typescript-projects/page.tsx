import { ParallaxScroll } from "@/components/ui/Parallax-Scroll";

export default function ParallaxScrollDemo() {
  return (
    <>
      <div className="text-center font-bold text-3xl pt-10">
        <h1>NextJs Utility Apps</h1>
      </div>
      <ParallaxScroll images={imageCards} />
    </>
  );
}

const imageCards = [
  {
    src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
    title: "Clock, Timer, Stopwatch & Alarm Widgets",
    link: "https://clock-and-timer-widgets.vercel.app/",
    target: "blank",
  },
  {
    src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3070&q=80",
    title: "Converter, Calculator & Widgets",
    link: "https://widgets-utility-apps.vercel.app/",
    target: "blank",
  },
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    title: "Arcade Games Collection",
    link: "https://arcade-games-wheat.vercel.app/",
    target: "blank",
  },
  {
    src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&auto=format&fit=crop&w=3488&q=80",
    title: "Generator Tools Collection",
    link: "https://generatortools-five.vercel.app/",
    target: "blank",
  },
];
