"use client";

import { ParallaxScroll } from "@/components/ui/Parallax-Scroll";
import { Button } from "@/components/ui/button"; // assuming you use shadcn/ui
import { useRouter } from "next/navigation";

export default function ParallaxScrollDemo() {
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center justify-between px-6 pt-6">
        <Button variant="secondary" onClick={() => router.back()}>
          ← Back
        </Button>
        <h1 className="text-center font-bold text-3xl flex-1">
          NextJs Utility Apps
        </h1>
      </div>
      <ParallaxScroll images={imageCards} />
    </div>
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
  {
    src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&auto=format&fit=crop&w=3488&q=80",
    title: "Word Tools Collection",
    link: "https://word-tools.vercel.app/",
    target: "blank",
  },
  {
    src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&auto=format&fit=crop&w=3488&q=80",
    title: "Multimedia Tools Collection",
    link: "https://multimedia-utility-app.vercel.app/",
    target: "blank",
  },
  {
    src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&auto=format&fit=crop&w=3488&q=80",
    title: "Resume builder",
    link: "https://resume-builder-black-psi.vercel.app/",
    target: "blank",
  },
];
