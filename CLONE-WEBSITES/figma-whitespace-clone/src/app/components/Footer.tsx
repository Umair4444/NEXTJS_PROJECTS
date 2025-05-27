import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" w-[1920px] h-[461px] bg-[#043873] pt-[140px] pb-[32px] px-[220px] flex gap-48 text-white">
      <div className="w-[1480px] h-[289px] flex flex-col gap-28 items-center justify-center">
        <div className="w-[1480px] h-[169px] flex gap-28">
          <div className="w-[296px] h-[169px] flex flex-col gap-4">
            <Image src={"/Logo.png"} alt="logo" width={191} height={34} />
            <p className="font-normal text-lg w-[240px] h-[120px]">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
          <div className="w-[295px] h-[127px]">
            <ul className=" font-bold text-lg flex flex-col gap-4">
              Products
              <li className="list-none font-normal text-base">Overview</li>
              <li className="list-none font-normal text-base">Pricing</li>
              <li className="list-none font-normal text-base">
                Customer Storeies
              </li>
            </ul>
          </div>
          <div className="w-[295px] h-[127px] ">
            <ul className=" font-bold text-lg flex flex-col gap-4">
              Resource
              <li className="list-none font-normal text-base">Blog</li>
              <li className="list-none font-normal text-base">
                Guides & tutorials{" "}
              </li>
              <li className="list-none font-normal text-base">Help center </li>
            </ul>
          </div>
          <div className="w-[295px] h-[127px]">
            <ul className=" font-bold text-lg flex flex-col gap-4">
              Company
              <li className="list-none font-normal text-base">About Us</li>
              <li className="list-none font-normal text-base">Career </li>
              <li className="list-none font-normal text-base">Media Kit</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="font-normal text-lg text-center">
            ©2021 Whitepace LLC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
