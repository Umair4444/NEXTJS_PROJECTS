import React from "react";
import Image from "next/image";
import Link from "next/link";
import dropdown from "@/../public/Vector (10).png";

const Topbar = () => {
  return (
    <div className="bg-black text-white flex">
      <div className="w-[1440px] h-[48px] flex items-center justify-center gap-3">
        <h4>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h4>
        <Link className="underline" href={""}>
          ShopNow
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <h4>English</h4>
        <Image src={dropdown} alt="dropdown" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Topbar;
