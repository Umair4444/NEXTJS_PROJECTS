import React from "react";
import Image from "next/image";

const ReviewCard = (props: any) => {
  return (
    <div className="flex flex-col items-center :w-fit justify-between gap-5">
      <Image src={props.image} alt="clients reviews" className="w-10 md:w-20 lg:w-32" />
      <h5 className="text-sm md:text-lg lg:text-xl font-bold">{props.title}</h5>
      <h3 className="font-bold text-[30px]">{props.number}</h3>
    </div>
  );
};

export default ReviewCard;
