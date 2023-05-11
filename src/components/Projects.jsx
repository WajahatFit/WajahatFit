import React from "react";
import present from "../images/undraw_pitching_re_fpgk.svg";
import orangees from "../images/Screenshot 2023-05-11 at 15.27.51.png";
import memeGenerator from "../images/Screenshot 2023-05-11 at 16.03.29.png";
import zahra from "../images/Screenshot 2023-05-11 at 16.06.48.png";

export default function Projects() {
  return (
    <div id="projects" className="pt-14 bg-indigo-900 p-8 lg:h-screen">
      <div className="flex flex-col items-center space-y-8 lg:flex flex-row">
        <h1 className="text-3xl font-semibold text-center text-white">
          My Recents Projects
        </h1>
        <div className="flex flex-wrap items-center justify-around lg:flex flex-col">
          <div className="flex flex-wrap justify-around items-center lg:w-3/6">
            <a href="https://orangee.netlify.app/">
              <img className="w-48 pb-4 lg:w-42" src={orangees} alt="project" />
            </a>
            <a href="https://memesss.netlify.app/">
              <img
                className="w-48 pb-4 lg:w-48"
                src={memeGenerator}
                alt="project1"
              />
            </a>
            <a href="https://zahrasrestaurant.co.uk/">
              <img className="w-48 pb-4 lg:w-42" src={zahra} alt="project2" />
            </a>
          </div>

          <div className="pt-14">
            <img
              className="w-42 items-center lg:w-32"
              src={present}
              alt="presentation"
            />
          </div>
        </div>
        <div className="flex w-full justify-evenly lg:w-3/6">
          <a
            href="https://github.com/WajahatFit"
            target="_none"
            className="text-xl lg:text-3xl hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300"
          >
            {"</>"}
          </a>
        </div>
      </div>
    </div>
  );
}
