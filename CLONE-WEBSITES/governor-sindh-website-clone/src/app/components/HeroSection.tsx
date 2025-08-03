import React from "react";
import Image from "next/image";
import "../globals.css";

const HeroSection = () => {
  return (
    <div className="flex flex-row w-full h-screen bgimg">
      <div className="w-5/12 h-screen flex flex-col mt-20 gap-1 ml-20 smart:w-full ">
        <h1 className="text-blue-700 text-6xl font-black">Governor Sindh</h1>
        <h3 className="text-blue-700 text-4xl font-light mb-5">
          Kamran Khan Tessori
        </h3>
        <h2 className="w-full text-cyan-400 text-3xl text-wrap font-black">
          Certified Cloud Applied Generative AI Engineer (GenEng)
        </h2>
        <h2 className="mt-4 text-blue-800 font-extrabold text-2xl">
          Earn up to $5,000 / month
        </h2>
        <h2 className="mt-4 text-blue-800 font-extrabold text-2xl mb-4">
          Now admissions are open in Hyderabad
        </h2>
        <div className="flex justify-left gap-20">
          <button
            type="button"
            className=" w-48 rounded-md bg-blue-700 text-white hover:translate-y-1 "
          >
            Apply Now
          </button>
          <div className="flex flex-col items-center justify-around text-blue-800 phone:w-full">
            <h1 className="text-2xl font-bold text-center">562,143</h1>
            <p className="text-center">Accepted Applications</p>
          </div>
        </div>
      </div>
      <div className="w-7/12 h-screen phone:hidden ">
        <Image
          src={"/kamran2.png"}
          width={400}
          height={400}
          className="w-full mt-10"
          alt="kamran"
        />
      </div>
    </div>
  );
};

export default HeroSection;
