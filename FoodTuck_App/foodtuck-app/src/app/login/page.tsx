import { LoginForm } from "@/components/Forms/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#EDEAE3] text-black">
      <div>
        <h1 className="text-3xl py-5 text-center font-bold">Login Form</h1>
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
