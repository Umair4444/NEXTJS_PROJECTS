"use client";
import React from "react";
import Image from "next/image";
import Timelogo from "@/assets/ClockClockwise.png";

import post from "@/assets/Person.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaTimeline,
} from "react-icons/fa6";

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      {/* now navbar will not be shown in studio */}
      {pathname && !pathname.startsWith("/studio") ? (
        <div className="w-full min-h-full mt-20">
          <div className="flex flex-col gap-8 ">
            <div className="flex flex-col mx-2">
              <div className="flex items-center justify-around sm:px-14 md:p-0">
                <div className="flex flex-col lg:gap-3 sm:gap-2 items-start px-4">
                  <h2 className="font-bold lg:text-3xl md:text-2xl sm:text-lg">
                    <span className="text-yellow-500">St</span>ill You Need Our
                    Support?
                  </h2>
                  <p className="lg:text-lg text-wrap sm:hidden md:block ">
                    Don’t wait make a smart & logical quote here. Its pretty
                    easy.
                  </p>
                </div>
                <div className="md:-space-x-2 sm:flex lg:block flex-col items-center justify-center gap-1 ">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="bg-[#FF9F0D] sm:w-[20rem] md:w-[30rem] lg:w-[20rem] text-white placeholder:text-white px-8 py-3 border-0 rounded-[4px]"
                  />
                  <span>
                    <button className="bg-white sm:w-[10rem] md:w-[20rem] lg:w-auto text-yellow-500 font-semibold px-8 py-3 rounded-[4px] ">
                      Subscribe
                    </button>
                  </span>
                </div>
              </div>
              <div className="border-2 border-yellow-700 mx-36 mt-4"></div>
            </div>
            <div className="sm:hidden md:flex items-start justify-evenly px-6 ">
              <div className=" flex flex-col gap-8 ">
                <h5 className="font-bold text-2xl">About Us.</h5>
                <p className="w-[312px] h-[95px] text-[16px]">
                  orporate clients and leisure travelers has been relying on
                  Groundlink for dependab safe, and professional chauffeured car
                  service in major cities across World.
                </p>
                <div className="flex gap-4 w-full">
                  <div className="bg-[#FF9F0D] w-fit flex px-3  items-center justify-center">
                    <Image src={Timelogo} alt="timelogo" />
                  </div>
                  <div className="text-[14px] font-normal">
                    <h5>Opening Hours</h5>
                    <h5>Mon - Sat (8.00 - 6.00)</h5>
                    <h5>Sunday - Closed</h5>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h5 className="font-bold text-2xl">Useful Links</h5>
                <ul className="text-lg font-normal flex flex-col gap-6">
                  <li>
                    <Link href={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link href={"/news"}>News</Link>
                  </li>
                  <li>
                    <Link href={"/partner"}>Partner</Link>
                  </li>
                  <li>
                    <Link href={"/team"}>Team</Link>
                  </li>
                  <li>
                    <Link href={"/menu"}>Menu</Link>
                  </li>
                  <li>
                    <Link href={"/contact-us"}>Contacts</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <h5 className="font-bold text-2xl">Help?</h5>
                <ul className="text-lg font-normal flex flex-col gap-6">
                  <li>
                    <Link href={"/faq"}>FAQ</Link>
                  </li>
                  <li>
                    <Link href={"/team"}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href={"/reporting"}>Reporting</Link>
                  </li>
                  <li>
                    <Link href={"/documentation"}>Documentation</Link>
                  </li>
                  <li>
                    <Link href={"/support-policy"}>Support Policy </Link>
                  </li>
                  <li>
                    <Link href={"/privacy"}>Privacy</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <h5 className="font-bold text-2xl">Recent Posts</h5>
                <div className="flex gap-2 ">
                  <div>
                    <Image src={post} alt="post" />
                  </div>
                  <div className="flex flex-col">
                    <h6>20-Feb-2022</h6>
                    <h4>Keep Your Business</h4>
                  </div>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <Image src={post} alt="post" />
                  </div>
                  <div className="flex flex-col">
                    <h6>20-Feb-2022</h6>
                    <h4>Keep Your Business</h4>
                  </div>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <Image src={post} alt="post" />
                  </div>
                  <div className="flex flex-col">
                    <h6>20-Feb-2022</h6>
                    <h4>Keep Your Business</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[99px] bg-[#4F4F4F] flex items-center justify-between px-10">
              <div className="">
                <p className="sm:text-[12px] md:text-[14px] lg:text-lg">
                  Copyright © 2022 by Umair GIAIC. All Rights Reserved.
                </p>
              </div>
              <div className="flex gap-1 md:gap-5 items-center cursor-pointer w-fit">
                <div className="flex items-center gap-5 text-3xl ">
                  <FaFacebook className="hover:text-orange-400 rounded-full " />
                  <FaInstagram className="hover:text-orange-400 rounded-full " />
                  <FaTwitter className="hover:text-orange-400 rounded-full " />
                  <FaPinterest className="hover:text-orange-400 rounded-full " />
                  <FaYoutube className="hover:text-orange-400 rounded-full " />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Footer;
