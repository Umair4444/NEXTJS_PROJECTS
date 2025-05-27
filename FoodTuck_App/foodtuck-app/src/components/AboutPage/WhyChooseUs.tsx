import Image from "next/image";
import image from "@/assets/chooseus.png";

const WhyChooseUs = () => {
  return (
    <div className="w-full text-center text-black">
      <div>
        <h1 className="text-5xl font-bold mb-4">Why Choose Us</h1>
      </div>
      <div>
        <p className="w-11/12 md:w-2/3 mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
          sint Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="w-full py-10 ">
        <Image src={image} alt="image" className="object-cover w-full" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
