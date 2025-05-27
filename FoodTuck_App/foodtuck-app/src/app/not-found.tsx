"use client";
import React from "react";
import { useRouter } from "next/navigation";
import MyButton from "@/components/ui/myButton";
import TopCard from "@/components/ui/TopCard";

const Error404 = () => {
  const router = useRouter();
  return (
    <div className="">
      <TopCard title="404 Error" />
      <div className="bg-white text-black px-14 p-20">
        <div className="flex flex-col items-center justify-center  gap-6 ">
          <h1 className="text-8xl font-bold text-[#FF9F0D]">404</h1>
          <h4 className="text-[32px] font-bold text-center">
            Oops! Look likes something going wrong
          </h4>
          <p className="text-lg text-center">
            Page Cannot be found! we’ll have it figured out in no time.
            Menwhile, cheek out these fresh ideas:
          </p>
          <MyButton
            title="Go Back"
            rounded="rounded-md"
            xpadding="px-10"
            ypadding="py-2"
            onclick={() => {
              router.back();
            }}
          />
          <MyButton
            title="Go Home"
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

export default Error404;
