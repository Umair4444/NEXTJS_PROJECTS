"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "hero"]{
    title,
    subtitle,
    ctaText,
    ctaLink,
    "imageUrl": image.asset->url,
    imageAlt
  }`;
      const result = await client.fetch(query);
      setData(result || []);
    };

    fetchData();
  }, []);

  return (
    <section className="w-full px-6 pt-4 pb-10 bg-white dark:bg-gray-900">
      {data.map((item) => (
        <div
          key={item.title}
          // className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10"
          className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-around gap-10"
        >
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {item.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {item.subtitle}
            </p>
            <Link
              href={item.ctaLink}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
            >
              {item.ctaText}
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src={item.imageUrl}
              alt={item.imageAlt}
              width={400}
              height={400}
              className="max-w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      ))}
    </section>
  );
}
