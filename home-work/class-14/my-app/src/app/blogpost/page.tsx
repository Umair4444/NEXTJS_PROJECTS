import Link from "next/link";
import React from "react";

const blogpost = async (props: any) => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await (await fetch(url)).json();
  //   console.log(res);

  return (
    <div>
      <div className="text-center text-4xl font-bold uppercase underline decoration-zinc-500 ">
        blogpost Data
      </div>

      <ul className="grid grid-cols-2 gap-2 mx-5 my-5">
        {res.map((data: any, index: any) => (
          <li
            key={data.id}
            className={`container  m-auto shadow-lg text-xl bg-slate-400 ${
              index % 2 == 0 ? "bg-blue-400" : "bg-red-400"
            } py-1 my-1 text-center rounded-2xl`}
          >
            <Link href={`blogpost/${data.id}`}>
              <h1 className="text-white">
                {data.id}.<span className="mx-2">{data.title}</span>
              </h1>
            </Link>
            <h1>Status : {data.completed ? "completed" : "Not Completed"}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default blogpost;
