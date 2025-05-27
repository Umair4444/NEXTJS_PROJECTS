import React from "react";
import Image from "next/image";
import coffee from "@/assets/Coffee.png";

const MenuCard = (props: any) => {
  return (
    <div
      className={`flex ${props.flexDirection} gap-16 items-start justify-center w-full`}
    >
      <div className="h-screen flex w-2/6">
        <Image src={props.image} alt="menu" className="h-5/6" />
      </div>
      <div className="w-2/6 flex flex-col items-start gap-8 ">
        <Image src={coffee} alt="coffee" />
        <h1 className="text-5xl font-bold">Starter Menu</h1>

        <div className="w-full h-full flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">Alder Grilled Chinook Salmon</h2>
            <h6 className="text-[16px]">
              Toasted French bread topped with romano, cheddar
            </h6>
            <p className="text-[16px]">560 CAL</p>
          </div>
          <h2 className="text-[#FF9F0D] text-2xl font-bold">32$</h2>
        </div>
        <div className="w-full h-full flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">Alder Grilled Chinook Salmon</h2>
            <h6 className="text-[16px]">
              Toasted French bread topped with romano, cheddar
            </h6>
            <p className="text-[16px]">560 CAL</p>
          </div>
          <h2 className="text-[#FF9F0D] text-2xl font-bold">32$</h2>
        </div>
        <div className="w-full h-full flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">Alder Grilled Chinook Salmon</h2>
            <h6 className="text-[16px]">
              Toasted French bread topped with romano, cheddar
            </h6>
            <p className="text-[16px]">560 CAL</p>
          </div>
          <h2 className="text-[#FF9F0D] text-2xl font-bold">32$</h2>
        </div>
        <div className="w-full h-full flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">Alder Grilled Chinook Salmon</h2>
            <h6 className="text-[16px]">
              Toasted French bread topped with romano, cheddar
            </h6>
            <p className="text-[16px]">560 CAL</p>
          </div>
          <h2 className="text-[#FF9F0D] text-2xl font-bold">32$</h2>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
