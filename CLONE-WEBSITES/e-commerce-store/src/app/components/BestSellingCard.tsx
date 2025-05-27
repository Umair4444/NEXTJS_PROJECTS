import React from "react";
import Image from "next/image";
import wishlist from "@/../public/Fill Heart.png";
import eye from "@/../public/Fill Eye.png";

const BestSellingCard = (props) => {
  return (
    <div className="w-[270px] h-[350px] flex flex-col items-start mt-5 gap-4">
      <div className="w-[270px] h-[350px] bg-[#F5F5F5] flex flex-col">
        <div className="  relative top-2 left-3 bg-red-500 rounded-lg max-w-fit">
          <h3 className="text-white py-1 px-2 text-sm">
            {props.discount_percent}
          </h3>
        </div>
        <div className=" flex flex-col items-end gap-1 px-2 relative -top-5">
          <Image src={wishlist} alt="wishlist" />
          <Image src={eye} alt="like" />
        </div>
        <div className="w-[270px] h-[150px]  rounded bg-[#F5F5F5] flex flex-col items-center justify-center gap-1">
          <div className="rounded flex flex-col items-center pb-10 w-6/12">
            <Image
              src={props.main_img}
              alt={props.img_title}
              width={props.width || 150}
              height={props.height || 150}
            />
          </div>
          <button className="hover:bg-black hover:text-white w-full text-transparent text-center py-1">
            {props.cartText}
          </button>
        </div>
      </div>
      <h1>{props.title}</h1>
      <div className="flex gap-4 ">
        <h1 className="text-red-500">{props.discount_price}</h1>
        <h1 className="text-gray-400 line-through">{props.was_price}</h1>
      </div>

      <div className="flex items-center gap-1 ">
        <Image
          src={props.img}
          width={props.wid || 10}
          height={props.hei || 10}
          alt="props.alt_rating"
        />
        <Image
          src={props.img}
          width={props.wid || 10}
          height={props.hei || 10}
          alt="props.alt_rating"
        />
        <Image
          src={props.img}
          width={props.wid || 10}
          height={props.hei || 10}
          alt="props.alt_rating"
        />
        <Image
          src={props.img}
          width={props.wid || 10}
          height={props.hei || 10}
          alt="props.alt_rating"
        />
        <Image
          src={props.img}
          width={props.wid || 10}
          height={props.hei || 10}
          alt="props.alt_rating"
        />
        <span className="text-sm ml-2">({props.rating})</span>
      </div>
    </div>
  );
};

export default BestSellingCard;
