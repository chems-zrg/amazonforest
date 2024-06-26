import React from "react";
import image from "./image/pexels-luisdalvan-1770809.jpg"

export  default function Thirdpage () { 
return <>
    <div  className="   bg-slate-100 h-[400px]  flex flex-row gap-36   px-10 py-60 mx-40 mb-20 border-solid   rounded-xl items-center">
        
        <div  >
            <h1  className="text-black  text-5xl  font-medium	 w-[400px]  mb-5  " >Subscrite To Our Newsletter</h1>
            <p className="text-black    w-[480px] mb-2 ">Subscribe to our email newsletter today to  receive  update on the latest news </p>
            <div  className=" p-4 bg-white  border-solid  rounded-3xl w-80  grid   grid-cols-3   "><input type="text" placeholder="Enter your Email    " className=" text-black col-span-2"   /> <button  className=" justify-self-end text-[#1c2721] border-solid bg-[#e37f3b] rounded-md p-[1rem]	" >Subscribe</button> </div>
        </div>
        <div>
        <img src={image}  className="h-[450px] w-[450px]   border-solid rounded-xl" alt="" />
        </div>

    </div>

    </>
}