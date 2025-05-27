import React from "react";
import Image from "next/image";
import image1 from "@/assets/dish/choose1.png";
import image2 from "@/assets/dish/choose2.png";
import image3 from "@/assets/dish/choose3.png";
import {FaPlay} from "react-icons/fa6"
import MyButton from "@/components/ui/myButton";

const AboutUsHeroSection = () => {
  return (
    <div className="grid grid-flow-row lg:grid-flow-col lg:justify-items-end gap-10 sm:px-4 md:px-8 lg:px-16 lg:justify-around text-black">
      <div className="grid grid-cols-2 gap-4 w-full  ">
        <div className="row-span-full h-64 sm:h-80 md:h-96 lg:h-[500px] md:w-auto self-start  ">
          <Image
            src={image1}
            alt="food"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        <div className="grid grid-flow-row  md:grid-flow-row gap-4 lg:mt-12 ">
          <div className="h-32 sm:h-40 md:h-48 lg:h-60 ">
            <Image
              src={image2}
              alt="food"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="h-32 sm:h-40 md:h-48 lg:h-80">
            <Image
              src={image3}
              alt="food"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center gap-6">
        <h2 className="text-yellow-500 font-Great_Vibes text-xl lg:text-2xl">
          About _______
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Food is an important part Of a balanced Diet
        </h1>
        <p className="text-sm sm:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          repudiandae. Voluptatum sint error veritatis tempora recusandae,
          similique nemo nostrum labore.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <MyButton title="Show More" rounded="rounded-lg" />
          <div className="flex items-center gap-2">
            <div className="p-3 sm:p-4 rounded-full bg-yellow-500">
             <FaPlay/>
            </div>
            <h4 className="font-semibold text-base sm:text-lg">Watch Video</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
