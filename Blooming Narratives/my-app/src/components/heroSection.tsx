import React from "react";
import Image from "next/image";
import std from "@/Images/student.png";

const HeroSection = () => {
  return (
    <div>
      <div>
        <div>Never Stop Learning</div>
        <div>Grow your skill by Online Course with Blooming Narrative</div>
        <div>
            <div>Explore Path</div>
            <div>Avatar</div>
        </div>
      </div>
      <div>
        <Image src={std} alt="background" width={300} height={300} />
      </div>
    </div>
  );
};

export default HeroSection;
