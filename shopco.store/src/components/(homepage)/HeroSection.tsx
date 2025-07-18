import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { ArrowUpRight } from "lucide-react";

interface Hero {
  _id: string;
  title: string;
  content: string;
  buttontext: string;
  poster: string;
}

const HeroSection = async () => {
  // ✅ Server-side fetching
  const query = `*[_type == "hero"]{
            _id,
            title,
            content,
            buttontext,
            "poster": poster.asset->url
            }`;
  const hero = await client.fetch(query);

  if (!hero || hero.length === 0) return <p>No hero data found.</p>;

  return (
    <>
      <div className="max-w-7xl mx-auto px-8 py-12 md:py-4">
        {hero.map((block: Hero) => (
          <div
            className="grid md:grid-cols-2 gap-12 items-center"
            key={block._id}
          >
            <div className="grid col-2 space-y-8 max-w-max text-center items-center">
              <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight">
                {block.title}
              </h1>
              <p className="text-gray-600  text-lg lg:text-2xl">
                {block.content}
              </p>
              <Button asChild size="lg" className="rounded-full px-12 w-full">
                <Link href="/products">{block.buttontext}</Link>
              </Button>
              <div className="hidden md:grid gap-4 items-center py-10 px-2 grid-cols-2">
                <Button
                  asChild
                  size="lg"
                  variant="link"
                  className="rounded-full border-4 border-black hover:border-transparent/5 px-12 w-full bg-transparent text-black hover:text-white hover:bg-black"
                >
                  <Link href="/products">
                    Winter Collections <ArrowUpRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="link"
                  className="rounded-full border-4 border-black hover:border-transparent/5 px-12 w-full bg-transparent text-black hover:text-white hover:bg-black"
                >
                  <Link href="/products">
                    Weekend Deals <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={urlFor(block.poster).url()}
                alt="Trendy fashionable couple"
                width={500}
                height={500}
                className="rounded-lg sm:aspect-[11/12] md:aspect-auto object-cover sm:mx-20 sm:px-12 md:m-0 md:p-0"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
