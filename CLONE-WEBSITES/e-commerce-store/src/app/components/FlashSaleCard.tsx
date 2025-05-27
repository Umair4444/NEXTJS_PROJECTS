import React from "react";
import Image from "next/image";
import wishlist from "@/../public/Fill Heart.png";
import eye from "@/../public/Fill Eye.png";
import FlashSaleCardList from "./FlashSaleCardList";

const FlashSaleCard = (props) => {
  return (
    <div className="w-[270px] h-[350px] flex flex-col items-start mt-5 gap-4">
      <div className="w-[270px] h-[350px] bg-[#F5F5F5]">
        <div className="  relative top-2 left-3 bg-red-500 rounded-lg max-w-fit">
          <h3 className="text-white py-1 px-2 text-sm">
            {props.discount_percent}
          </h3>
        </div>
        <div className=" flex flex-col items-end gap-1 px-2 relative -top-5">
          <Image src={wishlist} alt="wishlist" />
          <Image src={eye} alt="like" />
        </div>
        <div className="w-[270px]  rounded bg-[#F5F5F5] flex flex-col items-center justify-center gap-1">
          <div className="w-[270px] h-[130px] rounded flex flex-col items-center gap-2 pb-6">
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

export default FlashSaleCard;
