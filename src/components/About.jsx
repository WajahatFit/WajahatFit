import React from "react";
import details from "../images/undraw_profile_details_re_ch9r.svg";
import resume from "../images/resume.pdf";
export default function About() {
  return (
    <div id="about">
      <div className="flex flex-col text-center space-y-8 p-8 lg:h-screen flex justify-around lg:w-full">
        <h3 className="text-center text-4xl font-semibold tracking-widest font-serif lg:text-6xl">
          About
        </h3>
        <h1 className="font-serif text-2xl">
          Developing{" "}
          <span className="italic capitalize text-3xl">top class</span> websites
          using modern tech!
        </h1>
        <p className="text-2xl text-gray-500">
          I'm Wajahat, enthusiastic about new technology that we are evolved
          around, made me dig deeper into web development which I felt in love
          with.
        </p>
        <button className="m-auto bg-black hover:bg-sky-700 p-4 rounded-xl text-white ">
          <a href={resume} download>
            Download Resume
          </a>
        </button>
        <img
          className="w-56 m-auto lg:w-96"
          src={details}
          alt={"avatar with some drawing"}
        />
      </div>
    </div>
  );
}
