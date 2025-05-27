import React from "react";
import Image from "next/image";
import bag from "@/../public/feature.png";

const FeatureCard = () => {
  return (
    <div className="flex bg-black">
      <div className="w-1/2 h-[500px]"></div>
      <div className="w-1/2 h-[500px] py-10 px-12">
        <Image src={bag} alt="" width={700} className=" shadow-white" />
      </div>
    </div>
  );
};

export default FeatureCard;
