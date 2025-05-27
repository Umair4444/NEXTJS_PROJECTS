import React from "react";
import CategoryImage from "./CategoryImage";
import Image from "next/image";
import leftArrow from "@/../public/Fill With Left Arrow.png";
import RightArrow from "@/../public/Fill with Right Arrow.png";

const Category = () => {
  return (
    <div>
      <div className="flex gap-3 text-red-500">
        <div className="bg-red-600 w-4 h-10"></div>
        <h1 className="font-semibold text-lg">Today's</h1>
      </div>
      <div className="flex justify-between px-4">
        <div className="my-5">
          <h1 className="text-4xl font-semibold">Browse By Category</h1>
        </div>
        <div className="flex items-center">
          <Image src={leftArrow} alt="leftarrow" />
          <Image src={RightArrow} alt="rightarrow" />
        </div>
      </div>
      <div className="flex gap-8">
        <CategoryImage
          img="/Category-CellPhone.png"
          width={50}
          height={50}
          category="Phones"
        />
        <CategoryImage
          img="/Category-Computer.png"
          width={50}
          height={50}
          category="Phones"
        />
        <CategoryImage
          img="/Category-Headphone.png"
          width={50}
          height={50}
          category="Phones"
        />
        <CategoryImage
          img="/Category-Camera.png"
          width={50}
          height={50}
          category="Phones"
          classname1="bg-red-500 border-2"
          classname2=""
        />
        <CategoryImage
          img="/Category-SmartWatch.png"
          width={50}
          height={50}
          category="Phones"
        />
      </div>
    </div>
  );
};

export default Category;
