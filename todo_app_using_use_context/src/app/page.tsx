"use client";
import Link from "next/link";
import { useContext } from "react";
import UserContext from "@/context/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);
  console.log("login detail of user : ", user);
  return (
    <div className="w-full h-screen bg-slate-500 pt-60 px-20">
      <div className=" bg-slate-300 rounded-full grid grid-cols-2 gap-4 px-20 py-10 text-center">
        <h1 className="text-2xl font-bold mb-4 col-span-6">Hi from dev</h1>
        <Link
          href="/simple_todo_with_context"
          className="py-3 px-6 mx-5 w-4/5 bg-red-500 text-white rounded-xl text-lg transition hover:bg-red-600"
        >
          Go to Context Todo with useState
        </Link>
        <Link
          href="/todo_with_reducers"
          className="py-3 px-6 bg-red-500 text-white rounded-xl text-lg transition hover:bg-red-600"
        >
          Go to Context Todo with useReducers
        </Link>
        <Link
          href="/profile"
          className="py-3 px-6 bg-red-500 text-white rounded-xl text-lg transition hover:bg-red-600"
        >
          Go to Context Profile Sending only Variable no function
        </Link>
      </div>
      <div>
        UserName : {user?.userName} and Password : {user?.password}
      </div>
    </div>
  );
}
