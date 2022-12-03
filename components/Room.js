import React from "react";

const Room = () => {
  return (
    <>
      <div className=" border m-2 rounded-md">
        <div className="  flex flex-col justify-center items-center m-4 ">
          <img className=" " src="/img/room1.png" />
        </div>
        <h1 className="ml-2 p-2 font-bold">Glamping</h1>
        <div className="flex mb-4 ">
          <button className="rounded-lg text-white font-light bg-[#197C38] border ml-4 p-2">
            Book Now
          </button>
          <button className="rounded-lg ml-4 font-light text-white bg-[#197C38] border p-2">
            Book Now
          </button>
        </div>
        <div className="list-disc ml-7 mb-4">
          <li>Friends & Colleagues</li>
          <li>Rs. 1349 per person</li>
          <li>Tent Stay</li>
          <li>Friends & Colleagues</li>
          <li>Friends & Collegues</li>
        </div>
      </div>
    </>
  );
};

export default Room;