import React from "react";
import TopCard from "@/components/ui/TopCard";
import Image from "next/image";
import person from "@/assets/Person.png";
import coffee from "@/assets/Coffee.png";
import student from "@/assets/Student.png";
import bgimage from "@/assets/bgimage.png";
import chef from "@/assets/chefs/chef.png";
import Testimonials from "@/components/AboutPage/Testimonil";
import WhyChooseUs from "@/components/AboutPage/WhyChooseUs";
import Chefcard from "@/components/AboutPage/ChefCard";
import HeroSection from "@/components/AboutPage/HeroSection";

const AboutUs = () => {
  const teamMembers = [
    { image: chef, name: "Henry", profession: "Chef" },
    { image: chef, name: "Anna", profession: "Sous Chef" },
    { image: chef, name: "James", profession: "Pastry Chef" },
    { image: chef, name: "Laura", profession: "Chef de Partie" },
  ];

  return (
    <div className="bg-white min-h-screen pb-20 text-black">
      <TopCard title="About Us" />
      {/* 
      {/* Hero Section */}
      <div className="py-20">
        <HeroSection />
      </div>
      {/* Why Choose Us */}
      <WhyChooseUs />
      {/* {/* Highlights Section */}
      <div className="flex flex-wrap justify-around items-center text-black pb-24 w-full">
        {[
          {
            img: student,
            title: "Best Chef",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsum.",
          },
          {
            img: coffee,
            title: "120 Items Food",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsum.",
          },
          {
            img: person,
            title: "Best Environment",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsum.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 max-w-xs"
          >
            <Image src={item.img} alt={item.title} />
            <h1 className="text-2xl font-bold text-center">{item.title}</h1>
            <p className="text-center">{item.desc}</p>
          </div>
        ))}
      </div>
      {/* Team Section */}
      <div className="">
        <div className="relative h-[6] ">
          <Image
            src={bgimage}
            alt="Background"
            // layout="fill"
            objectFit="cover"
            height={500}
            priority
            className="h-52 -z-10"
          />
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-semibold">Team Member</h1>
          <p className="w-11/12 md:w-2/3 mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            consequatur a nostrum voluptates neque aliquid ipsa quas et animi?
            Eveniet.
          </p>
        </div>
        <div className="relative z-10 flex flex-wrap justify-center gap-6 -top-44">
          {teamMembers.map((member, index) => (
            <Chefcard
              key={index}
              image={member.image}
              name={member.name}
              profession={member.profession}
              width="w-fit  lg:w-full"
            />
          ))}
        </div>
      </div>
      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default AboutUs;
