import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  desc: string;
  image: string;
}

const Child = ({ title, desc, image }: CardProps) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-auto">
      <Image
        width={300}
        height={300}
        src={image}
        alt={title}
        className="rounded-t-lg w-full h-40 object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-600 mt-1">{desc}</p>
    </div>
  );
};

export default Child;
