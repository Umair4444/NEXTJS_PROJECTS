import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <div className="flex gap-10 items-start justify-around ">
      <div className="flex flex-col gap-3 smart:hidden">
        <h1 className="text-2xl font-semibold">Core Courses</h1>
        <h3>Programming Fundamentals</h3>
        <h3>Web2 Using NextJS</h3>
        <h3>Earn as You Learn</h3>
      </div>

      <div className="flex flex-col gap-3 smart:hidden">
        <h1 className="text-2xl font-semibold">Advanced Courses</h1>
        <h3>Web 3 and Metaverse</h3>
        <h3>Cloud-Native Computing</h3>
        <h3>Artificial Intelligence (AI) and Deep Learning</h3>
        <h3>Ambient Computing and IoT</h3>
        <h3>Genomics and Bioinformatics</h3>
        <h3>Network Programmability and Automation</h3>
      </div>

      <div className="flex flex-col gap-3 smart:hidden">
        <h1 className="text-2xl font-semibold">Social Links</h1>
        <div className="flex items-center gap-1 w-full ">
          <Image src={"/facebook.png"} width={40} height={40} alt="facebook" className="w-1/5 "></Image>
          <Image src={"/youtube.png"} width={40} height={40} alt="facebook" className="w-1/5 "></Image>
          <Image src={"/instagram.png"} width={40} height={40} alt="facebook" className="w-1/5 "></Image>
          <Image src={"/tiktok.png"} width={40} height={40} alt="facebook" className="w-1/5 "></Image>
          <Image src={"/whatsapp.png"} width={40} height={40} alt="facebook" className="w-1/5"></Image>
          </div>
        <div>
          <div className="flex gap-2"><Image src={"/message.png"} width={20} height={40} alt="message" className="border-blue-400"></Image>
          <Link className=" underline cursor-pointer text-blue-800" href={"/"}>
            education@governorsindh.com
          </Link>
          </div>
        </div>
      </div>
    </div>
      <div className="w-full flex flex-col items-center justify-center mt-5 bg-slate-700 text-white rounded-sm">
        <h1>All Rights Reserved to Umair Ali Khan</h1>
        <h1>Clone of <Link target="blank" href={"https://www.governorsindh.com/"}>Goversindh Website</Link></h1>
        </div>
    </>
  );
};

export default Footer;
