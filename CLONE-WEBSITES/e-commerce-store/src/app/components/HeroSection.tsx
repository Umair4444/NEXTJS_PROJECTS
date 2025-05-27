import React from "react";
import Image from "next/image";
import Link from "next/link";
import rightArrow from "@/../public/Fill with Right Arrow.png";
import rightArrow2 from "@/../public/Vector (1).png";
import heroImage from "@/../public/hero_endframe__cvklg0xk3w6e_large 2.png";
import apple from "@/../public/apple.png";
import dot from "@/../public/Ellipse 10.png";

const HeroSection = () => {
  return (
    <div className="w-screen mt-10 flex p-1">
      <div className="w-3/12 ml-14 flex items-start">
        <ul className="flex flex-col gap-4">
          <li>Woman's Fashion</li>
          <li>Men's Fashion</li>
          <li>Electronics</li>
          <li>Home & LifeStyle</li>
          <li>Medicine</li>
          <li>Sports and Outdoor</li>
          <li>Baby and Toy's</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
        <div className="flex flex-col gap-3 ml-16">
          <Image src={rightArrow} alt="arrow" width={30} className="" />
          <Image src={rightArrow} alt="arrow" width={30} className="" />
        </div>
      </div>

      <div className="w-9/12 flex flex-col bg-black text-white">
        <div className="flex bg-black text-white">
          <div className="w-1/2 p-16 flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <Image src={apple} alt="apple" width={40} />
              <h3 className="text-[16px] font-normal">iPhone 14 Series</h3>
            </div>
            <div>
              <h1 className="text-5xl font-semibold tracking-wider w-80 leading-tight">
                Up to 10% off Voucher
              </h1>
            </div>
            <div className="flex items-center gap-4 px-2 underline-offset-8 tracking-wider">
              <Link href={""} className="underline">
                Shop Now
              </Link>
              <Image src={rightArrow2} alt="leftarrow"></Image>
            </div>
          </div>
          <div className="w-1/2">
            <Image src={heroImage} alt="heroImage" className="py-10" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-2">
          <Image src={dot} alt="dot" className="bg-slate-600 rounded-full"></Image>
          <Image src={dot} alt="dot" className="bg-slate-600 rounded-full"></Image>
          <div>
            <div className="bg-white p-1 rounded-full">
          <Image src={dot} alt="dot" className="bg-red-600 rounded-full"></Image>
            </div>
          </div>
          <Image src={dot} alt="dot" className="bg-slate-600 rounded-full"></Image>
          <Image src={dot} alt="dot" className="bg-slate-600 rounded-full"></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
