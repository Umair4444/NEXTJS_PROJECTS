"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import MyButton from "../ui/myButton";
import SideLogoBar from "../ui/side-logo-bar";

export function HeroSection() {
  const [data, setData] = useState<any[]>([]);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "hero"]{
        _id, content, preheading, heading, poster
      }`;
      const result = await client.fetch(query);
      setData(result || []);
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Main Page Hero Component Section */}
      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block mt-10">
          <SideLogoBar />
        </div>

        {data.length === 0 ? (
          <div className="text-center w-full h-screen pt-[25%]">
            No items to display in the carousel.
          </div>
        ) : (
          <Carousel
            className="w-full"
            plugins={[autoplayPlugin.current]}
            onMouseEnter={autoplayPlugin.current.stop}
            onMouseLeave={autoplayPlugin.current.reset}
          >
            <CarouselContent className="w-fit">
              {data.map((item: any) => (
                <CarouselItem key={item._id}>
                  <div className="w-2/3 md:w-full h-auto items-center justify-center px-5  md:m-0 ">
                    <Card className="border-none h-auto">
                      <CardContent className="flex flex-col-reverse md:flex-row items-center justify-center p-6 text-white bg-black">
                        {/* Text Section */}
                        <div className="w-full md:w-5/12 text-center md:text-left flex flex-col gap-4 items-center justify-center mb-5 md:mb-0 md:mt-12 lg:mt-16 xl:mt-20">
                          <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center md:text-left w-full">
                            {item.preheading}
                          </h3>
                          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-6xl text-center md:text-left font-bold lg:mb-5">
                            <span className="text-[#FF9F0D]">
                              {item.heading.slice(0, 3)}
                            </span>
                            {item.heading.slice(3)}
                          </h1>
                          <p className="text-sm md:text-base text-left font-normal">
                            {item.content}
                          </p>
                          <div className="flex justify-center w-full mt-5">
                            <MyButton
                              title="See Menu"
                              width="w-72 md:w-fit"
                              xpadding="px-8 md:px-12"
                              ypadding="py-2 md:py-4"
                              rounded="rounded-xl md:rounded-full"
                            />
                          </div>
                        </div>

                        {/* Image Section */}
                        <div className="flex justify-center items-center w-full md:w-7/12 mb-5 md:mb-0">
                          <Image
                            src={urlFor(item.poster).url()}
                            width={300}
                            height={300}
                            alt={item.handling || "Hero Image"}
                            className="w-full h-auto object-cover"
                            priority
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Arrows */}
            <div className="absolute top-1/2 left-0  z-10">
              <CarouselPrevious className="bg-black text-yellow-500 p-4 rounded-full lg:p-6" />
            </div>
            <div className="absolute top-1/2 right-0 lg:right-10 z-10 md:mr-4 lg:mr-2">
              <CarouselNext className="bg-black text-yellow-500 p-4 rounded-full lg:p-6" />
            </div>
          </Carousel>
        )}
      </div>
    </>
  );
}
