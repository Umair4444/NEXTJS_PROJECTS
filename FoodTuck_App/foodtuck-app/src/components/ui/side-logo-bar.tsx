import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const SideLogoBar = () => {
  return (
    <div className="hidden lg:flex w-fit h-full">
      <div className="w-[2%] h-[90%] flex flex-col gap-14 items-center justify-center pl-10 pr-16">
        <div className="w-[1px] h-2/6 border-[1px]"></div>
        <div className="flex flex-col gap-6 cursor-pointer w-5">
          <FaTwitter className="hover:text-yellow-500 text-xl" />
          <FaFacebook className="hover:text-yellow-500 text-xl" />
          <FaPinterest className="hover:text-yellow-500 text-xl" />
        </div>
        <div className="w-[1px] h-2/6 border-[1px]"></div>
      </div>
    </div>
  );
};

export default SideLogoBar;
