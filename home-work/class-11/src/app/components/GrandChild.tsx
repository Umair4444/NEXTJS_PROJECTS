import React from "react";

const GrandChild = (prop: any) => {
  return (
    <div className="text-2xl text-center font-bold shadow-lg container m-auto   ">
      My name is {prop.name} and my e-mail is {prop.email}
    </div>
  );
};

export default GrandChild;
