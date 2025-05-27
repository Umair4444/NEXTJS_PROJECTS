"use client";
import Image from "next/image";
import saearch from "@/assets/logo/MagnifyingGlass.png";
import handbag from "@/assets/logo/Handbag.png";
import list from "@/assets/logo/List.png";
import close from "@/assets/logo/X.png";
import login from "@/assets/logo/User.png";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-5 mt-5 mb-20 sm:items-center lg:items-stretch ">
      <div className="flex items-center justify-center text-2xl font-bold font-helvetica ">
        <Link href={"/"}>
          <h1 className="text-[#FF9F0D]">
            Food
            <span className="text-white">tuck</span>
          </h1>
        </Link>
      </div>

      <div className="lg:hidden flex sm:justify-center md:justify-start px-5">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <Image
            src={isMenuOpen ? close : list}
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            className="invert cursor-pointer"
          />
        </button>
      </div>

      <div className=" flex sm:flex-col-reverse lg:flex-row items-center justify-around">
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col justify-center lg:flex lg:flex-row items-center gap-5 mt-5 md:mt-0`}
        >
          <ul className="flex sm:flex-col lg:flex-row gap-5 text-lg font-normal  ">
            <li className="hover:text-yellow-600  active:text-yellow-500">
              <Link href={"/"} className="">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/menu"}>Menu</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/page"}>More Pages</Link>
            </li>
            <li className="flex gap-1 items-center">
              <Link href={"/about"} className="flex gap-1 items-center">
                About
                {/* use select from shadcn */}
              </Link>
            </li>
            <li>
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-fit flex gap-1 items-center border-[2px] border-[#FF9F0D] py-2 px-4 rounded-full">
            <input
              type="text"
              placeholder="Search"
              className="outline-none rounded-full w-[20rem] md:w-[25rem]  bg-transparent text-white text-lg font-normal placeholder:text-white "
            />
            <Image
              src={saearch}
              alt="search"
              className=" invert cursor-pointer"
            />
          </div>
          <div>
            <Link href={"/checkout"}>
              <Image
                src={handbag}
                alt="handbag"
                className="invert cursor-pointer "
              />
            </Link>
          </div>
          <div>
            <Link href={"/login"}>
              <Image
                src={login}
                alt="login"
                className="invert cursor-pointer "
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
