import React from "react";
import Card from "./Card";
const FeatureProducts = () => {
  return (
    <>
      <main className="flex flex-col bg-slate-400">
        <div>
          <h1 className="text-4xl text-center font-semibold border-b-4 border-black w-fit m-auto my-5 ">
            Feature Products
          </h1>
        </div>
        <div className="w-full flex flex-col flex-wrap items-center justify-around gap-1 md:flex-row md:gap-10 md:p-4">
          <Card imgTitle="/1.jpg" price="$30" productName="Gucci Flora" />
          <Card imgTitle="/2.jpg" price="$20" productName="Saeed Ghani" />
          <Card imgTitle="/1.jpg" price="$12" productName="Channel" />
          <Card imgTitle="/2.jpg" price="$15" productName="Boss" />
        </div>
      </main>
    </>
  );
};

export default FeatureProducts;
