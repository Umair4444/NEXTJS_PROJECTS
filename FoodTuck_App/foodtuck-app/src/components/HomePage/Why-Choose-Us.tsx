// import React from "react";
// import food from "@/assets/dish/fooditems3.png";
// import Image from "next/image";
// import { Great_Vibes } from "next/font/google";

// const great_Vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

// const WhyChooseUsComponent = () => {
//   return (
//     <>
//       <div className="text-center mt-5 md:mt-10 lg:mt-20">
//         <h3 className={`${great_Vibes.className} text-4xl text-[#FF9F0D] `}>
//           Food Gallery
//         </h3>
//         <h1 className="text-5xl font-bold">
//           <span className="text-[#FF9F0D] font-helvetica">Ch</span>oose Food
//           Itmes
//         </h1>
//       </div>
//       <div className="grid md:grid-cols-2  text-white items-center p-10 gap-10">
//         {/* Image Grid */}
//         <div className="grid grid-rows-1 lg:grid-rows-2 gap-4 justify-between items-center">
//           <div className="grid grid-flow-col gap-4 items-center">
//             <Image src={food} alt="food item" className="rounded-md " />
//             <Image
//               src={food}
//               alt="food item"
//               className="rounded-md md:hidden lg:block"
//             />
//           </div>
//           <div className="grid grid-flow-col gap-4 items-center ">
//             <Image src={food} alt="food item" className="rounded-md" />
//             <Image src={food} alt="food item" className="rounded-md " />
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="w-full grid gap-8">
//           <h3 className={`${great_Vibes.className} text-4xl text-[#FF9F0D]`}>
//             Why Choose Us
//           </h3>
//           <h1 className="text-5xl font-bold leading-tight">
//             <span className="text-[#FF9F0D] font-helvetica">Ex</span>
//             traordinary Taste and Experienced Chefs
//           </h1>
//           <p className="text-lg ">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//             diam pellentesque bibendum non dui volutpat fringilla bibendum.
//             Urna, elit augue urna, vitae feugiat pretium donec id elementum.
//             Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
//             eu velit in consequat.
//           </p>
//           <div className="bg-[#FF9F0D] lg:w-3/5 rounded-md">
//             <div className="flex items-center justify-around bg-white py-3 px-5 rounded-md ml-2 text-black shadow-lg">
//               <h1 className="text-[#FF9F0D] text-5xl font-bold">30+</h1>
//               <div className="">
//                 <h3 className="text-lg">Years Of</h3>
//                 <h2 className="text-2xl font-bold">Experience</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WhyChooseUsComponent;

import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import React from "react";
import food from "@/assets/dish/fooditems3.png";

const img = [food, food, food, food];

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

const WhyChooseUsComponent = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h3
            className={`${greatVibes.className} text-3xl md:text-4xl text-[#FF9F0D] mb-2`}
          >
            Food Gallery
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#FF9F0D] font-helvetica">Ch</span>oose Food
            Items
          </h2>
        </header>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {img.map((item, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-md"
              >
                <Image
                  src={item}
                  alt={`Food item ${index}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h3
              className={`${greatVibes.className} text-3xl md:text-4xl text-[#FF9F0D]`}
            >
              Why Choose Us
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#FF9F0D] font-helvetica">Ex</span>
              traordinary Taste and Experienced Chefs
            </h2>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className="bg-[#FF9F0D] rounded-md p-1 inline-block">
              <div className="flex items-center justify-between bg-white py-3 px-5 rounded-md text-black shadow-lg">
                <span className="text-[#FF9F0D] text-4xl md:text-5xl font-bold mr-4">
                  30+
                </span>
                <div>
                  <p className="text-base md:text-lg">Years Of</p>
                  <p className="text-xl md:text-2xl font-bold">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsComponent;
