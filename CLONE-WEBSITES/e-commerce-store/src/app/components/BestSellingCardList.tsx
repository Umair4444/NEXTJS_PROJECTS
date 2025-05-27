import React from "react";
import BestSellingCard from "./BestSellingCard";

const BestSellingCardList = () => {
  return (
    <div className="flex gap-4">
      <BestSellingCard
        main_img="/pinkjacket.png"
        discount_percent="-40%"
        title="HAVIT HV-G92 Gamepad"
        discount_price="$120"
        was_price="$160"
        img="/Vector (3).png"
        rating="120"
        wid={15}
        hei={15}
        cartText="Add To Cart"
      />
      <BestSellingCard
        main_img="/bag.png"
        discount_percent="-40%"
        title="HAVIT HV-G92 Gamepad"
        discount_price="$120"
        was_price="$160"
        img="/Vector (3).png"
        rating="120"
        wid={15}
        hei={15}
        cartText="Add To Cart"
      />
      <BestSellingCard
        main_img="/gpu.png"
        discount_percent="-40%"
        title="HAVIT HV-G92 Gamepad"
        discount_price="$120"
        was_price="$160"
        img="/Vector (3).png"
        rating="120"
        wid={15}
        hei={15}
        cartText="Add To Cart"
      />
      <BestSellingCard
        main_img="/bookshelf.png"
        discount_percent="-40%"
        title="HAVIT HV-G92 Gamepad"
        discount_price="$120"
        was_price="$160"
        img="/Vector (3).png"
        rating="120"
        wid={15}
        hei={15}
        cartText="Add To Cart"
      />
      <BestSellingCard
        main_img="/laptop.png"
        discount_percent="-40%"
        title="HAVIT HV-G92 Gamepad"
        discount_price="$120"
        was_price="$160"
        img="/Vector (3).png"
        rating="120"
        wid={15}
        hei={15}
        cartText="Add To Cart"
      />
    </div>
  );
};

export default BestSellingCardList;
