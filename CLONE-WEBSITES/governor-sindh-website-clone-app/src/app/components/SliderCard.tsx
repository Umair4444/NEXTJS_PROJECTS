import React from "react";
import Image from "next/image";

interface CardProps {
  img_url: any;
  alt_title: string;
}

const Slider = ({ img_url, alt_title }: CardProps) => {
  return (
    <>
      {/* remove your desire height dynamically */}
      <div className="flex min-h-[calc(100vh-6rem)] phone:p-0 phone:scale-90 phone-m-0 ">
        <Image
          src={img_url}
          alt={alt_title}
          width={1000}
          height={700}
          className="rounded-lg object-cover"
        />
      </div>
    </>
  );
};

export default Slider;
