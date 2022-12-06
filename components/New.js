import React from "react";

const New = () => {
  return (
    <>
      <div className="m-1 p-1 lg:w-1/5 ">
        <img className=" " src="/img/room1.png" />
        <h1 className="font-normal pt-2 pl-2">Kayaking</h1>
        <h3 className="font-light text-xs p-2">Luxurious Elevated tent</h3>
        <button className="rounded-lg w-full  text-sm font-light text-white bg-[#197C38] border p-2">
          Explore
        </button>
      </div>
      <div className="m-1 p-1 lg:w-1/5">
        <img className=" " src="/img/room1.png" />
        <h1 className="font-normal pt-2 pl-2">Fishing</h1>
        <h3 className="font-light text-xs p-2">Luxurious Elevated tent</h3>
        <button className="rounded-lg w-full  text-sm font-light text-white bg-[#197C38] border p-2">
          Explore
        </button>
      </div>
    </>
  );
};

export default New;
