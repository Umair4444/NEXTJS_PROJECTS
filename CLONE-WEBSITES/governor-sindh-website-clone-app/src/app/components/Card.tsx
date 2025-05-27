import React from "react";
import Image from "next/image";

interface CardProps {
  img_url: any;
  alt_title: string;
}

const Card = ({ img_url, alt_title }: CardProps) => {
  return (
    <div className="flex h-72 mt-10 w-1/3 m-2 shadow-2xl shadow-black bg-transparent rounded-lg phone:w-full tablet:w-[46%] tablet:ml-2 tablet:flex-wrap ">
      <Image
        src={img_url}
        alt={alt_title}
        width={500}
        height={400}
        className="rounded-lg "
      />
    </div>
  );
};

export default Card;
