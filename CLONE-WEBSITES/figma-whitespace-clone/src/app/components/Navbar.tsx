import React from "react";
import Image from "next/image";
// font dm sans

const Navbar = () => {
  return (
      <div className="bg-[#043873] w-[1920px] h-[92px] py-[16px] px-[220px] flex justify-between items-center">
    <div className="">
        <Image src={"/Logo.png"} alt="logo" width={191} height={34} className=""/>
      </div>
      <div className="flex"> 
        <ul className="text-white flex gap-10 font-medium text-lg">
        <li>Products</li>
        <li>Solution</li>
        <li>Resources</li>
        <li>Pricing</li>
        </ul>
      </div>
      <div>
        <button className="bg-[#FFE492] py-[16px] px-[40px] rounded-lg w-[126px] h-[60px] cursor-pointer">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
