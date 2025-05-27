import React from "react";
import Image from "next/image";
import aboutus1 from "@/assets/dish/aboutus_1.png";
import aboutus2 from "@/assets/dish/aboutus_2.png";
import aboutus3 from "@/assets/dish/aboutus_3.png";
import { Great_Vibes } from "next/font/google";
import MyButton from "../ui/myButton";
import { FaCheck } from "react-icons/fa6";

const great_Vibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

// Main Page About Us Section
const AboutUsHeroSection = () => {
  return (
    <div className=" w-full grid  grid-cols-1 lg:grid-cols-2 grid-rows-1 justify-items-center mt-5 md:mt-10 lg:mt-20 sm:gap-4 lg:gap-0">
      <div className=" w-8/12 grid gap-7 border-blue-300">
        <h3 className={`${great_Vibes.className} text-4xl text-[#FF9F0D] `}>
          about us
        </h3>
        <h1 className="text-5xl font-bold">
          <span className="text-[#FF9F0D] font-helvetica">We </span>
          Create the best foody product
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="flex gap-2 items-center">
          {/* checkbox */}
          <FaCheck />

          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <MyButton title="Read More" />
      </div>
      <div className=" grid w-9/12 md:10/12 lg:w-11/12 h-fit gap-4 row-start-1 lg:col-start-2 justify-center ">
        <div className="w-fit lg:w-full h-1/2 items-end">
          <Image src={aboutus1} alt="about-us" />
        </div>
        <div className="w-fit lg:w-full h-full grid grid-cols-2 gap-4 items-end">
          <div>
            <Image src={aboutus2} alt="aboutus" />
          </div>
          <div>
            <Image src={aboutus3} alt="aboutus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
