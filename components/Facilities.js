import React from "react";

export const Facilities = () => {
  return (
    <>
      <div
        className=" bg-black  bg-cover bg-no-repeat "
        style={{
          backgroundImage: "url('/img/leaf.png')",
        }}
      >
        <div className="pt-7 pl-7  ">
          <h1 className="text-[#C9F15C] text-xs">Resort</h1>
          <h1 className="text-[#FFFFFF] font-bold underline decoration-[#61CC47] text-sm ">
            Facilities
          </h1>
        </div>
        <div className="m-2 pb-4">
          <div className="flex justify-around items-center p-2 m-2 " >
            <img src="/img/icons/football.png" />
            <h1 className="text-white text-xs ">Playground</h1>
            <img src="/img/icons/water.png" />
            <h1 className=" text-white text-xs ">Hot Water</h1>
          </div>
          <div className="flex justify-around items-center p-2 m-2 " >
            <img src="/img/icons/parking.png" />
            <h1 className="text-white text-xs ">Spacious Parking</h1>
            <img src="/img/icons/restaurant.png" />
            <h1 className=" text-white text-xs ">Restaurantsr</h1>
          </div>
          <div className="flex justify-around items-center m-2 p-2 " >
            <img src="/img/icons/meetroom.png" />
            <h1 className="text-white text-xs ">Meeting Room Hall</h1>
            <img src="/img/icons/indoor.png" />
            <h1 className=" text-white text-xs ">Indoor Games</h1>
          </div>
          <div className="flex justify-around items-center m-2 p-2" >
            <img src="/img/icons/wifi.png" />
            <h1 className="text-white text-xs ">Wifi Connection</h1>
            <img src="/img/icons/doctor.png" />
            <h1 className=" text-white text-xs ">Doctor On Call</h1>
          </div>
        </div>

        {/* <div className=" text-xs p-1 m-6 ">
          <div className="">
            <div className=" text-white ">
              <div className="flex ">
                <div className="flex justify-between items-center">
                  <img src="/img/icons/football.png" />
                  <h1 className=" mx-5">Playground</h1>
                </div>
                <div className="flex items-center justify-between">
                  <img src="/img/icons/water.png" />
                  <h1 className="mx-5">Hot Water</h1>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex  items-center">
                  <img src="/img/icons/parking.png" />
                  <h1 className="mx-5">Spacious Parking</h1>
                </div>
                <div className="flex items-center ml-6">
                  <img src="/img/icons/restaurant.png" />
                  <h1 className="mx-5">Restaurants</h1>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex items-center ">
                  <img src="/img/icons/meetroom.png" />
                  <h1 className="mx-5">Meeting Room Hall</h1>
                </div>
                <div className="flex items-center ml-3">
                  <img src="/img/icons/indoor.png" />
                  <h1 className="mx-5">Indoor Games</h1>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex items-center">
                  <img src="/img/icons/wifi.png" />
                  <h1 className="mx-5">Wifi Connection</h1>
                </div>
                <div className="flex items-center ml-5">
                  <img src="/img/icons/doctor.png" />
                  <h1 className="mx-5">Doctor On Call</h1>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Facilities;
