import React from "react";

const HeroSection = () => {
  return (
    <div className=" h-[829px] w-[1920px]  flex  bg-[#043873] py-[140px] px-[220px] text-white">
      <div className="w-1/2 h-full flex flex-col gap-16 p-5 justify-center ">
        <h2 className="text-[64px] leading-[77.45px] -tracking-[2%] ">
          Get More Done with whitepace
        </h2>
        <p className="text-[18px] leading-[30px] -tracking-[2%] ">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
        <button className="bg-[#4F9CF9] rounded-lg border-[1px] p-5  w-[219px] h-[63px]">
          Try Whitepace free
        </button>
      </div>
      <div className="w-1/2 h-full bg-[#C4DEFD]">
        <div className="w-[824px] h-[529px]"></div>
      </div>
    </div>
  );
};

export default HeroSection;
