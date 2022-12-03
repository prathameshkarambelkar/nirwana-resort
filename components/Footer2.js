import React from "react";

const Footer2 = () => {
  return (
    <>
      <div 
        className="flex flex-col font-sans   items-center justify-center"
        style={{
          backgroundImage: "url('/img/footer/footer1.png')",
        }}
      >
        <h1 className="text-white font-normal pt-6">
          Recommend Your Changes For Us
        </h1>
        <div>
        <input
          type="text"
          class="
          my-4
          p-1
        text-gray-700
        bg-white bg-clip-padding
        rounded
        transition
        ease-in-out
        border
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
        <button class="bg-[#197C38] text-white text-sm font-light p-1 my-4 mx-2 border  rounded">
            Submit
          </button>

        </div>
        
        
      </div>

      <div
        className=""
        style={{
          backgroundImage: "url('/img/footer/footer2.png')",
        }}
      >
        <img src="/img/WhiteLogosm.png" className="p-4" />
        <p className="text-white p-4 font-thin font-sans">
          The website ends here, but your journey to the remotest destinations
          in India and Nepal begins with Zostel. Explore with our social
          hostels, homestays, and luxury stays on your next holiday.
        </p>
        <h1 className="text-md text-white underline font-sans p-4">USEFUL LINKS</h1>
        <div className="flex-col px-4 py-2 font-sans">
          <h1 className="text-white ">Guest Policy</h1>
          <h1 className="text-white ">Privacy Policy</h1>
          <h1 className="text-white ">Careers</h1>
        </div>
        <div className="flex-col px-4 py-2 font-sans">
          <h1 className="text-white ">Destination</h1>
          <h1 className="text-white ">Franchise</h1>
          <h1 className="text-white ">Contact Us</h1>
          <h1 className="text-white ">Cookie Policy</h1>
        </div>

        <div className="flex-col px-4 font-sans py-2">
          <h1 className="text-white ">About Us</h1>
          <h1 className="text-white ">Suport</h1>
          <h1 className="text-white ">Terms</h1>
        </div>

        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full  p-6 mx-auto text-center">
            <div class="text-sm text-white font-normal font-sans py-1">
              @2022 <b>NIRWANA STAYS</b> All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
