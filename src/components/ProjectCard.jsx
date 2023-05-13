import React from "react";
export default function ProjectCard(props) {
  return (
    <div className="h-full w-96 flex flex-col items-center space-y-4 pb-8 lg:">
      <h1 className="text-2xl text-gray-500 bg-transparent pb-2 border-b-4 border-indigo-500 rounded-md">
        {props.title}
      </h1>
      <a href={props.link}>
        <img className="rounded-lg" src={props.image} alt={props.imgAlt} />
      </a>
    </div>
  );
}
