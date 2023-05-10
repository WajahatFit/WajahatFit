import React from "react";

export default function Projects() {
  return (
    <div id="projects" className="pt-14 bg-indigo-500 p-8 lg:h-5/6">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-3xl font-semibold text-center text-white">
          My Recents Projects
        </h1>
        <div className="w-11/12 h-72 bg-white border border-grey-500"></div>
        <div className="flex w-full justify-evenly">
          <a
            href="https://github.com/WajahatFit"
            target="_none"
            className="text-xl lg:text-3xl hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-500 duration-300"
          >
            {"</>"}
          </a>
        </div>
      </div>
    </div>
  );
}
