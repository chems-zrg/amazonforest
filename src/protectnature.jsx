import React from "react";
import "./protectnature.css"; // Ensure this file is correctly imported and set up
import firstimage from "./image/pexels-pixabay-47547.jpg";
import secondimage from "./image/pexels-chevanon-1108099.jpg";
import thirdimage from "./image/pexels-pixabay-86405.jpg";
import fourdimage from "./image/pexels-pixabay-50577.jpg";

export default function Protecnature() {
  return (
    <>
      <div className="h-[80vh] w-[100%] my-20    border-t-[2px] border-solid  border-[#ccc]">
        <div className="flex flex-col items-center mt-5">
          <h1 className="text-black text-5xl font-medium my-7">
            Nature Needs You
          </h1>
          <p className="text-center max-w-[750px]">
            There are so many ways you can get involved and do your part to
            support a world where people and nature thrive together.
          </p>
        </div>
        <div className="flex gap-10 mx-20 my-16">
          <figure className="captioned-image  bg-cover bg-center  w-72 ">
            <img src={firstimage} alt="Mountains" />
            <figcaption>Use Renewable Energy</figcaption>
          </figure>
          <figure className="captioned-image  bg-cover bg-center  w-72 ">
            <img src={secondimage} className="h-[100%]" alt="Mountains" />
            <figcaption>Volunteer for Environmental Projects</figcaption>
          </figure>
          <figure className="captioned-image  bg-cover bg-center  w-72 ">
            <img src={fourdimage} className="h-[100%]" alt="Mountains" />
            <figcaption>Adopt Eco-friendly Habits</figcaption>
          </figure>

          <figure className="captioned-image  bg-cover bg-center  w-72 ">
            <img src={thirdimage} className="h-[100%]" alt="Mountains" />
            <figcaption>Support Sustainable Businesses</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
