import React from "react";
import Navbar from "./NavBar";
import vidoebg  from "./image/mixkit.mp4"
import Secondepage from "./secondepage";


export default function FirstPage() {
  return (
    <>
      <div className="">
        <Navbar />

        <video src={vidoebg} autoPlay loop muted className=" h-[100vh] w-[100%] object-cover "/>
        <div  className= "  absolute w-[100%] h-[100%]  flex top-0    items-center flex-row px-40  " >
        <h1  className=" text-white text-6xl mb-16 leading-[65px] w-[1000px]  font-medium		  " > The Amazon Forest<br/> Is considered the Lungs <br/> of The World.</h1>
        <div className=" border-solid border-white bg-[rgb(33_51_41/0.6)]  w-[569px]   p-[40px]">
        <h1 className="text-white  text-2xl "> The Amazon Rainforest is a massive and diverse ecosystem in South America, spanning several countries. It's known for its rich biodiversity and crucial role in global climate regulation as the largest rainforest on Earth.</h1>
        <p className="text-white my-6">Easily find the right programs for you and your land.</p>
        <button className="text-[#1c2721] border-solid bg-[#e37f3b] rounded-md p-[1rem]">
        <a href="https://www.frontiersin.org/articles/10.3389/ffgc.2019.00047/full" target="_blank" rel="noopener noreferrer">
        Click For More Information
        </a>
        </button>


        </div>
        
        </div>
        <Secondepage/>  
      </div>
      
    </>
  );
}
