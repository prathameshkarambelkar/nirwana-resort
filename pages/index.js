import Link from "next/link";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Navbar from "../components/Navbar";
import New from "../components/New";
import Room from "../components/Room";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className=" w-full h-[80vh]   md:w-full bg-cover bg-[url('../public/img/home.png')]">
        <div className=" grid content-between ">
          <div className="m-6 p-2 flex text-md font-light flex-col justify-center items-center ">
            <h1>Stays That Are Parradise</h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="flex flex-col  justify-center items-center">
            <button className="rounded-lg w-6/12 text-sm text-white bg-[#197C38] border p-2">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <img className="lg:w-full lg:h-14" src="/img/divider.png" />
      </div>

      <Room />

      <div className="flex justify-around">
        <img className=" m-2 p-2 w-3/12 lg:w-44 lg:h-min" src="/img/tree.png" />
        <img
          className=" mt-6  w-3/12 lg:w-44 lg:h-min lg:mt-24 "
          src="/img/tree2.png"
        />
        <img
          className=" m-2 p-2 w-3/12 lg:w-44 lg:h-min lg:mt-4"
          src="/img/tree3.png"
        />
      </div>

      <div className="m-2 p-2 lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h1 className="font-bold text-lg lg:text-3xl">
          Whats <b className="text-[#FF0000]">NEW!</b>
        </h1>
      </div>

      <div className="flex justify-center m-2 mb-8">
        <New />
      </div>

      <div className="flex  items-center justify-between lg:justify-evenly">
        <img className="" src="/img/icons/leaf.png" />
        <h1 className="text-[#FF0000] text-sm lg:text-2xl font-bold text-center m-2  ">
          LAKE VIEW FROM TENT
        </h1>
        <img className="" src="/img/icons/leaf.png" />
      </div>

      <div className=" p-2 flex justify-center ">
        <img className="" src="/img/NirwanaStaysLogo.png" />
      </div>
      <div>
        <p className="p-5 text-sm font-light text-center m-2 leading-6">
          Our restaurant has a distinctive feature, the seating is done in the
          traditional Indian style. We also follow the old Indian tradition of
          not bringing footwear to dining. We love to serve our customers so
          don't forget the signature dishes we offer.
        </p>
      </div>
      <div className="flex lg:flex lg:justify-center">
        <div className="content-center">
          <img className="p-2" src="/img/icons/dish.png" />
        </div>

        <div className=" mt-6 flex-col center   ">
          <h1 className="text-[#198039]  font-semibold text-md">
            Opening Hours
          </h1>
          <h1 className="text-xs">Breakfast: 08.00am - 10.30am</h1>
          <h1 className="text-xs">Lunch: 1.00pm - 3.00pm</h1>
          <h1 className="text-xs">Dinner: 4.30pm - 10.30pm</h1>
        </div>
      </div>

      <div className="mb-8">
        <Facilities />
      </div>

      <div className="">
        <img className="p-3 lg:hidden" src="/img/tents.png" />

        <div className="flex lg:justify-around">
          
          <img className="p-2 w-2/3 lg:w-1/3" src="/img/bedroom.png" />
          <div className="flex flex-col lg:hidden">
            <img className="w-2/3 lg:w-1/3 mt-6 " src="/img/dots.png" />
            <img className="p-2 lg:w-1/3 " src="/img/tree2.png" />
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <button className=" border border-black m-6 bg-[#E5E5E5] py-2 px-6  flex items-center justify-center">
            View Gallery
          </button>
        </div>
        <div className="lg:flex lg:items-center lg:border-2 lg:border-black lg:m-2">
          <div className="flex flex-col  items-center justify-center">
            <img className="m-6" src="/img/tentCircle.png" />
          </div>
          <div className="border border-black p-2 flex m-6 text-sm flex-col lg:h-1/2  items-center justify-center">
            <h1 className="font-semibold text-sm ">Devnash Tiwari</h1>
            <h1 className="text-center text-sm">
              Great Experience with good tents and good service.
            </h1>
          </div>
          <div className="flex flex-col  items-center justify-center">
            <img className="m-6" src="/img/tentCircle.png" />
          </div>
          <div className="border p-2 border-black flex m-6 text-sm flex-col items-center justify-center ">
            <h1 className="font-semibold text-sm">Pranit Patil</h1>
            <h1 className="text-center text-sm">
              Great Experience with good tents and good service.
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-2 m-6">
          <img src="/img/icons/insta.png" />
          <p className="text-xl  font-normal">#NirvanaStays</p>
          <p className="text-center text-sm">
            Follow @nirwanastays on instagram as we nirwana stays into a
            different world.
          </p>
        </div>
      </div>
      

      <div className=" lg:flex-col  ">
        <div className="flex lg:justify-center lg:items-center ">
          <img className="p-1 w-1/2 lg:w-1/4" src="/img/resort/resort1.png" />
          <img className="p-1 w-1/2 lg:w-1/4" src="/img/resort/resort2.png" />
        </div>
        <div className="flex lg:justify-center lg:items-center ">
          <img className="p-1 w-1/2 lg:w-1/4" src="/img/resort/resort3.png" />
          <img className="p-1 w-1/2 lg:w-1/4" src="/img/resort/resort4.png" />
        </div>
        <div className="flex lg:justify-center lg:items-center">
          <img className="p-1 w-1/2 lg:w-1/4" src="/img/resort/resort5.png" />
          <img className="p-1 w-1/2 lg:w-1/4" src="/img/resort/resort6.png" />
        </div>
      </div>
      <Footer2 />
    </>
  );
}
