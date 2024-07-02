import React from "react";
import image from "./image/pexels-hikaique-775201.jpg";
import secondeimage from "./image/bird-6899457_1280.jpg";
import Thirdpage from "./thirdpageaboutus";
import Protecnature from "./protectnature";
import Footer from "./footer";
export default function Secondepage() {
  return (
    <>
      <div className="border-b-[2px] border-solid my-20 border-[#ccc]"></div>
      <div className="w-[100%] h-[100%] bg-white flex flex-row px-40 gap-24 items-center">
        <img src={image} alt="Nature" className="w-[580px] h-[90vh]" />
        <div className="w-[28em]">
          <p className="font-medium mb-4">OUR MISSION</p>
          <h1 className="font-medium text-5xl font-serif mb-2">
            Protecting Forests:
            <br /> A Path to Global Sustainability
          </h1>
          <p>
            Forests are essential to our mission of conserving the lands and
            waters vital for all life. Your support helps us protect these
            critical ecosystems, addressing climate change and biodiversity loss
            across 70+ countries and territories. Forests provide habitats for
            diverse species and serve as carbon sinks, mitigating climate
            change. By safeguarding forests, we ensure a sustainable future,
            making a significant impact one acre and river mile at a time.
          </p>
          <button className="mt-5 p-4 bg-[#007931] rounded-md">
            <a className="text-white" href="https://www.google.com">
              DONATE NOW
            </a>
          </button>
        </div>
      </div>
      <div
        className="absolute right-[300px] bottom-[-1060px] bg-white max-w-[600px] px-[60px] py-[80px] border-t-4 border-[#0a7a38] overflow mb-2 z-0"
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
      <div
        className="grid gap-8 my-20 px-40 py-10  bg-[#41695E]	 w-[100%] "
        style={{ backgroundImage: `url(${secondeimage})` }}
      >
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
            <h1 className="text-2xl font-bold mb-2">2.5B</h1>
            <p>
              Sequester 2.5 billion metric tons of carbon dioxide annually the
              equivalent of removing 530 million cars from the road each year.
            </p>
          </div>
          <div className="bg-[rgb(33_51_41/0.6)] text-white p-6 rounded-lg text-center">
            {" "}
            <img src="" alt="" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">85M</h1>
            <p>
              Help 85 million people at severe risk of climate-related
              emergencies by safeguarding Amazon habitats that protect
              communities.
            </p>
          </div>
          <div className="bg-[rgb(33_51_41/0.6)] text-white p-6 rounded-lg text-center">
            <img src="" alt="" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">500M</h1>
            <p>
              Conserve 500 million hectares—a land area 1.5 times the size of
              India—of biodiverse habitats such as the Amazon forests,
              grasslands, and wetlands.
            </p>
          </div>
          <div className="bg-[rgb(33_51_41/0.6)] text-white  p-6 rounded-lg text-center">
            <img src="" alt="" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">3.5B</h1>
            <p>
              Protect 3.5 billion hectares of marine habitat representing nearly
              10% of the world’s oceans—through sustainable practices and
              protected areas.
            </p>
          </div>
          <div className="bg-[rgb(33_51_41/0.6)] text-white p-6 rounded-lg text-center">
            <img src="" alt="" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">25M</h1>
            <p>
              Preserve 1 million kilometers of rivers—enough to stretch 25 times
              around the globe—plus 25 million hectares of lakes and wetlands in
              the Amazon basin.
            </p>
          </div>
          <div className="bg-[rgb(33_51_41/0.6)] text-white p-6 rounded-lg text-center">
            <img src="" alt="" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">40M</h1>
            <p>
              Support the leadership of 40 million people from Indigenous and
              local communities in managing their environment and securing their
              rights within the Amazon
            </p>
          </div>
        </div>
      </div>
      <Thirdpage />
      <Protecnature />
      <Footer />
    </>
  );
}
