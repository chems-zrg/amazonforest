import React from "react";
import image from "./image/pexels-hikaique-775201.jpg";
import secondeimage from"./image/bird-6899457_1280.jpg"; 
import Thirdpage from "./thirdpageaboutus";
export default function Secondepage() {
  return (
    <>
      <div className="border-b-[2px] border-solid my-20 border-[#ccc]"></div>
      <div className="w-[100%] h-[100%] bg-white flex flex-row px-40 gap-24 items-center">
        <img src={image} alt="Nature" className="w-[580px] h-[90vh]" />
        <div className="w-[28em]">
          <p className="font-medium mb-4">OUR MISSION</p>
          <h1 className="font-medium text-5xl font-serif mb-6">
            Conserving the lands and waters on which all life depends
          </h1>
          <p>
            Every acre we protect and every river mile we restore begins with
            you. Your support helps us take on the dual threats of climate
            change and biodiversity loss across 70+ countries and territories.
          </p>
          <button className="mt-8 p-4 bg-[#007931] rounded-md">
            <a className="text-white" href="https://www.google.com">
              DONATE NOW
            </a>
          </button>
        </div>
      </div>
      <div
        className="absolute right-[300px] bottom-[-1050px] bg-white max-w-[600px] px-[60px] py-[80px] border-t-4 border-[#0a7a38] overflow mb-2 z-0"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h1 className="mb-[30px] font-medium text-2xl">
          Get our latest conservation news and see how we’re protecting our
          natural world.
        </h1>
        <p>Email address:</p>
        <div>
          <input
            placeholder="yourname@gmail.com"
            className="w-[300px] border-solid border-[#949494] p-3 mr-3 ring-2 ring-[#949494]"
          />
          <button className="bg-[#007931] text-white p-3 rounded-md">
            SIGN UP
          </button>
        </div>
        
      </div>
      <div className=" h-60"></div>
      <div className="grid gap-8 my-20 px-40 py-10  bg-[#41695E]	 w-[100%] "    style={{ backgroundImage: `url(${secondeimage})` }}>
        <div className="text-center  border divide-solid  border-black text-white bg-[rgb(33_51_41/0.6)]   rounded-xl">
          <img src="" alt="" className="mx-auto mb-4" />
          <h1 className="font-medium text-3xl mb-4 ">Our Goals for 2030</h1>
          <p>
            We’re racing to hit these targets to help the world reverse climate
            change and biodiversity loss. Together, we find the paths to make
            change possible.
          </p>
          <button className="mt-8 p-4 bg-[#007931] text-white rounded-md mb-7">
            Learn More  
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[rgb(33_51_41/0.6)]  text-white p-6 rounded-lg text-center">
            <img src="" alt="" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">3B</h1>
            <p>
              Avoid or sequester 3 billion metric tons of carbon dioxide
              emissions annually—the same as taking 650 million cars off the
              road every year.
            </p>
          </div>
          <div
                             className="bg-[rgb(33_51_41/0.6)] text-white p-6 rounded-lg text-center"
                            
              >             <img src="" alt="" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">100M</h1>
            <p>
              Help 100 million people at severe risk of climate-related
              emergencies by safeguarding habitats that protect communities.
            </p>
          </div>
          <div className="bg-[rgb(33_51_41/0.6)] text-white p-6 rounded-lg text-center">
            <img src="" alt="" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">650M</h1>
            <p>
              Conserve 650 million hectares—a land area twice the size of
              India—of biodiverse habitats such as forests, grasslands, and
              deserts.
            </p>
          </div>
          <div className="bg-[rgb(33_51_41/0.6)] text-white  p-6 rounded-lg text-center">
            <img src="" alt="" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">4B</h1>
            <p>
              Conserve 4 billion hectares of marine habitat—more than 10% of the
              world’s oceans—through protected areas, sustainable fishing, and
              more.
            </p>
          </div>
          <div className="bg-[rgb(33_51_41/0.6)] text-white p-6 rounded-lg text-center">
            <img src="" alt="" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">30M</h1>
            <p>
              Conserve 1 million kilometers of rivers—enough to stretch 25 times
              around the globe—plus 30 million hectares of lakes and wetlands.
            </p>
          </div>
          <div className="bg-[rgb(33_51_41/0.6)] text-white p-6 rounded-lg text-center">
            <img src="" alt="" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">45M</h1>
            <p>
              Support the leadership of 45 million people from Indigenous and
              local communities in stewarding their environment and securing
              rights.
            </p>
          </div>
        </div>
        
      </div>
      <Thirdpage/>
      
    </>
  );
}
