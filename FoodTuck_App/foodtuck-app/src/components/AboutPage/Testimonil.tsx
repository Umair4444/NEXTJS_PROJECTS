import React from "react";
import Image from "next/image";
import client from "@/assets/client.png";
import quotes from "@/assets/Quotes.png";
// import ShoppingCart from "./ShoppingCart";
import fullstars from "@/app/assets/fullstar.png";
import emptystars from "@/app/assets/emptystar.png";
// import Ratings from "./ratings";

const Testimonials = () => {
  return (
    <div className="text-black bg-white flex items-start justify-center flex-col ">
      <div className="flex items-start justify-start flex-col mb-32 w-full ">
        <h2 className="text-yellow-500 text-3xl text-center w-full ">
          Testimonials
        </h2>
        <h1 className="text-5xl font-bold text-center w-full">
          What our client are saying
        </h1>
      </div>
      <div className="shadow-2xl w-2/3 pb-10 mx-auto">
        <div className="flex flex-col items-center justify-center gap-5 ">
          <div className="relative bottom-20 -mb-20">
            <Image src={client} alt="client" />
          </div>
          <div className=" ">
            <Image src={quotes} alt="quotes" />
          </div>
          <div className="text-center md:px-14 lg:px-28">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              cumque at eaque blanditiis praesentium, laboriosam cum saepe porro
              fuga quae voluptates, dolorem suscipit autem. Nisi omnis
              repudiandae quisquam corporis hic?
            </p>
          </div>
          <div>{/* <Ratings rating="3" /> */}</div>
          <div>
            <h1>Alam Hussain</h1>
            <h2>Food Specialist</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
