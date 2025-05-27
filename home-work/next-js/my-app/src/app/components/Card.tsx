import React from "react";
import Image from "next/image";

interface CardProps {
    imgTitle : string,
    productName : string
    price : string
}

const Card = ({imgTitle,productName,price}:CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full md:w-1/3 lg:w-1/4 bg-slate-300 shadow-xl shadow-gray-700 ">
      <div className="w-full">
        <Image src={imgTitle} width={400} height={400} alt="product" className=" object-contain  w-full"></Image>
      </div>
      <div>
        <h1 className="text-center text-2xl font-bold">{productName}</h1>
      </div>
      <div className="flex justify-between items-center mb-3 w-full">
        <div className="text-center font-semibold text-lg ml-3">Price : {price}</div>
        <div>
          <button className=" mr-2  py-1 px-4 rounded-xl bg-red-600 text-white font-bold">Buy Now</button>
        </div>
      </div>
      <div className="flex flex-wrap text-center">
        <p className="text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eveniet.
          doloribus.
        </p>
      </div>
    </div>
  );
};

export default Card;
