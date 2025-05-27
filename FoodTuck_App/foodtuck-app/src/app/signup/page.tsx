import { SignUpForm } from "@/components/Forms/SignUpForm";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#EDEAE3] text-black">
      <div>
        <h1 className="text-3xl py-5 text-center font-bold">SignUp Form</h1>
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default page;
