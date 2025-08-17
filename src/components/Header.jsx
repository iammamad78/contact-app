import React from "react";

function Header() {
  return (
    <div className="m-20 flex flex-col gap-8">
      <h1 className="text-4xl text-blue-700 font-bold">Contact App</h1>
      <p className="flex justify-center items-center gap-2">
        <a
          href="#"
          className=" text-blue-700 bg-blue-200 px-2 py-0.5 font-semibold  rounded-xl"
        >
          BotoStart
        </a>
        <span className="text-gray-500"> | React.js Full Course</span>
      </p>
    </div>
  );
}

export default Header;
