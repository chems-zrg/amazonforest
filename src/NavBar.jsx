import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between w-full h-15 p-4  bg-[rgb(33_51_41/0.6)]    shadow-md fixed  z-30" title="Scroll-away Navbar 	">
        <h1 className="text-xl text-white font-bold ">LOGO</h1>
        <div className="flex space-x-4  ">
          <p className="cursor-pointer  text-white hover:underline p-1">PROJECTS</p>
          <p className="cursor-pointer  text-white hover:underline p-1">ABOUT</p>
          <p className="p-1 border border-solid  text-white border-black cursor-pointer hover:bg-black hover:text-white transition duration-300">
          AVAILABLE FOR FREELANCE
        </p>
        </div>
      </div>
    </>
  );
}
