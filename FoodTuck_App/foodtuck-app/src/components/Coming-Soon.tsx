"use client";
import React from "react";
import { useRouter } from "next/navigation";
import MyButton from "@/components/ui/myButton";
import TopCard from "@/components/ui/TopCard";

const ComingSoon = () => {
  const router = useRouter();
  return (
    <div className="">
      <TopCard title="Coming Soon" />
      <div className="bg-white text-black px-14 p-20">
        <div className="flex flex-col items-center justify-center  gap-6 ">
          <h1 className="text-8xl font-bold text-[#FF9F0D]">Coming Soon</h1>
          <h4 className="text-[32px] font-bold text-center">
            We are working In the meantime please visit another Link
          </h4>
          <p className="text-lg text-center">
            We welcome you on our site but unfortuneately Maintaince work is
            going on. Menwhile, cheek out these fresh ideas:
          </p>
          <MyButton
            title="Go To Home"
            rounded="rounded-md"
            xpadding="px-10"
            ypadding="py-2"
            onclick={() => {
              router.push("/");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
