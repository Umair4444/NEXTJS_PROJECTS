import React from "react";
import FlashSaleCard from "./FlashSaleCard";

const FlashSaleCardList = () => {
  return (
    <div className="flex gap-4">
      <FlashSaleCard
        main_img="/gamepad.png"
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
      <FlashSaleCard
        main_img="/keyboard.png"
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
      <FlashSaleCard
        main_img="/tv.png"
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
      <FlashSaleCard
        main_img="/chair.png"
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
        <FlashSaleCard
          main_img="/joystick.png"
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

export default FlashSaleCardList;
