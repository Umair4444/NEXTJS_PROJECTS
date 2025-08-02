import { ParallaxScroll } from "@/components/ui/Parallax-Scroll";

export default function ParallaxScrollDemo() {
  return (
    <>
      <div className="text-center font-bold text-3xl pt-10">
        <h1>Typescript Projects</h1>
      </div>
      <ParallaxScroll images={imageCards} />
    </>
  );
}

const imageCards = [
  {
    src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
    title: "Sunset Over the Mountains",
    link: "/",
  },
  {
    src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3070&q=80",
    title: "Deep Forest",
    link: "/",
  },
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    title: "Starry Night Sky",
    link: "/",
  },
  {
    src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&auto=format&fit=crop&w=3488&q=80",
    title: "Majestic Waterfall",
    link: "/",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=3570&q=80",
    title: "Snowy Mountains",
    link: "/",
  },
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    title: "Misty Forest",
    link: "/",
  },
];
