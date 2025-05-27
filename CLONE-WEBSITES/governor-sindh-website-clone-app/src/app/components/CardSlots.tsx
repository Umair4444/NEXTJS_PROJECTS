import React from "react";
import Card from "./Card";

const CardSlots = () => {
  return (
    <div className="flex flex-col mt-20  px-24 font-sans">
      <h1 className="text-4xl text-center text-blue-800 font-bold mb-5 phone:text-xl tablet:text-2xl ">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
        Developing Billion-Dollar Valued Developers and Solopreneurs
      </h1>
      <p className="text-xl text-wrap text-justify leading-normal smart:hidden">
        The pace of technological change is accelerating, big players like
        Microsoft, Amazon, Google, and OpenAI are winning by providing
        infrastructure, large AI foundation models, frameworks, 3D Metaverse
        experiences, and massive distribution networks. Solopreneurs trained in
        this program will win by automating work typically outsourced to
        employees, by directly connecting to customers by eliminating the
        middleman, and by developing vertical metaverses, thus paving the way
        for the first billion-dollar valued solopreneur businesses. This program
        has the objective to train this new breed of billion-dollar
        solopreneurs. These solopreneurs will adopt the ultra-lean business
        model and work independently and will not need to hire employees or
        other team members.
      </p>
      <div className="flex items-center flex-row justify-around  phone:flex-col smart:flex-wrap tablet:justify-normal ">
        <Card img_url={"/1.jpg"} alt_title="pic" />
        <Card img_url={"/2.jpg"} alt_title="pic" />
        <Card img_url={"/3.jpg"} alt_title="pic" />
      </div>
    </div>
  );
};

export default CardSlots;
