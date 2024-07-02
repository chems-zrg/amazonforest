import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import image from "./image/5832e2c1d30b7bcba78291e584b21b74-removebg-preview.png";

export default function Footer() {
  return (
    <>
      <div className="h-40 bg-[#1a1a1a] flex items-center  w-[100%]  justify-center  ">
        <img src={image} alt="" className=" h-[200px]   w-[200px]  " />
        <p className=" text-white text-2xl">Let's work to protect Amazon Forest  </p>
      </div>
      <div className="bg-[#1a1a1a]  ">
        <div className=" flex   items-center justify-between  py-10  px-20 border-solid  border-y-[2px]  border-[#5c5c5c] bg-[#1a1a1a]  ">
          <div>
            <h1 className=" text-white">SOCIAL</h1>
          </div>
          <div className=" flex">
            <FaSquareFacebook className="  text-4xl text-white " />
            <FaTwitterSquare className="  text-4xl text-white" />
            <FaInstagram className="  text-4xl text-white" />
            <CiLinkedin className="  text-4xl text-white" />
            <FaSquareYoutube className="  text-4xl text-white" />
          </div>
          <div className="flex items-center">
            <FaPhoneSquareAlt className=" text-4xl text-white" />
            <p className=" text-white text-xl">0672491906</p>
          </div>
        </div>
        <div className="flex gap-40  py-10  px-20   ">
          <div>
            <h1 className=" w-60  text-white text-1xl">GLOBAL SITES</h1>
          </div>
          <div className="flex    items-center  gap-5 w-[100%]">
            <p className=" text-white">Australia</p>
            <p className=" text-white">Brazil</p>
            <p className=" text-white">Canada</p>
            <p className=" text-white">China</p>
            <p className=" text-white">India</p>
            <p className=" text-white">Mexico</p>
            <p className=" text-white">Hong Kong (China): English 中文</p>
            <p className=" text-white">Indonesia: English Bahasa</p>
          </div>
        </div>
      </div>
    </>
  );
}
