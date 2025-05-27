import React from "react";
import Image from "next/image";
import client from "@/assets/client.png";
import facebook from "@/assets/logo/FacebookLogo.png";
import twitter from "@/assets/logo/TwitterLogo.png";

const Reviewer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center border-2 gap-1">
        <Image src={client} alt="clien" className="w-1/3 mb-2" />
        <h1 className="font-bold">Name</h1>
        <h2>Profession</h2>
        <h2>Rating</h2>
        <p className="text-justify text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a
          doloribus natus fuga adipisci totam.
        </p>
        <div className="flex gap-1">
          <Image src={facebook} alt="facebook" />
          <Image src={twitter} alt="facebook" />
        </div>
      </div>
    </div>
  );
};

export default Reviewer;
