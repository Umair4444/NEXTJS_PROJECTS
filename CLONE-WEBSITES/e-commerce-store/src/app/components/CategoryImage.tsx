import React from "react";
import Image from "next/image";
import mobile from "@/../public/Category-CellPhone.png";

const CategoryImage = (props) => {
  return (
    <div
      className={` w-[170px] h-[145px] border-2 flex flex-col items-center justify-center gap-3 ${props.classname1} `}
    >
      <div className="">
        <Image
          src={props.img}
          alt=""
          width={props.width}
          height={props.height}
          className={props.classname2}
        />
      </div>
      <h1>{props.category}</h1>
    </div>
  );
};

export default CategoryImage;
