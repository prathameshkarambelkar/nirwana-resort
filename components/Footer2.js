import React from "react";

const Footer2 = () => {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: "url('/img/footer/footer2.png')",
        }}
      >
        <img src="/img/WhiteLogosm.png" className="p-4" />
        <p className="text-white p-4 font-thin">
          The website ends here, but your journey to the remotest destinations
          in India and Nepal begins with Zostel. Explore with our social
          hostels, homestays, and luxury stays on your next holiday.
        </p>
        <h1 className="text-md text-white underline p-4">USEFUL LINKS</h1>
        <div className="flex-col px-4 py-2">
          <h1 className="text-white ">Guest Policy</h1>
          <h1 className="text-white ">Privacy Policy</h1>
          <h1 className="text-white ">Careers</h1>
        </div>
        <div className="flex-col px-4 py-2">
          <h1 className="text-white ">Destination</h1>
          <h1 className="text-white ">Franchise</h1>
          <h1 className="text-white ">Contact Us</h1>
          <h1 className="text-white ">Cookie Policy</h1>
        </div>

        <div className="flex-col px-4 py-2">
          <h1 className="text-white ">About Us</h1>
          <h1 className="text-white ">Suport</h1>
          <h1 className="text-white ">Terms</h1>
        </div>

        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full  p-6 mx-auto text-center">
            <div class="text-sm text-white font-semibold py-1">
               @2022 <b>NIRWANA STAYS</b> All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
