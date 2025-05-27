import React from "react";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="w-[1920px] h-[538px] py-[140px] px-[220px] flex flex-col gap-24">
      <h1 className="text-7xl font-bold leading-[87.14px] text-center text-green-800">
        Our Sponsors
      </h1>
      <div className="w-[1482px] h-[71px] flex gap-1 justify-between ">
        <Image src={"/apple.png"} alt="microsoft" width={55} height={68} ></Image>
        <Image src={"/Microsoft.png"} alt="microsoft" width={287} height={62} ></Image>
        <Image src={"/Slack.png"} alt="microsoft" width={280} height={61} ></Image>
        <Image src={"/Google.png"} alt="microsoft" width={211} height={68} ></Image>
      </div>
    </div>
  );
};

export default Sponsors;
