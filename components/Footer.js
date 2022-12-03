import React from "react";

const Footer = () => {
  return (
    <>
    <div className="flex mx-auto  ">
      <div className=" ">
        <img src="/img/footer/footer1.png" />
        <h1 className="absolute top-5 mx-12 font-extrabold text-white">Recommend your changes for us.</h1>
        <form className="absolute top-14 left-8 flex ">
          <input
            type="text"
            class="
        w-full
        px-5
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
          <button class="bg-[#197C38] text-white font-semibold py-2 px-4 mx-2 border  rounded">
            Submit
          </button>
        </form>
      </div>

      <div  style={{backgroundImage: "url(/img/footer/footer1.png)"}} className="relative" >

      </div>
      </div>
    </>
  );
};

export default Footer;
