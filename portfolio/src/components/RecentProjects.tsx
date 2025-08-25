"use client";
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinCard";
import Image from "next/image";
import bg from "@/../public/bg.png";
import { FaLocationArrow } from "react-icons/fa6";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const RecentProjects = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="py-20">
      <h1 className="heading text-center">
        My Complete Collection Of{" "}
        <span className="text-purple">Projects Catalog</span>
      </h1>

      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full max-w-7xl mx-auto mt-10"
      >
        <CarouselContent>
          {projects.map(({ id, title, des, img, link, iconLists }) => (
            <CarouselItem
              key={id}
              className="md:basis-1/3 lg:basis-1/3 sm:basis-1/2 basis-full"
            >
              <div className="lg:min-h-[32.5rem] h-[25rem] flex justify-center items-center text-center">
                <PinContainer title={title} href={link}>
                  {/* Image Section */}
                  <div className="flex relative justify-center items-center h-[20vh] lg:h-[30vh] w-96 mb-10 overflow-hidden">
                    <div>
                      <Image src={bg} alt={title} />
                    </div>
                    <Image
                      src={img}
                      alt={title}
                      width={1000}
                      height={1000}
                      className="z-10 absolute bottom-0"
                    />
                  </div>

                  {/* Title */}
                  <h1 className="font-bold lg:text-lg md:text-base text-sm line-clamp-1">
                    {title}
                  </h1>

                  {/* Description */}
                  <p className="lg:text-base lg:font-normal font-light text-sm">
                    {des}
                  </p>

                  {/* Icons + Link */}
                  <div className="flex items-center justify-between mt-7 mb-3 text-nowrap">
                    <div className="flex justify-end items-center">
                      <div className="grid grid-cols-4 gap-2">
                        {iconLists.map((icon: string, index: number) => (
                          <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-12 lg:h-12 w-8 h-8 flex justify-center items-center"
                          >
                            <Image
                              src={icon}
                              alt="tech-stack"
                              width={400}
                              height={400}
                              className="p-2"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center items-center mx-4">
                        <p className="flex md:text-sm lg:text-lg text-xs text-purple">
                          Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </div>
                    </div>
                  </div>
                </PinContainer>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        <CarouselPrevious />
        <CarouselNext />

        {/* Dot navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === selectedIndex ? "bg-white" : "bg-gray-700"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default RecentProjects;
