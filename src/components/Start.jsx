import React from "react";
import svg from "../images/undraw_hello_re_3evm.svg";

export default function Start() {
  return (
    <div className=" w-full h-5/6 bg-purple-500 text-white tracking-wider">
      <div className="flex flex-col items-center justify-around space-y-24 pt-8">
        <h1 className="text-4xl">
          Hi, I'm <span className="font-semibold">Wajahat</span>!
        </h1>
        <p className="w-2/3 text-black text-center text-2xl tracking-wider">
          I'm full-stack web developer who's looking for make this world a
          better place by giving solution to problems using latest technologies.
        </p>
        <img className="w-3/6 p-4" src={svg} alt={"hello svg"} />
      </div>
    </div>
  );
}
