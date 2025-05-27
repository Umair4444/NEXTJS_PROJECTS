import React from "react";
import Image from "next/image";
import search from "@/../public/Component 2.png";
import likeItems from "@/../public/Vector.png";
import cartItems from "@/../public/Cart1 with buy.png";

const Navbar = () => {
  return (
    <>
      <div className=" h-[38px] gap-36 flex items-center justify-around mt-5">
        <div>
          <h1 className="text-2xl font-bold">Exclusive</h1>
        </div>

        <div>
          <ul className="flex items-center gap-9 text-lg font-normal">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Signup</li>
          </ul>
        </div>

        <div className="flex gap-5 ">
          <div className=" bg-[#F5F5F5] w-[243px] h-[38px] flex items-center border-2 rounded-md px-5">
            <input
              type="text"
              placeholder="What are You looking for?"
              className="bg-[#F5F5F5] font-normal text-sm"
            />
            <Image src={search} alt="search" className="" />
          </div>

          <div className="flex items-center gap-5">
            <Image src={likeItems} alt="like-items" />
            <Image src={cartItems} alt="cart-items" />
          </div>
        </div>
      </div>
      <div className="w-[1440px] mx-auto border-b-2 mt-10 "></div>
    </>
  );
};

export default Navbar;
