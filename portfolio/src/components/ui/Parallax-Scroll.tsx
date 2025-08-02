"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: {
    src: string;
    link: string;
    title: string;
  }[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "h-[40rem] overflow-y-auto w-full scrollbar-hide",
        className
      )}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-10 py-40 px-10">
        {/* Column 1 */}
        <motion.div style={{ y: translateFirst }} className="grid gap-10">
          {firstPart.map((el, idx) => (
            <ImageCard key={"col-1-" + idx} {...el} />
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: translateSecond }} className="grid gap-10">
          {secondPart.map((el, idx) => (
            <ImageCard key={"col-2-" + idx} {...el} />
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: translateThird }} className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <ImageCard key={"col-3-" + idx} {...el} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Reusable Image Card Component
const ImageCard = ({
  src,
  title,
  link,
}: {
  src: string;
  title: string;
  link: string;
}) => (
  <Link href={link}>
    <div className="group cursor-pointer">
      <Image
        src={src}
        className="h-80 w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        height={400}
        width={400}
        alt={title}
        priority
      />
      <div className="p-4">
        <h3 className="text-lg text-center font-semibold">{title}</h3>
      </div>
    </div>
  </Link>
);
