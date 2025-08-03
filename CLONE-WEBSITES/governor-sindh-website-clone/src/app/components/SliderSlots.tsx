import React from "react";
import Slider from "./SliderCard";

const SliderSlots = () => {
  return (
    <div className=" w-full px-28 my-8 smart:px-10 items-center justify-center">
      <div className="flex w-full  justify-center gap-2 smart:flex-col ">
        <Slider img_url="/4.jpg" alt_title="First Image" />
        <Slider img_url="/5.jpg" alt_title="Second Image" />
      </div>
    </div>
  );
};

export default SliderSlots;
