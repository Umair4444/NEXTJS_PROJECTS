import React from "react";
import Child from "./Child";
import GrandChild from "./GrandChild";

const Parent = () => {
  const cardData = [
    {
      title: "Beautiful Sunset",
      description: "A stunning view of the sunset over the mountains.",
      image: "/sunset.jpg",
    },
    {
      title: "Serene Beach",
      description: "A peaceful day at the beach with clear skies.",
      image: "/beach.jpg",
    },
    {
      title: "Lush Forest",
      description: "Explore the wonders of nature in a lush green forest.",
      image: "/forest.jpg",
    },
    {
      title: "Lush Forest",
      description: "Explore the wonders of nature in a lush green forest.",
      image: "/forest.jpg",
    },
    {
      title: "Lush Forest",
      description: "Explore the wonders of nature in a lush green forest.",
      image: "/forest.jpg",
    },
    {
      title: "Lush Forest",
      description: "Explore the wonders of nature in a lush green forest.",
      image: "/forest.jpg",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3  ">
        {cardData.map((data, index) => (
          <Child
            key={index}
            title={data.title}
            desc={data.description}
            image={data.image}
          />
        ))}
      </div>
      <div className="mt-5">
        <GrandChild name="Umair" email="xyz@Gmail.com" />
      </div>
    </>
  );
};

export default Parent;
