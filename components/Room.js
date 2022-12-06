import React from "react";

const Room = () => {
  return (
    <>
    <div className="lg:flex lg:justify-center lg:items-center ">
    <div className=" border lg:w-1/5  m-2 rounded-md">
        <div className="  flex flex-col justify-center items-center m-4 ">
          <img className=" " src="/img/room1.png" />
        </div>
        <h1 className="ml-2 p-2 font-bold lg:text-xl">Glamping</h1>
        <div className="flex mb-4 ">
          <button className="rounded-lg text-white font-light bg-[#197C38] border ml-4 p-2">
            Book Now
          </button>
          <button className="rounded-lg ml-4 font-light text-white bg-[#197C38] border p-2">
            Get Quote
          </button>
        </div>
        <div className="list-disc ml-7 mb-4">
          <li className="text-sm lg:text-base">Friends & Colleagues</li>
          <li className="text-sm lg:text-base">Rs. 1349 per person</li>
          <li className="text-sm lg:text-base">Tent Stay</li>
          <li className="text-sm lg:text-base">Friends & Colleagues</li>
          <li className="text-sm lg:text-base">Friends & Collegues</li>
        </div>
      </div>
      <div className=" border m-2 lg:w-1/5 lg:h-1/2 rounded-md">
        <div className="  flex flex-col justify-center items-center m-4 ">
          <img className=" " src="/img/room1.png" />
        </div>
        <h1 className="ml-2 p-2 font-bold lg:text-xl">Clamping</h1>
        <div className="flex mb-4 ">
          <button className="rounded-lg  text-white font-light bg-[#197C38] border ml-4 p-2">
            Book Now
          </button>
          <button className="rounded-lg   ml-4 font-light text-white bg-[#197C38] border p-2">
            Get Quote
          </button>
        </div>
        <div className="list-disc ml-7 mb-4">
          <li className="text-sm lg:text-base">Friends & Colleagues</li>
          <li className="text-sm lg:text-base">Rs. 1349 per person</li>
          <li className="text-sm lg:text-base">Tent Stay</li>
          <li className="text-sm lg:text-base">Friends & Colleagues</li>
          <li className="text-sm lg:text-base">Friends & Collegues</li>
        </div>
      </div>

    </div>
      
    </>
  );
};

export default Room;
