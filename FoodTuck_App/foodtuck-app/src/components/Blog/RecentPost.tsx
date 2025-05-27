import React from "react";
import Link from "next/link";
import Image from "next/image";
import post from "@/assets/chefs/chef4.png";

const RecentPost = () => {
  return (
    <div className="mt-10">
      <h1 className="font-bold text-center py-1">Recent Posts</h1>
      <div className="flex text-[12px] items-center gap-2">
        <div className="w-3/6">
          <Image src={post} alt="post" />
        </div>
        <div className="flex flex-col items-start justify-end gap-1">
          <h1>topic</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id!
            <Link href="">
              <span className="text-blue-600 underline pl-3">Rean More</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
