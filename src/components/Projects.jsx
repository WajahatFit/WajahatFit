import React from "react";
import ProjectCard from "./ProjectCard";
import present from "../images/undraw_pitching_re_fpgk.svg";
import orangees from "../images/Screenshot 2023-05-11 at 15.27.51.png";
import memeGenerator from "../images/Screenshot 2023-05-11 at 16.03.29.png";
import zahra from "../images/Screenshot 2023-05-11 at 16.06.48.png";

export default function Projects({ image, imageAlt, title, link }) {
  return (
    <div id="projects" className="font-serif flex flex-col lg:">
      <h1 className="text-4xl font-semibold tracking-widest pb-8 pt-4 text-center lg:text-6xl">
        Projects
      </h1>

      <div className="flex flex-col items-center justify-around space-y-8  h-full w-full pb-8 lg:flex-row justify-center items-center">
        <div>
          <ProjectCard
            image={orangees}
            imageAlt="orangees"
            title="Electronics Online Store"
            link="https://orangee.netlify.app/"
          />
        </div>
        <div>
          <ProjectCard
            image={memeGenerator}
            imageAlt="memes"
            title="Random Memes Generator"
            link="https://memesss.netlify.app/"
          />
        </div>
        <div>
          <ProjectCard
            image={zahra}
            imageAlt="zahra"
            title="Zahra Restaurant"
            link="https://zahrasrestaurant.co.uk/"
          />
        </div>
      </div>
    </div>
  );
}
