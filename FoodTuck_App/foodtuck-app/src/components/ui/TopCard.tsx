import React from "react";
import Topcard from "@/assets/TopCard.png";
import { FaGreaterThan } from "react-icons/fa6";

const TopCard = (props: any) => {
  return (
    <div
      className="bg-center h-96 bg-cover w-full"
      style={{ backgroundImage: `url(${Topcard.src})` }}
    >
      <div className="h-full flex flex-col justify-center items-center text-center gap-4">
        <h1 className="text-white text-4xl font-bold text-center">
          Our {props.title}
        </h1>
        <div className="text-white text-xl font-bold  flex items-center gap-5 ">
          <h1>Home</h1>
          <div>
            <FaGreaterThan />
          </div>
          <div className="text-orange-500">{props.title}</div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
