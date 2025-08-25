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
    title: "Facebook Clone",
    link: "https://facebookclone-henna.vercel.app/",
    target: "blank",
  },
  {
    src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3070&q=80",
    title: "Youtube Clone",
    link: "https://youtube-clone-gold-alpha.vercel.app/",
    target: "blank",
  },
  {
    src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
    title: "Google Clone",
    link: "https://googleclone-mauve.vercel.app/",
    target: "blank",
  },
  {
    src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3070&q=80",
    title: "Tiktok Clone",
    link: "https://tiktok-clone-ten.vercel.app/",
    target: "blank",
  },
  {
    src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
    title: "Governor Initiative Clone",
    link: "https://governor-website-clone-project.vercel.app/",
    target: "blank",
  },
];
