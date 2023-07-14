import React from "react";
import details from "../images/undraw_profile_details_re_ch9r.svg";
import resume from "../pdf/newResume.pdf";
export default function About() {
  return (
    <div id="about">
      <div className="flex flex-col text-center space-y-8 p-8 lg:h-screen flex justify-around lg:w-full">
        <h3 className="text-center text-4xl font-semibold tracking-widest font-serif lg:text-6xl">
          About
        </h3>
        <blockquote class="text-4xl font-semibold italic text-center text-slate-900">
          Crafting{" "}
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
            <span class="relative text-white">Web Magic</span>
          </span>{" "}
          with code and caffeine.
        </blockquote>

        <p className="text-2xl text-gray-500">
          I'm Wajahat, enthusiastic about new technology that we are evolved
          around, made me dig deeper into web development which I felt in love
          with.
        </p>
        <button className="m-auto bg-black hover:bg-sky-500 p-4 rounded-xl text-white shadow-2xl">
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
