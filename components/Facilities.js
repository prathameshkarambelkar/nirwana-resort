import React from "react";

export const Facilities = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat "
        style={{
          backgroundImage: "url('/img/Facbg.png')",
        }}
      >
        <div className="pt-7 px-7 pb-4 font-sans">
          <h1 className="text-[#C9F15C] text-xs">Resort</h1>
          <h1 className="text-[#FFFFFF] font-bold underline decoration-[#61CC47] text-sm ">
            Facilities
          </h1>
        </div>

        <div className="flex-row flex-wrap text-xs text-center p-4  ">
          <div className="m-5">
            <div className=" flex-col flex-wrap  text-white ">
              <div className="flex flex-row ">
                <div className="flex items-center">
                  <img src="/img/icons/football.png" />
                  <h1 className="justify-between items-center mx-5">Playground</h1>
                </div>
                <div className="flex items-center ml-12">
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
        </div>
      </div>
    </>
  );
};

export default Facilities;
