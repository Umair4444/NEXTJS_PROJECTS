import React from "react";
import Image from "next/image";

const CoreCourse = () => {
    return (
        <div className="flex flex-col mx-28 my-12">
            <h1 className="text-4xl font-extrabold text-sky-900 my-8 ">Core Courses Sequence</h1>
            <div className="flex gap-8 smart:flex-col ">
                <div className=" shadow-2xl rounded-lg  ">
                    <Image src={"/12.jpg"} alt="core course" width={300} height={100} className=" rounded-lg smart:w-full " ></Image>
                    <h2 className="text-center text-lg font-bold py-5 text-gray-600">Programming Fundamentals</h2>
                </div>
                <div className="shadow-2xl rounded-lg">
                    <Image src={"/13.jpg"} alt="core course" width={300} height={100} className=" rounded-lg smart:w-full " ></Image>
                    <h2 className="text-center text-lg font-bold py-5 text-gray-600">Web2 Using NextJS</h2>
                </div>
                <div className="shadow-2xl rounded-lg">
                    <Image src={"/14.jpg"} alt="core course" width={300} height={100} className=" rounded-lg smart:w-full " ></Image>
                    <h2 className="text-center text-lg font-bold py-5 text-gray-600">Earn as You Learn</h2>
                </div>
            </div>
        </div>
    );
};

export default CoreCourse;
