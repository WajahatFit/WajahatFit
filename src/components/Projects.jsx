import React from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../images/a.png";
import project2 from "../images/zahra.png";
import project3 from "../images/meme.png";

export default function Projects({ image, imageAlt, title, link }) {
  return (
    <div id="projects" className="font-serif flex flex-col">
      <h1 className="text-4xl font-semibold tracking-widest pb-8 pt-4 text-center lg:text-6xl">
        Projects
      </h1>

      <div className="flex flex-col items-center justify-around h-full w-full pb-8 lg:flex-row justify-center items-center space-y-0.5">
        <div>
          <ProjectCard
            image={project3}
            imageAlt="memes"
            title="Random Memes Generator"
            link="https://memesss.netlify.app/"
          />
        </div>
        <div>
          <ProjectCard
            image={project1}
            imageAlt="orangees"
            title="Electronics Online Store"
            link="https://orangee.netlify.app/"
          />
        </div>
        <div>
          <ProjectCard
            image={project2}
            imageAlt="zahra"
            title="Zahra Restaurant"
            link="https://zahrasrestaurant.co.uk/"
          />
        </div>
      </div>
    </div>
  );
}
