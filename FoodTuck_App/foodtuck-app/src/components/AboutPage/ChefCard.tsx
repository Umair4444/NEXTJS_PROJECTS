import React from "react";
import Image from "next/image";

const Chefcard = (props: any) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={props.image}
        alt="chef"
        className={`${props.width || "w-2/3"}`}
      />
      <h1 className="text-[20px] font-bold pt-1">{props.name}</h1>
      <h1 className="text-lg ">{props.profession}</h1>
    </div>
  );
};

export default Chefcard;
