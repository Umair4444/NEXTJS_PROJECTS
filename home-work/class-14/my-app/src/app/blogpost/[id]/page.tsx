import React from "react";

const blogpostId = async ({ params }: any) => {
  const url = `https://jsonplaceholder.typicode.com/todos/${params.id}`;
  const res = await (await fetch(url)).json();
  console.log(params);

  return (
    <div className="bg-slate-300 h-screen flex items-center justify-center flex-col">
      <div className=" text-center text-5xl font-bold px-10 py-5 uppercase">
        blogpost {params.id}
      </div>

      {
        <div
          key={res.id}
          className={`container  m-auto shadow-lg text-3xl capitalize  bg-slate-700 text-white  py-10 my-1 text-center rounded-full `}
        >
          <h1>
            <span className="mx-2">{res.title}</span>
          </h1>
          <h1>Status : {res.completed ? "completed" : "Not Completed"}</h1>
        </div>
      }
    </div>
  );
};

export default blogpostId;
